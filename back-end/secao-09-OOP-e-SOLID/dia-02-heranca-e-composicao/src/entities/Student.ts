import ID from './ID';
import Person from './Person';

export default class Student extends Person {
  readonly enrollment: string;
  private _examsGrades: number[];
  private _assignmentsGrades: number[];

  static EXAMS_NUMBER = 4;
  static ASSIGNMENTS_NUMBER = 2;

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);

    this.enrollment = this.generateEnrollment();
    this._examsGrades = [];
    this._assignmentsGrades = [];
  }

  get examsGrades(): number[] {
    return [...this._examsGrades];
  }

  set examsGrades(grades: number[]) {
    if (grades.length > Student.EXAMS_NUMBER) {
      throw new Error(
        `The student must have a maximum of ${Student.EXAMS_NUMBER} exams grades`,
      );
    }
    this._examsGrades = grades;
  }

  get assignmentsGrades(): number[] {
    return [...this._assignmentsGrades];
  }

  set assignmentsGrades(grades: number[]) {
    if (grades.length > Student.ASSIGNMENTS_NUMBER) {
      throw new Error(
        `The student must have a maximum of ${Student.ASSIGNMENTS_NUMBER} assignments grades`,
      );
    }
    this._assignmentsGrades = grades;
  }

  sumGrades(): number {
    const allGrades = [...this._examsGrades, ...this._assignmentsGrades];
    return allGrades.reduce((sum, grade) => sum + grade);
  }

  sumAverageGrade(): number {
    const gradesNumber = Student.ASSIGNMENTS_NUMBER + Student.EXAMS_NUMBER;
    return this.sumGrades() / gradesNumber;
  }

  private generateEnrollment(): string {
    return ID.generateID();
  }
}

const s = new Student('João', new Date());
