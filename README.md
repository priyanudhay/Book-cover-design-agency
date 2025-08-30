# Book Cover Design Agency

A modern, responsive website for a professional book cover design agency built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Modern UI/UX**: Clean, responsive design that works on all devices
- **Performance Optimized**: Built with Next.js for fast page loads and SEO benefits
- **Type Safety**: Full TypeScript support for better developer experience
- **Authentication**: Integrated with Clerk for user authentication
- **Payments**: Stripe integration for secure payment processing
- **Database**: PostgreSQL with Prisma ORM for data persistence
- **UI Components**: Built with ShadCN UI components for a consistent look and feel
- **Dark Mode**: Built-in dark/light mode support

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **UI Components**: ShadCN UI, Radix UI
- **Authentication**: Clerk
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Payments**: Stripe
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn
- PostgreSQL database
- Clerk account (for authentication)
- Stripe account (for payments)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/book-cover-design-agency.git
   cd book-cover-design-agency
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Set up environment variables
   Create a `.env.local` file in the root directory and add the following:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/book_cover_agency"
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. Set up the database
   ```bash
   npx prisma migrate dev --name init
   ```

5. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
book-cover-design-agency/
├── src/
│   ├── app/                    # App router
│   │   ├── (auth)/             # Authentication routes
│   │   ├── (dashboard)/        # User dashboard routes
│   │   ├── api/                # API routes
│   │   ├── contact/            # Contact page
│   │   ├── faq/                # FAQ page
│   │   ├── portfolio/          # Portfolio page
│   │   ├── services/           # Services page
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/             # Reusable components
│   │   ├── ui/                 # ShadCN UI components
│   │   ├── main-nav.tsx        # Main navigation
│   │   └── theme-provider.tsx  # Theme provider
│   ├── lib/                    # Utility functions
│   │   ├── utils.ts            # Helper functions
│   │   ├── db.ts              # Database client
│   │   └── stripe.ts           # Stripe utilities
│   └── styles/                 # Global styles
├── prisma/                    # Prisma schema and migrations
├── public/                    # Static files
├── .env.local                 # Environment variables
├── next.config.js             # Next.js config
├── package.json               # Project dependencies
├── postcss.config.js          # PostCSS config
├── tailwind.config.js         # Tailwind CSS config
└── tsconfig.json              # TypeScript config
```

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env.local` file:

- `DATABASE_URL`: PostgreSQL database connection string
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk publishable key
- `CLERK_SECRET_KEY`: Clerk secret key
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`: Clerk sign-in URL
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL`: Clerk sign-up URL
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`: Redirect URL after sign-in
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`: Redirect URL after sign-up
- `STRIPE_SECRET_KEY`: Stripe secret key
- `STRIPE_WEBHOOK_SECRET`: Stripe webhook secret
- `NEXT_PUBLIC_APP_URL`: Your application URL (e.g., http://localhost:3000)

## Deployment

### Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Push your code to a GitHub repository
2. Import the repository on Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

### Other Platforms

You can also deploy this application to other platforms like Netlify, Heroku, or any Node.js hosting provider that supports Next.js.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS
- [ShadCN UI](https://ui.shadcn.com/) - for the beautiful UI components
- [Clerk Documentation](https://clerk.com/docs) - for authentication
- [Stripe Documentation](https://stripe.com/docs) - for payment processing
