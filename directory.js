const records = [
  {
    id: 'enviroserve',
    name: 'Enviroserve Rwanda',
    area: 'Kigali',
    actions: ['repair', 'recycle'],
    accepts: ['electronics'],
    note: 'The provider describes repair, refurbishment, and recycling. Ask whether it can handle your device and where to bring it.',
    source: 'https://enviroserve.rw/about-company/',
    sourceType: 'Provider website',
  },
  {
    id: 'musanze',
    name: 'Musanze e-waste collection program',
    area: 'Musanze',
    actions: ['recycle'],
    accepts: ['electronics'],
    note: 'The 2022 public campaign names a collection point in Musanze. Verify its current address, opening hours, and accepted items with the provider before travelling.',
    source: 'https://www.minict.gov.rw/news-detail/rwanda-launches-campaign-to-boost-e-waste-collection-and-recycling',
    sourceType: 'Historical government announcement',
  },
  {
    id: 'repair-cafe',
    name: 'Repair Café directory',
    area: 'Other location',
    actions: ['repair'],
    accepts: ['electronics', 'other'],
    note: 'Use the directory to look for an event in your area. Ask organizers whether a volunteer can look at your item and whether registration is required.',
    source: 'https://www.repaircafe.org/en/visit/',
    sourceType: 'Directory operator',
  },
];

export const areas = ['Kigali', 'Musanze', 'Other location'];
export const actions = ['repair', 'recycle'];
export const categories = ['electronics', 'other'];

export function findOptions({ area, action, category }) {
  if (!areas.includes(area) || !actions.includes(action) || !categories.includes(category)) {
    throw new Error('Choose a listed location, action, and item category.');
  }
  const options = records.filter((entry) => entry.area === area
    && entry.actions.includes(action) && entry.accepts.includes(category));

  return {
    options,
    nextStep: options.length
      ? 'Verify device acceptance and opening times with the organizer before travelling.'
      : 'No matching option is documented in this directory. Try another listed location or contact a local organizer.',
  };
}
