import { IPastTypesGeneration } from "./ipast-types-generation";
import { ITypes } from "./itypes";

export interface IPastTypes {
    generation: IPastTypesGeneration[],
    types: ITypes[]
}
