# Be the Oasis

A Next.js project for sharing event venue and map content.

## Getting Started

### Install dependencies

```bash
cd /Users/seankillingsworth/be-the-oasis
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

## Project Structure

- `app/` — main Next.js app directory
- `src/app/_components/` — shared UI components
- `public/` — static assets

## Accomplished

- Added a **Calendar** view in the Spaces section — 7-day week grid with prev/next/today nav and a city filter, showing scheduled events per day.
- Replaced rounded-pill buttons with thin rectangular buttons site-wide and added a large green `betheoasis` pennant above the hero text on the home page.
- Renamed the `Become a host` CTA and `/host` page heading to `Register a space`.
- Added a header link `Already know of a phone-free space?` that opens `/suggest-a-space`, a tip form for surfacing venues we should follow up with.

## Collaboration Questions

Use this section to add questions for teammates, reviewers, or collaborators.

- What is the priority order for new homepage sections?
- Hi John: can you review the current map interaction and suggest any UX improvements?

> Add your questions here so the team can see them and respond directly in PRs or issues.

## How to Contribute

1. Create a branch from `main`.
2. Make your changes.
3. Run the app locally and verify your updates.
4. Open a PR with a summary and any questions.

## Notes

- This project uses Next.js 16 and React 19.
- If you need to add a new design asset, place it in `public/images/` and reference it using `/images/...`.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying)
