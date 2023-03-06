export class Pet {
  private _id: number = 0;
  public get id(): number {
    return this._id;
  }
  public set id(v: number) {
    this._id = v;
  }

  private _name : string = '';
  public get name(): string {
    return this._name ;
  }
  public set name(v: string) {
    this._name  = v;
  }

  private _specie: string = '';
  public get specie(): string {
    return this._specie;
  }
  public set specie(v: string) {
    this._specie = v;
  }
}
