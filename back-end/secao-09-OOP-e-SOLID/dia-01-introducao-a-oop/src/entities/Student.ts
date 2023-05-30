export default class Student {
  enrollment: string;
  name: string;
  testsGrades: number[] = [];
  assignmentGrades: number[] = [];

  constructor(enrollment: string, name: string) {
    this.enrollment = enrollment;
    this.name = name;
  }
}
