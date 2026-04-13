# Bossie Ride

A modern ride-hailing application built with Astro, React, and TypeScript. Features include user authentication (email, Google, Apple), ride booking, payment processing with M-Pesa, and real-time driver tracking.

## Features

- 🚗 **Ride Booking**: Request rides with multiple vehicle types
- 💳 **M-Pesa Integration**: Secure payments with M-Pesa STK Push
- 🔐 **Authentication**: Sign up and sign in with email, Google, or Apple
- 📍 **Real-time Tracking**: Track your driver and ride progress
- 📱 **Responsive Design**: Works on mobile and desktop
- 🌙 **Dark/Light Themes**: Multiple theme options

## Tech Stack

- **Frontend**: Astro, React, TypeScript, Tailwind CSS
- **Backend**: Astro API routes, Node.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT with OAuth (Google, Apple)
- **Payments**: M-Pesa Daraja API
- **Real-time**: Socket.io (planned)
- **UI Components**: Radix UI, Lucide Icons

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (local or MongoDB Atlas)
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bossie-ride
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your configuration (see Environment Variables section below).

4. Start the development server:
```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to view the app.

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/bossie-ride

# JWT
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=30d

# OAuth (Optional - for Google/Apple sign-in)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
APPLE_CLIENT_ID=your_apple_client_id
APPLE_TEAM_ID=your_apple_team_id
APPLE_KEY_ID=your_apple_key_id
APPLE_PRIVATE_KEY_PATH=./apple_private_key.p8
BASE_URL=http://localhost:4321

# M-Pesa (Optional)
DARAJA_ENV=sandbox
DARAJA_CONSUMER_KEY=your_mpesa_consumer_key
DARAJA_CONSUMER_SECRET=your_mpesa_consumer_secret
DARAJA_SHORTCODE=your_mpesa_shortcode
DARAJA_PASSKEY=your_mpesa_passkey
DARAJA_CALLBACK_URL=https://yourdomain.com/api/mpesa/callback

# Email (for notifications)
EMAIL_USER=your_email@gmail.com
EMAIL_APP_PASSWORD=your_app_password
```

## OAuth Setup

For Google and Apple sign-in functionality, see [OAUTH_SETUP.md](./OAUTH_SETUP.md) for detailed instructions.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro check` - Type checking

## Project Structure

```
src/
├── components/          # React components
│   ├── auth/           # Authentication forms
│   ├── common/         # Shared components
│   └── ...
├── layouts/            # Astro layouts
├── lib/               # Utilities and configurations
│   ├── models/        # MongoDB models
│   └── ...
├── pages/             # Astro pages and API routes
│   ├── api/           # API endpoints
│   └── ...
└── styles/            # Global styles
```

## API Routes

- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `GET /api/auth/google` - Google OAuth initiation
- `GET /api/auth/apple` - Apple OAuth initiation
- `GET /api/rides` - Get user rides
- `POST /api/rides` - Create new ride
- `POST /api/mpesa/stkpush` - Initiate M-Pesa payment

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and type checking
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For questions or issues, please open an issue on GitHub.
