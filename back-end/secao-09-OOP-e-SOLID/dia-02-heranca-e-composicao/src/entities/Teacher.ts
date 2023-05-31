import { Employee } from "../interfaces/IEmployee";
import ID from "./ID";
import Person from "./Person";
import Subject from "./Subject";

export default class Teacher extends Person implements Employee {
  private _salary: number;
  readonly admissionDate: Date;
  readonly registration: string;
  public subject: Subject;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);

    this.validateSalary(salary);

    this._salary = salary;
    this.subject = subject;
    this.registration = this.generateRegistration();
    this.admissionDate = new Date();
  }

  get salary(): number {
    return this._salary;
  }
  
  set salary(newSalary: number) {
    this.validateSalary(newSalary);

    this._salary = newSalary;
  }

  private validateSalary(salary: number) {
    if (salary < 0) {
      throw new Error('Salary cannot be negative.');
    }
  }

  generateRegistration(): string {
    return ID.generateID();
  }
}
