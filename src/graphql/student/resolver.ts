import studentService from "../../service/student/studentService";

export const resolvers = {
  Query: {
    studentsDetails: async (parent: unknown) => {
      const newService = new studentService();
      return newService.getStudents();
    },
    studentDetail: async (parent: unknown, args: { studentId: number }) => {
      const newService = new studentService();
      return newService.getStudent(args.studentId);
    },
  },
};
