import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("student_details")
class StudentDetails {
  @PrimaryGeneratedColumn({ name: "student_no" })
  studentNo!: number;

  @PrimaryColumn({ type: "int", name: "student_id", nullable: false })
  studentId!: number;

  @Column({ type: "varchar", name: "student_name", nullable: false })
  studentName!: string;

  @Column({ type: "int", name: "student_age", nullable: false })
  studentAge!: number;

  @Column({ type: "int", name: "student_mark", nullable: false })
  studentMark!: number;

  @Column({ type: "int", name: "student_phone", nullable: false })
  studentPhone!: number;
}
export default StudentDetails;
