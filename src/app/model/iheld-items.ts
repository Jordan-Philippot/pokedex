import { IHeldItem } from "./iheld-item";
import { IHeldItemVersionDetails } from "./iheld-item-version-details";

export interface IHeldItems {
    item : IHeldItem[],
    version_details: IHeldItemVersionDetails[],
    location_area_encounters: string
}
