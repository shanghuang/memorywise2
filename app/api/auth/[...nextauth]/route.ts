
import NextAuth from "next-auth"
import type { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
//import User from "@/models/user"
//import Users from "../../graphql/datasources/index"
import UserModel from "../../graphql/models/userSchema";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

const connectDB = async () => {
  try {
    if (uri) {
      await mongoose.connect(uri);
      console.log("🎉 connected to database successfully");
    }
  } catch (error) {
    console.error(error);
  }
};

export const authOptions: AuthOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize (credentials, req) {
        //const { email, password } = credentials;
        console.log("email: " + credentials?.email);
        
        try {
          await connectDB();

          const user = await UserModel.findOne({email: credentials?.email});
          console.log("email: " + credentials?.email);
          //const users = new Users({ modelOrCollection: UserModel });
          console.log("user: " + user);
          //const user = await users.findUserByEmail({input: {email: credentials?.email}});
          if (!user) {
            console.log(credentials?.email + " not foundt");
            return null;
          }

          console.log("user: " + user);
          console.log(credentials?.email + " password:" + credentials?.password);
          //const encodedPassword = encode_password(credentials?.password as string);

          const passwordsMatch = await bcrypt.compare(credentials?.password, user.password);
          //const passwordsMatch = encodedPassword === user.password;
           console.log("passwordsMatch: " + passwordsMatch);
          if (!passwordsMatch) {
            return null;
          }
          console.log("authorize returning user id: " + user._id);
        
          return { email: user.email, id: user._id};
        } catch (error) {
          console.log("Error: ", error);
        }
      },
      /*async session({ session }) {
        console.log("CredentialsProvider-session:"); console.log(session);
        const user= await await UserModel.findOne({email: session?.user?.email});//fetchUser(session?.user?.email);
        console.log("CredentialsProvider-user:"); console.log(user);
        session.userId = user.id;
        return session
      },*/
    })
  ],
  session: { strategy: "jwt" },
  callbacks: {
    /*async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.id = account?.providerAccountId;
        console.log("jwt-account:"); console.log(account);
        console.log("jwt-profile:"); console.log(profile);
      }
      return token
    },*/

    async session({ session, user, token }: any) {
      console.log("session--->");
      console.log("session:"); console.log(session);
      console.log("user:"); console.log(user);
      console.log("token:"); console.log(token);
      console.log("session<");
      session.accessToken = token.accessToken;
      session.id = token.sub;
      //session.oktaId = token.oktaId;
      return session;
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
            