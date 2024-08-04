// app/api/auth/nextauth.ts

import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Remplace cette logique par une vérification d'authentification réelle
        if (credentials?.email === 'gillesbrady@hotmail.com' && credentials?.password === 'pass0000') {
          return { id: '1', name: 'Gilles Brady', email: 'gillesbrady@hotmail.com' };
        } else {
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/', // Page de connexion personnalisée si nécessaire
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
