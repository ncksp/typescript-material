export class User {
  constructor(protected name: string) {}
}

export class Admin extends User {
  public read: boolean = true;
  public write: boolean = true;
  constructor(protected name: string, private _email: string) {
    super(name);
  }

  static getRoleName: string = "Admin"

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }
  
  public set email(v : string) {
      this._email = v;
  }
  
  public get email(): string {
    return this._email;
  }
}

let user = new User("Nicko");

let admin = new Admin("Admin", "admin@gmail.com");


let adminRole = Admin.getRoleName

