export default class ID {
  readonly value: string;

  constructor() {
    this.value = ID.generateID();
  }

  static generateID(digits = 16): string {
    const randomNumber = Math.floor(Math.random() * 10 ** digits);
    return randomNumber.toString();
  }
}
