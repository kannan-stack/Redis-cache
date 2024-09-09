"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const data_source_1 = require("../../data-source");
const StudentEntity_1 = __importDefault(require("../../Entity/StudentEntity"));
class studentService {
    constructor() {
        this.getStudents = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const client = (0, redis_1.createClient)();
                yield client.connect();
                console.log("connection done ");
                const cachedData = yield client.get("studentsData");
                if (cachedData) {
                    console.log("Data fetched from Redis cache");
                    return JSON.parse(cachedData);
                }
                else {
                    const dBconnection = data_source_1.AppDataSource.getRepository(StudentEntity_1.default);
                    const studentsData = yield dBconnection.find();
                    yield client.set("studentsData", JSON.stringify(studentsData));
                    console.log("Data fetched and stored as cache");
                    return studentsData;
                }
            }
            catch (_a) {
                (error) => console.log("Error", JSON.stringify(error));
            }
        });
        this.getStudent = (studentId) => __awaiter(this, void 0, void 0, function* () {
            try {
                const client = (0, redis_1.createClient)();
                yield client.connect();
                console.log("Connection Done");
                const cachedData = yield client.get("studentData");
                if (cachedData) {
                    console.log("Data fetched from Redis cache");
                    return JSON.parse(cachedData);
                }
                else {
                    const dBconnection = data_source_1.AppDataSource.getRepository(StudentEntity_1.default);
                    let studentData = yield dBconnection.findOne({
                        where: { studentId: studentId },
                    });
                    yield client.set("studentData", JSON.stringify(studentData));
                    console.log("Data fetched and stored as cache ");
                    return studentData;
                }
            }
            catch (_a) {
                (error) => console.log("Error", JSON.stringify(error));
            }
        });
    }
}
exports.default = studentService;
