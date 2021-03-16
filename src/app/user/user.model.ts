export class User {
  id?: string;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  password: string;

  constructor(
    firstname: string,
    lastname: string,
    email: string,
    phoneNumber: string,
    password: string
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.password = password;
  }
}
