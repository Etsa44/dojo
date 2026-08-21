# Modal Component Demo

A small React + Vite project that demonstrates a reusable modal UI with animated open/close transitions and a card-based layout.

## Overview

This project is a front-end exercise focused on building a polished modal interaction using:

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React icons

The app includes a simple button-triggered modal with a close button, animated scaling transitions, and custom reusable UI building blocks such as `Button`, `Card`, `CardHeader`, `CardContent`, and `CardFooter`.

## Features

- Open and close modal interaction
- Smooth transition animation
- Reusable card and button components
- Responsive centered layout
- Clean and modern styling with Tailwind

## Project Structure

```bash
front-end/
└── react/
    └── modal/
        ├── public/
        ├── src/
        │   ├── components/
        │   │   ├── Button.tsx
        │   │   └── card/
        │   │       ├── Card.tsx
        │   │       ├── CardContent.tsx
        │   │       ├── CardFooter.tsx
        │   │       └── CardHeader.tsx
        │   ├── App.tsx
        │   ├── main.tsx
        │   └── index.css
        ├── package.json
        ├── vite.config.ts
        ├── tsconfig.json
        └── README.md
```

## Prerequisites

Make sure you have the following installed:

- Node.js 18+
- pnpm

## Installation

From the project root:

```bash
pnpm install
```

Then move into the modal app folder:

```bash
cd front-end/react/modal
```

## Run the app locally

```bash
pnpm dev
```

This will start the Vite development server. Open the local URL shown in the terminal to view the app.

## Build for production

```bash
pnpm build
```

The production build will be generated in the `dist` folder.

## Preview production build

```bash
pnpm preview
```

## Notes

This project is designed as a small UI component practice, so the modal behavior and styling are intentionally simple but easy to expand.

If you want, you can extend it with:

- keyboard escape close support
- backdrop click close
- accessibility improvements
- custom modal sizes and themes
