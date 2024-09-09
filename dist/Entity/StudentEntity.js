"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let StudentDetails = class StudentDetails {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "student_no" }),
    __metadata("design:type", Number)
], StudentDetails.prototype, "studentNo", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: "int", name: "student_id", nullable: false }),
    __metadata("design:type", Number)
], StudentDetails.prototype, "studentId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", name: "student_name", nullable: false }),
    __metadata("design:type", String)
], StudentDetails.prototype, "studentName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", name: "student_age", nullable: false }),
    __metadata("design:type", Number)
], StudentDetails.prototype, "studentAge", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", name: "student_mark", nullable: false }),
    __metadata("design:type", Number)
], StudentDetails.prototype, "studentMark", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", name: "student_phone", nullable: false }),
    __metadata("design:type", Number)
], StudentDetails.prototype, "studentPhone", void 0);
StudentDetails = __decorate([
    (0, typeorm_1.Entity)("student_details")
], StudentDetails);
exports.default = StudentDetails;
