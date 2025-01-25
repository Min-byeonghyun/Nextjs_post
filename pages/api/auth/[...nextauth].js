import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "Ov23liF4fXmS0iyvBvOP",
      clientSecret: "9a3dec9e88ede4654978a4facfa79da4d836e28a",
    }),
  ],
  secret: "qudgus12",
};
export default NextAuth(authOptions);
