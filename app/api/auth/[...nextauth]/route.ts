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
          phone_number: credentials?.phone_number,
          password: credentials?.password,
        });
        const res = await fetch(`${baseUrl}/accounts/login/`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: json,
        });
        const user = await res.json();
        console.log(user);
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
        token.refreshToken = user.refresh;
        token.accessToken = user.access;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.user.accessToken = token.access;
        session.user.refreshToken = token.refresh;
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
    signIn: '/(authenticate)/login/page.tsx',
    signOut: '../../../(authenticate)/login/page.tsx',
    newUser: '../../../(authenticate)/login/page.tsx',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
