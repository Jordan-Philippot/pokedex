import { IMove } from "./imove";
import { IVersionGroupDetails } from "./iversion-group-details";

export interface IMoves {
    move : IMove[],
    vesion_group_details: IVersionGroupDetails[]
}
