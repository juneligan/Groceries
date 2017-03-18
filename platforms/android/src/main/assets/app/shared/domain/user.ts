import { Role } from "../domain/role";

export class User {
  id: number;
  username: string;
  emailAddress: string;
  password: string;
  firstname: string;
  lastname: string;
  role: Role;

  constructor() {
    this.role = new Role();
  }
}