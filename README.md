# Presiding UI Preview

This React/Vite project is configured as a UI-only preview. Page content and form options come from local mock data; it does not require or send requests to a backend. Form submissions show a demo confirmation and are not saved.

## Run locally

Install dependencies with `npm install`, then start the development server with `npm run dev`.

## Edit preview content

Update `src/data/mockData.js` to change mock services, sub-services, insights, jobs, locations, and form dropdown options. Mock API paths are resolved locally by the data helpers in `src/functions/`.
