import { configDotenv } from "dotenv";
import { DataSource } from "typeorm";
import StudentDetails from "./Entity/StudentEntity";

configDotenv({ path: `.env.${process.env.NODE_ENV || "test"}` });

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.APP_DB_HOST,
  port: 5432,
  username: process.env.POM_DB_USERNAME,
  password: process.env.APP_DB_PWD,
  database: process.env.APP_DB_DATABASE,
  synchronize: false,
  logging: true,
  entities: [StudentDetails],
  subscribers: [],
  migrations: [],
});
