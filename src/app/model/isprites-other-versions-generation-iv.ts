import { ISpritesOtherVersionsGenerationIvDiamondPearl } from "./isprites-other-versions-generation-iv-diamond-pearl";
import { ISpritesOtherVersionsGenerationIvHeartGoldSoulSilver } from "./isprites-other-versions-generation-iv-heart-gold-soul-silver";
import { ISpritesOtherVersionsGenerationIvPlatinium } from "./isprites-other-versions-generation-iv-platinium";

export interface ISpritesOtherVersionsGenerationIv {
    diamond_pearl: ISpritesOtherVersionsGenerationIvDiamondPearl[],
    heartgold_soulsilver: ISpritesOtherVersionsGenerationIvHeartGoldSoulSilver[],
    platinum: ISpritesOtherVersionsGenerationIvPlatinium[],
}
