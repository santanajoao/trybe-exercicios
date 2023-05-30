export default class Student {
  enrollment: string;
  name: string;
  examsGrades: number[] = [];
  assignmentGrades: number[] = [];

  static EXAMS_NUMBER = 4;
  static ASSIGNMENTS_NUMBER = 2;

  constructor(enrollment: string, name: string) {
    this.enrollment = enrollment;
    this.name = name;
  }

  getGradesSum(): number {
    const allGrades = [...this.examsGrades, ...this.assignmentGrades];
    return allGrades.reduce((sum, grade) => sum + grade);
  }

  getGradesAverage(): number {
    const gradesNumber = Student.ASSIGNMENTS_NUMBER + Student.EXAMS_NUMBER;
    return this.getGradesSum() / gradesNumber;
  }
}
