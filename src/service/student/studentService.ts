import redis from "redis";
import { createClient } from "redis";
import { AppDataSource } from "../../data-source";
import StudentDetails from "../../Entity/StudentEntity";

class studentService {
  getStudents = async (): Promise<StudentDetails[]> => {
    try {
      const client = createClient();
      await client.connect();
      console.log("connection done ");
      const cachedData = await client.get("studentsData");

      if (cachedData) {
        console.log("Data fetched from Redis cache");
        return JSON.parse(cachedData);
      } else {
        const dBconnection = AppDataSource.getRepository(StudentDetails);
        const studentsData = await dBconnection.find();

        await client.set("studentsData", JSON.stringify(studentsData));

        console.log("Data fetched and stored as cache");

        return studentsData;
      }
    } catch {
      (error) => console.log("Error", JSON.stringify(error));
    }
  };
  getStudent = async (studentId: number): Promise<StudentDetails> => {
    try {
      const client = createClient();
      await client.connect();
      console.log("Connection Done");
      const cachedData = await client.get("studentData");

      if (cachedData) {
        console.log("Data fetched from Redis cache");
        return JSON.parse(cachedData);
      } else {
        const dBconnection = AppDataSource.getRepository(StudentDetails);
        let studentData = await dBconnection.findOne({
          where: { studentId: studentId },
        });
        await client.set("studentData", JSON.stringify(studentData));
        console.log("Data fetched and stored as cache ");
        return studentData;
      }
    } catch {
      (error) => console.log("Error", JSON.stringify(error));
    }
  };
}
export default studentService;
