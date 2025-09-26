# 🚀 Fruit Habibi Deployment Guide

## Quick Start

### 1. Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:3000
```

### 2. Supabase Setup

1. **Create Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Note your project URL and anon key

2. **Set up Database**
   - Go to SQL Editor in Supabase dashboard
   - Run the contents of `supabase/schema.sql`
   - Run the contents of `supabase/seed.sql`

3. **Configure Environment**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

### 3. Vercel Deployment

1. **Connect to Vercel**
   - Push your code to GitHub
   - Connect your repository to Vercel
   - Add environment variables in Vercel dashboard

2. **Environment Variables for Production**
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_production_supabase_service_role_key
   NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
   ```

3. **Deploy**
   - Vercel will automatically deploy on every push to main
   - Preview deployments for pull requests

## Demo Accounts

After seeding the database, you can use these accounts:

- **Admin**: `admin@fruithabibi.com` / `admin123`
- **Farmer**: `farmer1@example.com` / `farmer123`
- **Importer**: `importer1@example.com` / `importer123`

## Features Overview

### For Farmers
- Register and create profile
- Add product listings with images
- Manage inventory and pricing
- Receive messages from importers
- View analytics and sales

### For Importers
- Browse and search products
- Filter by category, country, price
- Contact farmers directly
- Negotiate deals via messaging
- Track purchase history

### For Admins
- Manage user accounts
- Approve/reject product listings
- View platform analytics
- Monitor user activity
- Handle disputes

## Database Schema

### Tables
- `users` - User profiles with roles
- `products` - Product listings
- `messages` - Real-time messaging
- `chats` - Conversation organization

### Security
- Row-Level Security (RLS) enabled
- Role-based access control
- Secure authentication with Supabase

## Customization

### Branding
- Update colors in `tailwind.config.ts`
- Modify logo and branding in components
- Customize email templates in Supabase

### Features
- Add new product categories
- Implement payment processing
- Add shipping and logistics
- Create mobile app with React Native

## Support

For issues or questions:
- Check the README.md for detailed setup
- Review the code comments for implementation details
- Open an issue in the GitHub repository

## Production Checklist

- [ ] Set up Supabase project
- [ ] Configure environment variables
- [ ] Deploy to Vercel
- [ ] Test all user flows
- [ ] Set up monitoring and analytics
- [ ] Configure custom domain
- [ ] Set up backup and recovery
- [ ] Implement payment processing
- [ ] Add SSL certificates
- [ ] Set up error tracking

---

**Fruit Habibi** - Connecting farmers with importers worldwide 🌱➡️🏪
