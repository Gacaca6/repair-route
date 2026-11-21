import { actions, areas, categories, findOptions } from './directory.js';

export function registerActions(registry) {
  registry.register({
    name: 'find_options',
    description: 'Find directory entries and source URLs by listed area, intended action, and item category.',
    effect: 'read',
    inputSchema: {
      type: 'object',
      additionalProperties: false,
      required: ['area', 'action', 'category'],
      properties: {
        area: { type: 'string', enum: areas },
        action: { type: 'string', enum: actions },
        category: { type: 'string', enum: categories },
      },
    },
    execute: findOptions,
  });
}
