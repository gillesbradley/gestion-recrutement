// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Remplace cette logique avec ta vérification réelle
        if (credentials.email === "test@example.com" && credentials.password === "password") {
          return { id: 1, name: "User", email: credentials.email };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login', // Rediriger vers la page de connexion
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redirection après la connexion réussie
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
};

export default NextAuth(authOptions);
