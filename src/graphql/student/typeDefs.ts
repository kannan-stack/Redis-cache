export const typeDefs = /* GraphQL */ `
  type studentType {
    studentNo: ID!
    studentId: ID!
    studentName: String
    studentAge: ID!
    studentMark: ID!
    studentPhone: ID!
  }
  type Query {
    studentsDetails: [studentType!]
    studentDetail(studentId: ID!): studentType!
  }
`;
