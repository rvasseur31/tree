import { UserRole } from './user-role.enum';
export interface IUser {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  role: UserRole;
}
