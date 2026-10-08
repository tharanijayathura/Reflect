# Reflect Fashion — PERN Stack E-Commerce

A modern, high-performance T-shirt e-commerce platform built on the **PERN Stack** (PostgreSQL, Express.js, React / Next.js, Node.js) with TypeScript.

---

## 🏛️ Architecture Overview

```
reflect-fashion/
├── client/                     # [FRONTEND] Next.js 16 + React 19 + MUI + Tailwind CSS
│   ├── app/                    # Next.js App Router (pages & layouts)
│   ├── components/             # Reusable UI components (common, home, layout, products)
│   ├── lib/                    # Client state, cart context, product data & API fetchers
│   ├── public/                 # Static images & brand assets
│   ├── next.config.ts          # Next.js & CSP configurations
│   ├── tsconfig.json           # Client TypeScript configuration
│   └── package.json            # Client dependencies & scripts
│
├── server/                     # [BACKEND] Node.js + Express + TypeScript + PostgreSQL
│   ├── src/
│   │   ├── config/             # DB connection pool (pg) & environment configs
│   │   ├── controllers/        # Business logic for products, categories, orders, users
│   │   ├── routes/             # RESTful API route definitions (/api/*)
│   │   ├── middleware/         # Error handling, 404 handler, auth & validators
│   │   ├── database/           # PostgreSQL schema.sql, seed.sql, migration runners
│   │   └── server.ts           # Express server entry point
│   ├── .env.example            # Backend environment configuration template
│   ├── tsconfig.json           # Server TypeScript configuration
│   └── package.json            # Server dependencies & scripts
│
├── package.json                # Monorepo workspace orchestrator
├── .gitignore                  # Unified gitignore for monorepo
└── README.md                   # Project documentation
```

---

## 🚀 Quick Start

### 1. Install Dependencies
Run from the root directory to install both `client` and `server` dependencies:

```bash
# In root directory
npm install
npm run dev --workspace=client
```

### 2. Frontend Development (Client)
Start the Next.js development server:

```bash
npm run dev:client
# or from client directory:
cd client && npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Backend Development (Server)
Copy environment variables and configure your PostgreSQL connection:

```bash
cd server
cp .env.example .env
npm install
npm run dev
```

### 4. Database Setup (PostgreSQL)
Run database migrations and seed data:

```bash
# Migrate PostgreSQL Schema
npm run db:migrate

# Seed Initial Products & Categories
npm run db:seed
```

---

## 📡 REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service health check and uptime status |
| `GET` | `/api/products` | Retrieve all products (supports `?category`, `?featured`, `?trending`, `?search`) |
| `GET` | `/api/products/featured` | Retrieve featured products |
| `GET` | `/api/products/:slug` | Retrieve single product details with variants |
| `GET` | `/api/categories` | Retrieve all categories with product counts |
| `GET` | `/api/categories/:slug` | Retrieve single category details |
| `POST` | `/api/orders` | Create a new checkout order with line items |
| `GET` | `/api/orders/:id` | Retrieve order status and item breakdown |

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 16 (App Router), React 19, TypeScript, Material-UI Icons, Tailwind CSS v4, Emotion.
- **Backend**: Node.js, Express.js, TypeScript, PostgreSQL (`pg` pool), Helmet, Morgan, CORS.
- **Database**: PostgreSQL with UUIDs, indexing, foreign keys, and relational constraints.
- **Deployment**: Vercel (Client) / Node.js Host or Render / Railway / Supabase (Server & DB).
