import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth"
import axios from "axios";
import { SignToken } from "../../../utils/siginToken";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: <string>process.env.GOOGLE_CLIENT_ID,
      clientSecret:  <string>process.env.GOOGLE_CLIENT_SECRET
    })
    // ...add more providers here
  ],
  session: {
    updateAge: 0,
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
   pages: {
    signIn: '/',
    signOut: '/',
    // error: '/auth/error',
   },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const response = await axios.post("http://localhost:9000/v1/auth/userExists", { email: profile.email })
      if (response && response.data?.value === true) {
        return true
      } else {
        const data = {
          firstName: profile.given_name,
          lastName: profile.family_name,
          email: profile.email,
          profileUrl: profile.picture
        }
        const response = await axios.post("http://localhost:9000/v1/auth/signup", data);
        console.log(response);
        return true;
      }
    },
    async jwt({ token, user, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        const userLoggedIn = await SignToken(user?.email as string) 
        token.loggedUser = userLoggedIn; 
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.loggedUser = token.loggedUser
      return session
    }
  }

})
