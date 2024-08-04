import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        // Ajouter la logique pour vérifier les identifiants de l'utilisateur
        const user = { id: 1, name: 'Gilles Brady', email: 'gillesbrady@hotmail.com' };
        if (credentials.email === 'gillesbrady@hotmail.com' && credentials.password === 'pass0000') {
          return user;
        } else {
          return null;
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
