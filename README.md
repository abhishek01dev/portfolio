# Abhishek Kumar Singh - Premium Developer Portfolio

This is a modern, highly animated, and premium Next.js developer portfolio designed for a Software Development Engineer leaning heavily into Full Stack / GenAI capabilities.

## Features

- **Next.js 16 (App Router)** & **Turbopack** for blazing fast performance.
- **Tailwind CSS v4** setup with a custom dark-mode first design system (`globals.css`).
- **Framer Motion** powered scroll animations, timeline reveals, hover effects, and animated grid layouts.
- **Strictly Typed Content** using TypeScript interfaces (`types/index.ts`) perfectly separating data from presentation (`data/portfolio.ts`).
- **Fully Responsive** across all device sizes.
- **SEO Optimized** metadata setup in `layout.tsx`.

## Sections
1. **Hero**: Staggered text animations and key CTA buttons.
2. **About**: Engineering philosophy and domain focus.
3. **Experience**: Animated timeline with job highlights and tech.
4. **Skills**: Categorized technology arsenal.
5. **GenAI**: Strategic focus on AI-assisted workflows and integrations.
6. **Projects**: Filterable grid with animated AnimatePresence layouts.
7. **Services**: Domain expertise and service offerings.
8. **Achievements**: Statistical performance metric cards.
9. **Contact**: Fully styled form ready to integrate with Email APIs.

## Local Development Setup

To run this project locally, ensure you have Node.js 20+ installed.

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization Guide

- **Content & Data:** All text, projects, skills, and experience are controlled from `data/portfolio.ts`. Update this file to change the site content without editing components.
- **Styling:** Key colors, radius variables, and typography are defined in `app/globals.css`. Adjust the `--color-primary` or `--background` to tweak the theme.
- **Resume:** Place your resume PDF in the `public/` directory and name it `Abhishek Kumar Singh.pdf`.

## Production Build

To test the production build locally:

```bash
npm run build
npm run start
```

## Deployment

This portfolio is optimized for deployment on Vercel:
1. Push the code to a GitHub repository.
2. Import the project in Vercel.
3. The framework preset (Next.js) will automatically apply.
4. Click **Deploy**.
