"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const dotenv_1 = require("dotenv");
const typeorm_1 = require("typeorm");
const StudentEntity_1 = __importDefault(require("./Entity/StudentEntity"));
(0, dotenv_1.configDotenv)({ path: `.env.${process.env.NODE_ENV || "test"}` });
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.APP_DB_HOST,
    port: 5432,
    username: process.env.POM_DB_USERNAME,
    password: process.env.APP_DB_PWD,
    database: process.env.APP_DB_DATABASE,
    synchronize: false,
    logging: true,
    entities: [StudentEntity_1.default],
    subscribers: [],
    migrations: [],
});
