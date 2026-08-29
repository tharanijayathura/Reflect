# Reflect Fashion

A modern, premium T-shirt e-commerce platform built with Next.js and TypeScript.

## Project Structure

```
reflect-fashion/
├── app/                  # Next.js App Router pages
├── components/           # Reusable React components
│   ├── common/           # Shared UI components (Button, Badge, etc.)
│   ├── home/             # Homepage sections (Hero, Categories, etc.)
│   ├── layout/           # Layout components (Navbar, Footer)
│   └── products/         # Product-related components
├── lib/                  # Data, utilities, and context
├── public/               # Static assets (images, icons)
├── backend/              # Backend API (scaffold — ready for development)
│   ├── src/              # API source code
│   ├── package.json
│   └── tsconfig.json
└── package.json          # Frontend dependencies
```

## Getting Started

### Frontend

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Backend

```bash
cd backend
npm install
npm run dev
```

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript, MUI Icons, Tailwind CSS
- **Backend**: TypeScript (scaffold ready for Express/Fastify/Hono)
- **Deployment**: Vercel

## Deploy

Deploy to [Vercel](https://vercel.com) with one click — the easiest way to go live.
