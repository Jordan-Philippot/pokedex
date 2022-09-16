import { ISpritesOtherVersionsGenerationIiCrystal } from "./isprites-other-versions-generation-ii-crystal";
import { ISpritesOtherVersionsGenerationIiGold } from "./isprites-other-versions-generation-ii-gold";
import { ISpritesOtherVersionsGenerationIiSilver } from "./isprites-other-versions-generation-ii-silver";

export interface ISpritesOtherVersionsGenerationIi {
    crystal: ISpritesOtherVersionsGenerationIiCrystal[],
    gold: ISpritesOtherVersionsGenerationIiGold[],
    silver: ISpritesOtherVersionsGenerationIiSilver[],
}
