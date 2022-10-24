import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import axios from "axios";
import { SignToken } from "../../../utils/siginToken";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: <string>process.env.GOOGLE_CLIENT_ID,
      clientSecret: <string>process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  // session: {
  //   updateAge: 0,
  //   strategy: 'jwt',
  //   maxAge: 30 * 24 * 60 * 60,
  // },
  pages: {
    signIn: "/",
    signOut: "/",
    // error: '/auth/error',
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // first axios request to ascertain if our user exists in our custom DB
      const response = await axios.post(
        "https://asikobackend.herokuapp.com/v1/auth/userExists",
        { email: profile.email }
      );
      if (response && response.data?.value === true) {
        // user exists return true passing control to the next callback
        return true;
      } else {
        const data = {
          firstName: profile.given_name,
          lastName: profile.family_name,
          email: profile.email,
          profileUrl: profile.picture,
        };
        // second axios call which creates a new user in our database
        const response = await axios.post(
          "https://asikobackend.herokuapp.com/v1/auth/signup",
          data
        );
        // retruns true thereby passing control to the next callback
        return true;
      }
    },
    async jwt({ token, user, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        console.log(user, token, account);
        // call the signToken function which returns a JWT token
        const userLoggedIn = await SignToken(user?.email as string);
        token.loggedUser = userLoggedIn;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.loggedUser = token.loggedUser;
      return session;
    },
  },
});
