import { DeviceType } from './device-type.enum';
import { DeviceState } from "./device-state.enum";

export interface IDepot {
    name: string;
    brand: string;
    year: number;
    state: DeviceState;
    type: DeviceType;
}