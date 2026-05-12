# OAuth Setup Guide

This guide explains how to set up Google and Apple OAuth for the Bossie Ride application.

## Google OAuth Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" in the left sidebar
5. Click "Create Credentials" > "OAuth 2.0 Client IDs"
6. Configure the OAuth consent screen if prompted
7. Set the application type to "Web application"
8. Add authorized redirect URIs:
   - For development: `http://localhost:4321/api/auth/google/callback`
   - For production: `https://yourdomain.com/api/auth/google/callback`
9. Copy the Client ID and Client Secret

## Apple OAuth Setup

1. Go to the [Apple Developer Portal](https://developer.apple.com/)
2. Sign in with your Apple Developer account
3. Go to "Certificates, Identifiers & Profiles"
4. Under "Identifiers", click the "+" button to create a new identifier
5. Select "App IDs" and create a new App ID for your app
6. Enable "Sign In with Apple" capability
7. Create a Services ID for OAuth:
   - Go to "Identifiers" > "Services IDs"
   - Create a new Services ID
   - Configure the Services ID with your domain and return URLs
8. Generate a private key for Sign In with Apple
9. Download the private key file

## Environment Variables

Add the following to your `.env` file:

```env
# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

# Apple OAuth
APPLE_CLIENT_ID=your_apple_client_id_here
APPLE_TEAM_ID=your_apple_team_id_here
APPLE_KEY_ID=your_apple_key_id_here
APPLE_PRIVATE_KEY_PATH=./apple_private_key.p8

# Base URL
BASE_URL=http://localhost:4321
```

## Apple Private Key

Place your Apple private key file (`AuthKey_XXXXX.p8`) in the root directory of your project and update the `APPLE_PRIVATE_KEY_PATH` accordingly.

## Testing OAuth

1. Start your development server: `npm run dev`
2. Go to `/signup` or `/login`
3. Click the Google or Apple sign-in buttons
4. Complete the OAuth flow
5. You should be redirected back to the app with a success message

## Production Deployment

When deploying to production:

1. Update the `BASE_URL` environment variable
2. Add production redirect URIs to your OAuth provider configurations
3. Ensure your domain is properly configured for Apple Sign In
4. Test the OAuth flow in production

## Troubleshooting

- **Google OAuth errors**: Check that your redirect URI matches exactly
- **Apple OAuth errors**: Ensure your private key is correct and the team ID matches
- **CORS issues**: Make sure your domain is allowed in OAuth settings
- **Token errors**: Check that your client secrets are correct

## Security Notes

- Never commit OAuth credentials to version control
- Use environment variables for all sensitive data
- Regularly rotate your OAuth client secrets
- Monitor your OAuth usage in the provider dashboards