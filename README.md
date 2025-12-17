# Team Members React App

This app displays a list of team members using a reusable `MemberCard` component. Each card shows a member's name, role, photo, and a short bio. A parent `Team` component maps over an array and renders multiple cards.

## Quick start

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev -- --host
```

Open the Local URL printed in the terminal.

## Structure

- `src/components/MemberCard.tsx`: Reusable card component receiving props: `name`, `role`, `photo`, `bio`.
- `src/components/Team.tsx`: Holds a `members` array and maps to `MemberCard` instances.
- `src/App.tsx`: Renders the `Team` component.
- `public/assets/members/*.svg`: Placeholder avatar images.

## Customize

Edit the `members` array in `src/components/Team.tsx` to change the displayed team. You can replace avatar SVGs by dropping images in `public/assets/members` and updating the `photo` paths (e.g., `/assets/members/alice.svg`).
