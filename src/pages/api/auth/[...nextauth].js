import NextAuth from "next-auth"
import Provider from "next-auth/providers"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Provider.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            key: process.env.API_KEY,
        }),
        // ...add more providers here
    ],
})