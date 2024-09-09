"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const data_source_1 = require("./data-source");
const typeDefs_1 = require("./graphql/student/typeDefs");
const resolver_1 = require("./graphql/student/resolver");
(0, dotenv_1.configDotenv)({ path: `.env.${process.env.NODE_ENV || "test"}` });
data_source_1.AppDataSource.initialize()
    .then(() => console.log("Db created "))
    .catch((error) => console.log("Failed to create Db ", error));
const Server = new server_1.ApolloServer({
    typeDefs: typeDefs_1.typeDefs,
    resolvers: resolver_1.resolvers,
});
(0, standalone_1.startStandaloneServer)(Server, {
    listen: { port: 3000 },
}).then(({ url }) => {
    console.log(`Server is ready ${url}`);
});
