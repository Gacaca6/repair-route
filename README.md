# Repair Route

Repair Route is a small source-backed directory for working out what to do with unwanted electronics. Its first records cover Kigali, Musanze, and an international repair-event directory. It distinguishes a provider’s published services from a historical collection announcement and prompts people to verify acceptance before travelling.

The 2024 Global E-waste Monitor reports 62 million tonnes of e-waste generated in 2022. Rwanda’s ICT ministry has identified awareness about where to take old equipment as part of its collection effort. [Global E-waste Monitor](https://www.itu.int/en/ITU-D/Environment/Pages/Publications/The-Global-E-waste-Monitor-2024.aspx) · [Rwanda collection initiative](https://www.minict.gov.rw/news-detail/rwanda-launches-campaign-to-boost-e-waste-collection-and-recycling)

Run `npm test` to verify the directory lookup. Run `python -m http.server 8710 --bind 127.0.0.1` from the source directory to serve the site locally. The browser assistant uses the same read-only lookup as the form and requests provider credentials only through the browser runtime. The `peer/` folder publishes a separate read-only checklist agent. A visitor approves its cross-origin use before the runtime fetches its definition.

The project vendors the challenge’s Apache-licensed reference browser runtime at the competition-start revision `e4a8727d5c6807233b8976f28494bbdac7bc1c6e`. Significant implementation and testing assistance came from OpenAI Codex. [Open Agentic Web specification](https://github.com/cognizant-ai-labs/agentic-web/blob/e4a8727d5c6807233b8976f28494bbdac7bc1c6e/docs/worldwide_agentic_web_mvp_spec.md)
