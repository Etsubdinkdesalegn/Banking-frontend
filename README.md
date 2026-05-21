# CBE Digital Banking Platform — Frontend

> Modern web client for the Commercial Bank of Ethiopia (CBE) Digital Banking Experience Platform.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38bdf8?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)

## Overview

A premium, responsive web application providing digital banking services for CBE customers. Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS, it delivers a modern banking experience with real-time updates and smooth interactions.

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 15** | React framework (App Router) |
| **TypeScript 5** | Type safety |
| **Tailwind CSS 3.4** | Utility-first styling |
| **Zustand** | Lightweight state management |
| **Axios** | HTTP client |
| **Radix UI** | Accessible UI primitives |
| **Lucide React** | Icon library |
| **Sonner** | Toast notifications |

## Features

- 🔐 **Secure Authentication** — Phone number + JWT login/signup
- 🏦 **Account Dashboard** — Real-time balance and account overview
- 💸 **Transactions** — Cash transfer, account-to-account, deposits, withdrawals
- 🎫 **Smart Queue** — Digital token booking with live status updates
- 👤 **Profile Management** — User information and avatar upload
- 🔒 **Security Settings** — Password management
- 📱 **Responsive Design** — Mobile-first, works on all screen sizes

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env.local
# Edit .env.local with your backend API URL
```

### 3. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
src/
├── api/                    # API client configuration
│   └── axios.ts           # Axios instance with interceptors
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication route group
│   │   ├── login/         # Login page
│   │   └── signup/        # Registration page
│   ├── dashboard/         # Main dashboard
│   ├── transactions/      # Banking transactions
│   ├── queue/             # Queue management
│   ├── profile/           # User profile
│   ├── security/          # Security settings
│   ├── privacy-policy/    # Legal pages
│   ├── terms/
│   ├── support/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # App shell components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── UserProfile.tsx
│   └── ui/                # Reusable UI components
│       ├── avatar.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── label.tsx
├── hooks/                  # Custom React hooks
│   └── useProfile.ts
├── lib/                    # Utility functions
│   ├── api.ts
│   └── utils.ts
├── store/                  # Zustand state management
│   └── userStore.ts
└── types/                  # TypeScript type definitions
    └── user.ts
```

## Docker

Build and run with Docker:

```bash
docker build -t cbe-banking-frontend .
docker run -p 3000:3000 cbe-banking-frontend
```

## Related Repositories

- **Backend API**: [Banking-backend](https://github.com/Etsubdinkdesalegn/Banking-backend)

## License

This project is licensed under the MIT License.
