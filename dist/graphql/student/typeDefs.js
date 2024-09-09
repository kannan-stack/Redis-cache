"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = `
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
