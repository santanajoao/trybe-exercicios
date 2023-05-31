import Person from './Person';

export default class Student extends Person {
  enrollment: string;
  examsGrades: number[];
  assignmentGrades: number[];

  static EXAMS_NUMBER = 4;
  static ASSIGNMENTS_NUMBER = 2;

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);

    this.enrollment = this.generateEnrollment();
    this.examsGrades = [];
    this.assignmentGrades = [];
  }

  sumGrades(): number {
    const allGrades = [...this.examsGrades, ...this.assignmentGrades];
    return allGrades.reduce((sum, grade) => sum + grade);
  }

  sumAverageGrade(): number {
    const gradesNumber = Student.ASSIGNMENTS_NUMBER + Student.EXAMS_NUMBER;
    return this.sumGrades() / gradesNumber;
  }

  private generateEnrollment(): string {
    const digitsNumber = 16;
    const randomNumber = Math.floor(Math.random() * 10 ** digitsNumber);
    return randomNumber.toString();
  }
}
