# Reflect Fashion

A modern fashion store built with Next.js and TypeScript.

## Simple project structure

```
reflect-fashion/
├── app/                 # Next.js routes, grouped without changing URLs
│   ├── (store)/         # Home, products, cart, checkout, account, wishlist
│   ├── (info)/          # About, contact, FAQ, policies and delivery pages
│   ├── layout.tsx       # Shared page shell, navigation and footer
│   └── globals.css      # Site-wide styles and colours
├── components/          # All reusable website sections and UI
├── lib/                 # Product data and shopping-cart state
├── public/images/       # Product and hero images
├── package.json         # Project dependencies and commands
└── README.md            # This guide
```

### Where to edit things

- Change the home page layout in `app/(store)/page.tsx`.
- Change the hero section in `components/Hero.tsx`.
- Change the navigation in `components/Navbar.tsx`.
- Change product information in `lib/data.ts`.
- Add or replace images in `public/images/`.
- Adjust site-wide colours and styles in `app/globals.css`.

## Start the website

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
