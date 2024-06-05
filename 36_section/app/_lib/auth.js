import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { createGuest, getGuest } from './data-service';

const AUTH_GOOGLE_ID = process.env.AUTH_GOOGLE_ID;
const AUTH_GOOGLE_SECRET = process.env.AUTH_GOOGLE_SECRET;

const authConfig = {
    providers: [
        Google({
            clientId: AUTH_GOOGLE_ID,
            clientSecret: AUTH_GOOGLE_SECRET,
        }),
    ],
    callbacks: {
        authorized({ auth, request }) {
            return !!auth?.user; 
        },
    },
    pages: {
        signIn: '/login',
    },
    async signIn({ user, account, profile }) {
        try {
          const existingGuest = await getGuest(user?.email);
          if (!existingGuest) await createGuest({ email: user?.email, fullName: user?.name});
            return true;  
        } catch (error) {
            return false;
        };
    },
    async session({ session, user }) {
        const guest = getGuest(session?.user?.email);
        session?.user?.guestId = guest?.id;
        return session;
    },
};

export const { 
    auth, 
    signIn,
    signOut,
    handlers: { GET, POST },
} = NextAuth(authConfig);
