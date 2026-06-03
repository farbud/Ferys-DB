# Ferys Dashboard

A modern, AI-inspired team analytics dashboard built with Next.js 15, TypeScript, and Tailwind CSS. Features real-time metrics, team activity tracking, live chat, and a sleek dark UI.

![Dashboard Preview](https://i.imgur.com/placeholder.png)

## ✨ Features

- **Overview Dashboard** — Live metrics, team activity feed, and recent alerts
- **Team Management** — Member profiles, online status, and activity scores
- **User Analytics** — User table with plan tiers and activity status
- **Real-time Chat** — Team messaging with Supabase live subscriptions
- **Notifications** — System alerts with type-based color coding
- **Authentication** — Secure login with NextAuth.js (credentials + OAuth)
- **Dark Mode** — Full dark theme with custom CSS variables
- **Responsive** — Works on desktop and mobile

## 🛠 Tech Stack

| Category      | Technology              |
| ------------- | ----------------------- |
| Framework     | Next.js 15 (App Router) |
| Language      | TypeScript              |
| Styling       | Tailwind CSS v4         |
| Auth          | NextAuth.js v5          |
| Database      | Supabase (PostgreSQL)   |
| Realtime      | Supabase Realtime       |
| State         | Zustand                 |
| Data Fetching | TanStack Query          |
| Icons         | Lucide React            |
| Animation     | Framer Motion           |
| Deployment    | Liara / Vercel          |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- A [Supabase](https://supabase.com) account (free tier works)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/ferys-dashboard.git
cd ferys-dashboard

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

Fill in `.env.local` with your credentials:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# OAuth (optional)
GITHUB_ID=your-github-oauth-id
GITHUB_SECRET=your-github-oauth-secret
```

To generate a secure `NEXTAUTH_SECRET`:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### Database Setup

Run the following SQL in your Supabase SQL Editor:

```sql
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  name text,
  role text default 'member',
  avatar_url text,
  created_at timestamptz default now()
);

create table public.messages (
  id uuid primary key default gen_random_uuid(),
  sender_id uuid references public.profiles,
  content text not null,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;
alter table public.messages enable row level security;

create policy "users see own profile" on public.profiles
  for select using (auth.uid() = id);

create policy "all can read messages" on public.messages
  for select to authenticated using (true);

create policy "auth users can insert messages" on public.messages
  for insert to authenticated with check (auth.uid() = sender_id);
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Demo credentials:**

```
Email: demo@nexus.dev
Password: demo123
```

## 📁 Project Structure

```
src/
├── app/
│ ├── (auth)/login/ # Login page
│ ├── (dashboard)/ # Protected dashboard routes
│ │ ├── page.tsx # Overview
│ │ ├── team/ # Team members
│ │ ├── users/ # User management
│ │ ├── analytics/ # Analytics
│ │ ├── messages/ # Chat
│ │ └── settings/ # Settings
│ └── api/auth/ # NextAuth API routes
├── components/
│ ├── ui/dashboard/ # Sidebar, Topbar, MetricCard
│ ├── charts/ # Recharts components
│ ├── chat/ # Chat panel
│ └── team/ # Team components
├── lib/
│ ├── auth.ts # NextAuth config
│ ├── supabase/ # Supabase clients
│ └── utils.ts # Helper functions
├── hooks/ # Custom React hooks
├── stores/ # Zustand stores
└── types/ # TypeScript types
```

## 🔐 Architecture Decisions

**Why App Router?**
Next.js App Router enables server components by default, reducing client-side JavaScript and improving performance. Nested layouts make the dashboard structure clean and maintainable.

**Why Zustand over Redux?**
Zustand has minimal boilerplate and works seamlessly with React's concurrent features. For a dashboard of this scale, the simplicity of Zustand outweighs Redux's added complexity.

**Why Supabase?**
Supabase provides PostgreSQL with built-in Row Level Security, real-time subscriptions, and authentication — all on a generous free tier. This eliminates the need for a separate WebSocket server.

**Why NextAuth.js?**
NextAuth handles the complexity of JWT management, OAuth flows, and session persistence. The credentials provider allows demo login while GitHub/Google OAuth is one config away.

## 🚢 Deployment

### Deploy to Liara (Recommended for Iran)

```bash
# Install Liara CLI
npm install -g @liara/cli

# Login
liara login

# Deploy
liara deploy --platform=node
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel login
vercel --prod
```

Add all environment variables in the platform dashboard after deploying.

## 📝 License

MIT — feel free to use this project as a portfolio piece or starting point.

---

Built with ❤️ using Next.js and Supabase
