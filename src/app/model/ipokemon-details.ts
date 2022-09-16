import { IAbilities } from "./iabilities";
import { IForms } from "./iforms";
import { IGameIndices } from "./igame-indices";
import { IHeldItems } from "./iheld-items";
import { IMoves } from "./imoves";
import { IPastTypes } from "./ipast-types";
import { ISpecies } from "./ispecies";
import { ISprites } from "./isprites";
import { IStats } from "./istats";
import { ITypes } from "./itypes";

export interface IPokemonDetails {
    id: number,
    name?: string,
    base_experience: number,
    height: number,
    is_default: boolean,
    order: number,
    weight: 69,
    abilities: IAbilities[],
    forms: IForms[], 
    game_indices: IGameIndices[],
    held_items: IHeldItems[],
    location_area_encounters: string,
    moves: IMoves[],
    species: ISpecies[],
    sprites: ISprites[],
    stats: IStats[],
    types: ITypes[],
    past_types: IPastTypes[],
}
