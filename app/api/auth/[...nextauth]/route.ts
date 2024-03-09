import type { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
const baseUrl = process.env.baseUrl;
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'login',
      type: 'credentials',
      credentials: {
        phone_number: { label: 'phone_number', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const json = await JSON.stringify({
          username: credentials?.phone_number,
          password: credentials?.password,
        });
        const res = await fetch(`${baseUrl}/metax/auth/v1/api/token/`, {
          method: 'POST',
          headers: myHeaders,
          body: json,
          redirect: 'follow',
        });
        const user = await res.json();
        if (res.statusText === 'OK') {
          console.log('nextauth daki user: ', user);
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        console.log('user=======>', user);
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
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/login',
    signOut: '/login',
    error: '/login',
    newUser: '/login',
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
