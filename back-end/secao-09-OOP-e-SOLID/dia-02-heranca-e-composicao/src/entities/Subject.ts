export default class Subject {
  private _name: string;

  constructor(name: string) {
    this.validateName(name);

    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this.validateName(newName);
    this._name = newName;
  }

  private validateName(name: string) {
    if (name.length < 3) {
      throw new Error('The name must be at least three characters long');
    }
  }
}
