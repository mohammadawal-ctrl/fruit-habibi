# 🍎 Fruit Habibi - B2B Fruits & Vegetables Marketplace

A production-ready B2B marketplace connecting African and Asian farmers with Middle Eastern importers and distributors. Built with Next.js 14, TypeScript, Tailwind CSS, and Supabase.

## ✨ Features

### Core Functionality
- **Dual User Roles**: Farmers/Exporters and Importers/Distributors
- **Product Listings**: Create, edit, and manage product listings with images, pricing, and descriptions
- **Real-time Messaging**: Private chat system between farmers and importers
- **Search & Filtering**: Advanced search with category, country, and price filters
- **Admin Panel**: Complete user and product management system
- **Responsive Design**: Pixel-perfect on mobile, tablet, and desktop

### User Experience
- **Modern UI**: Clean, professional design with smooth animations
- **Authentication**: Secure email/password authentication with Supabase
- **Profile Management**: Comprehensive user profiles with company information
- **Quality Assurance**: Product approval system for verified listings
- **Real-time Updates**: Live messaging and notification system

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router) with React 18
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + Headless UI + Heroicons
- **Backend**: Supabase (PostgreSQL + Row-Level Security)
- **Authentication**: Supabase Auth
- **Deployment**: Vercel with GitHub Actions
- **Animations**: Framer Motion

## 📁 Project Structure

```
fruit-habibi/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Landing page
│   │   ├── login/             # Authentication pages
│   │   ├── register/
│   │   ├── listings/          # Product listings
│   │   ├── profile/           # User profile
│   │   └── admin/             # Admin dashboard
│   ├── components/            # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ProductCard.tsx
│   │   ├── MessageModal.tsx
│   │   ├── AdminTable.tsx
│   │   └── Button.tsx
│   └── lib/                   # Utilities and configurations
│       ├── supabase.ts        # Supabase client and types
│       └── auth.ts            # Authentication utilities
├── supabase/                  # Database schema and seed data
│   ├── schema.sql
│   └── seed.sql
├── .github/workflows/         # GitHub Actions
├── vercel.json               # Vercel configuration
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ and npm
- Supabase account
- Vercel account (for deployment)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd fruit-habibi
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set up Supabase
1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Settings > API to get your project URL and anon key
3. Copy `.env.example` to `.env.local` and fill in your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Set up Database
1. In your Supabase dashboard, go to SQL Editor
2. Run the contents of `supabase/schema.sql` to create tables and policies
3. Run the contents of `supabase/seed.sql` to add sample data

### 5. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 🎯 Demo Accounts

The seed data includes demo accounts for testing:

- **Admin**: `admin@fruithabibi.com` / `admin123`
- **Farmer**: `farmer1@example.com` / `farmer123`
- **Importer**: `importer1@example.com` / `importer123`

## 🚀 Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push to main branch

### Environment Variables for Production
```env
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_production_supabase_service_role_key
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
```

## 📊 Database Schema

### Tables
- **users**: User profiles with roles (farmer, importer, admin)
- **products**: Product listings with images, pricing, and metadata
- **messages**: Real-time messaging between users
- **chats**: Chat organization and metadata

### Key Features
- Row-Level Security (RLS) for data protection
- Automatic timestamps with triggers
- User role-based access control
- Product approval workflow

## 🎨 Design System

### Color Palette
- **Primary**: Green (#16a34a) - Fresh, natural feel
- **Secondary**: Warm accents (gold/orange highlights)
- **Neutral**: Gray scale for text and backgrounds

### Typography
- Modern, clean fonts with proper hierarchy
- Responsive text sizing
- Accessible contrast ratios

### Components
- Reusable Button component with variants
- Responsive ProductCard with hover effects
- Modal system for messaging
- Admin table with sorting and pagination

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@fruithabibi.com or create an issue in the GitHub repository.

## 🎉 Acknowledgments

- Built with ❤️ using Next.js, Supabase, and Tailwind CSS
- Icons by Heroicons
- Animations by Framer Motion
- Deployed on Vercel

---

**Fruit Habibi** - Connecting farmers with importers, one transaction at a time. 🌱➡️🏪