export default class Person {
  name: string;
  birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this.name = name;
    this.birthDate = birthDate;

    this.validatePerson();
  }
  
  private validateName() {
    if (this.name.length < 3) {
      throw new Error('The name must be at least three characters long');
    }
  }

  private validateBirthDate() {
    const currentDate = new Date();
    if (this.birthDate > currentDate) {
      throw new Error('The birthDate cannot be a date in the future');
    }

    if (this.getAge() > 120) {
      throw new Error('The person cannot be more than 120 years old');
    }
  }

  getAge() {
    const timeDifference = Date.now() - this.birthDate.getTime();
    const age = timeDifference / 3.154e10;
    return Math.trunc(age);
  }
  
  private validatePerson() {
    this.validateName();
    this.validateBirthDate();
  }
}
