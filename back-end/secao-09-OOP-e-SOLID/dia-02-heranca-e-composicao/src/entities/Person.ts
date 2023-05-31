export default class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;

    this.validatePerson();
  }
  
  get name() {
    return this._name;
  }

  set name(name: string) {
    this.validateName(name);
    this._name = name;
  }

  get birthDate() {
    return this._birthDate;
  }

  set birthDate(birthDate: Date) {
    this.validateBirthDate(birthDate);
    this._birthDate = birthDate;
  }

  private validateName(name: string) {
    if (name.length < 3) {
      throw new Error('The name must be at least three characters long');
    }
  }

  private validateBirthDate(birthDate: Date) {
    const currentDate = new Date();
    if (birthDate > currentDate) {
      throw new Error('The birthDate cannot be a date in the future');
    }

    if (this.getAge(birthDate) > 120) {
      throw new Error('The person cannot be more than 120 years old');
    }
  }
  
  getAge(birthDate: Date) {
    const timeDifference = Date.now() - birthDate.getTime();
    const age = timeDifference / 3.154e10;
    return Math.trunc(age);
  }
  
  private validatePerson() {
    this.validateName(this._name);
    this.validateBirthDate(this._birthDate);
  }
}
