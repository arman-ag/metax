import type { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
const baseUrl = process.env.baseUrl;
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const json = JSON.stringify({
          forget_password: null,
          username: credentials?.phone_number,
          password: credentials?.password,
        });
        const res = await fetch(`${baseUrl}/accounts/api/token/`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: json,
        });
        const user = await res.json();
        if (res.statusText === 'OK') {
          console.log('nextauth daki user: ', user);
          return user;
        }
        throw new Error(JSON.stringify({ errors: user.errors, status: false }));
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        console.log(user);
        token.refreshToken = user.refresh;
        token.accessToken = user.access;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.user = token;
      }
      return session;
    },
  },

  secret: process.env.JWT_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/login',
    signOut: '/login',
    newUser: '/login',
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
