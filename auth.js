import NextAuth from "next-auth";
import { ZodError } from "zod";
import { signInSchema } from "zod";
import { authConfig } from "@/auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { getUser } from "./lib/auth";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          let user = null;

          // const { username, password } = await signInSchema.parseAsync(credentials)
          // console.log(username, password)
          // console.log("credentials: ", credentials);

          user = await getUser(credentials.username, credentials.password);

          console.log("user: ", user);

          if (!user) {
            console.log("User not found");
            throw new Error("User not found");
          }

          return user;
        } catch (error) {
          throw error;
        }
      },
    }),
  ],
});
