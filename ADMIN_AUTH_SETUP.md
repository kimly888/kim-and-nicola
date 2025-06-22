# Admin Authentication Setup Guide

This guide will help you set up authentication for your admin dashboard using Supabase.

## Prerequisites

- Supabase project created and configured
- Environment variables set up (you should already have these)

## Supabase Authentication Setup

### 1. Enable Authentication in Supabase Dashboard

1. Go to your Supabase project dashboard
2. Navigate to **Authentication** > **Settings**
3. Make sure **Enable email confirmations** is turned OFF for easier admin setup
4. Set **Site URL** to your domain (e.g., `http://localhost:3000` for development)

### 2. Create Admin User

You need to create an admin user in Supabase:

**Option A: Using Supabase Dashboard**
1. Go to **Authentication** > **Users**
2. Click **Add user**
3. Enter email and password for your admin account
4. Make sure **Email confirmed** is checked

**Option B: Using SQL (in Supabase SQL Editor)**
```sql
-- Create an admin user (replace with your email/password)
INSERT INTO auth.users (
  instance_id,
  id,
  aud,
  role,
  email,
  encrypted_password,
  email_confirmed_at,
  recovery_sent_at,
  last_sign_in_at,
  raw_app_meta_data,
  raw_user_meta_data,
  created_at,
  updated_at,
  confirmation_token,
  email_change,
  email_change_token_new,
  recovery_token
) VALUES (
  '00000000-0000-0000-0000-000000000000',
  gen_random_uuid(),
  'authenticated',
  'authenticated',
  'your-admin-email@example.com',
  crypt('your-secure-password', gen_salt('bf')),
  NOW(),
  NOW(),
  NOW(),
  '{"provider":"email","providers":["email"]}',
  '{}',
  NOW(),
  NOW(),
  '',
  '',
  '',
  ''
);
```

### 3. Environment Variables

Make sure your `.env.local` file contains:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## How to Use

### Accessing Admin Dashboard

1. **Protected Route**: Visit `/admin` - you'll be redirected to `/admin/login` if not authenticated
2. **Login**: Use the admin credentials you created in Supabase
3. **Dashboard**: After successful login, you'll see the admin dashboard with guest data
4. **Logout**: Click the "Sign Out" button in the top-right corner

### Security Features

- ✅ **Route Protection**: Admin routes are protected by middleware
- ✅ **Session Management**: Automatic session handling via Supabase
- ✅ **Auto-redirect**: Unauthenticated users are redirected to login
- ✅ **Token Refresh**: Automatic token refresh handling
- ✅ **Secure Logout**: Proper session cleanup on logout

### Development Testing

1. Start your development server: `npm run dev`
2. Visit `http://localhost:3000/admin`
3. You should be redirected to the login page
4. Enter your admin credentials
5. Upon successful login, you'll see the admin dashboard

### Troubleshooting

**"Invalid login credentials" error:**
- Check that the user exists in Supabase Authentication > Users
- Verify the email and password are correct
- Ensure email is confirmed in Supabase

**Redirect loop:**
- Check that your Supabase URL and keys are correct
- Verify the middleware is properly configured
- Check browser console for any errors

**Session not persisting:**
- Check that cookies are enabled in your browser
- Verify your site URL is configured correctly in Supabase

## Security Recommendations

1. **Use Strong Passwords**: Ensure admin passwords are complex and secure
2. **Enable 2FA**: Consider enabling two-factor authentication in Supabase
3. **Regular Updates**: Keep Supabase dependencies updated
4. **Environment Security**: Never commit `.env.local` to version control
5. **Admin Access Control**: Limit admin user creation to necessary personnel only

## File Structure

The authentication system consists of:

```
src/
├── components/auth/
│   ├── AuthProvider.tsx      # Authentication context
│   ├── LoginForm.tsx         # Login form component
│   └── ProtectedRoute.tsx    # Route protection wrapper
├── app/admin/
│   ├── page.tsx             # Protected admin dashboard
│   └── login/
│       └── page.tsx         # Login page
└── middleware.ts            # Route protection middleware
```

## Next Steps

- Test the authentication flow thoroughly
- Consider adding password reset functionality
- Set up proper error handling and logging
- Configure production environment variables
- Review and adjust security settings as needed 