import { IPokedex } from "./ipokedex";

export interface IResults {
    count: number,
    next: string,
    previous: string
    results: IPokedex[];
}
