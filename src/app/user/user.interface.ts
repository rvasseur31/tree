import { UserRole } from './user-role.enum';
export interface IUser {
  id?: string;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  password: string;
  role: UserRole;
}
