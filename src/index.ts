import { configDotenv } from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { AppDataSource } from "./data-source";
import { typeDefs } from "./graphql/student/typeDefs";
import { resolvers } from "./graphql/student/resolver";

configDotenv({ path: `.env.${process.env.NODE_ENV || "test"}` });

AppDataSource.initialize()
  .then(() => console.log("Db created "))
  .catch((error) => console.log("Failed to create Db ", error));

const Server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(Server, {
  listen: { port: 3000 },
}).then(({ url }) => {
  console.log(`Server is ready ${url}`);
});
