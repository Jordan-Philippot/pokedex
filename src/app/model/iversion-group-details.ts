import { IMoveLearnedMethod } from "./imove-learned-method";
import { IVersionGroup } from "./iversion-group";

export interface IVersionGroupDetails {
    level_learned_at: number,
    version_group: IVersionGroup[],
    move_learned_method: IMoveLearnedMethod[]
}
