import { IDepot } from '../depot/depot.interface';
import { IDon } from '../don/don.interface';
import { UserRole } from './user-role.enum';
export interface IUser {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  role: UserRole;
  donations?: IDon[];
  devices?: IDepot[];
}
