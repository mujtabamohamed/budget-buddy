# Budget Buddy

A personal finance and budget tracking web app built with Next.js. Track income and expenses, manage workspaces, and visualize spending patterns through interactive charts.

## Features

- **Dashboard** — Overview of balance, recent transactions, and spending trends
- **Analytics** — Line, bar, and pie charts for detailed financial insights
- **Workspaces** — Organize finances by workspace with team member support
- **Transaction Management** — Log income and expenses with filtering options
- **Authentication** — Secure sign-in via Clerk

## Tech Stack

- **Framework** — [Next.js 15](https://nextjs.org) (App Router)
- **Auth** — [Clerk](https://clerk.com)
- **Database** — PostgreSQL (`pg`)
- **Charts** — MUI X Charts
- **UI** — Tailwind CSS, shadcn/ui, Radix UI, Lucide Icons

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/mujtabamohamed/budget-buddy.git
   cd budget-buddy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables — create a `.env` file:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```

4. Set up the database using the provided schema:
   ```bash
   psql -U your_user -d your_database -f database.sql
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── dashboard/        # Main dashboard page
├── analytics/        # Charts and analytics
└── workspace/        # Workspace and group management
components/           # Reusable UI components
lib/                  # Database and utility helpers
database.sql          # PostgreSQL schema
```
