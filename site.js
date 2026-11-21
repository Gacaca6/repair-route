import { areas, findOptions } from './directory.js';

const form = document.querySelector('#search');
const output = document.querySelector('#options');
const status = document.querySelector('#assistant-status');

function makeElement(tag, text) {
  const element = document.createElement(tag);
  element.textContent = text;
  return element;
}

for (const area of areas) {
  form.elements.area.add(new Option(area, area));
}

function renderOptions() {
  const result = findOptions(Object.fromEntries(new FormData(form)));
  output.replaceChildren();
  for (const { name, note, source, sourceType } of result.options) {
    const row = document.createElement('article');
    const citation = makeElement('a', sourceType);
    citation.href = source;
    row.append(makeElement('h3', name), makeElement('p', note), citation);
    output.append(row);
  }
  output.append(makeElement('p', result.nextStep));
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderOptions();
});
renderOptions();

const siteBase = new URL('./', import.meta.url);
try {
  const { boot } = await import('./runtime/index.js');
  const { engine } = await boot('#agent-app', {
    originUrl: siteBase.href,
    sandboxWorkerUrl: new URL('runtime/sandbox-worker.js', siteBase).href,
  });
  status.textContent = engine.byokKey && engine.byokKey !== 'demo'
    ? 'Assistant ready.' : 'Choose a model and connect your provider in the settings.';
} catch (error) {
  status.textContent = 'Assistant unavailable. The directory is ready to use.';
  console.error('Assistant startup failed', error);
}
