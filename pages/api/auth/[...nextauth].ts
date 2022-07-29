import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth"
import axios from "axios";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "164982727604-kir7ngfgjvbgmpvsa9430qolgess4u9q.apps.googleusercontent.com",
      clientSecret: "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"
    })
    // ...add more providers here
  ],
  session: {
    updateAge: 0,
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
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
        console.log(token, "tokene");
        console.log(user, "userr");
        console.log(account, "accounts")
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      console.log(session, "sessionnnnnn");
      console.log(token, "tokennnn");
      console.log(user, "usernnnn")
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken
      return session
    }
  }

})
