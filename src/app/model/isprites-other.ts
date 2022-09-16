import { ISpritesOtherDreamWorld } from "./isprites-other-dream-world";
import { ISpritesOtherHome } from "./isprites-other-home";
import { ISpritesOtherOfficialArtwork } from "./isprites-other-official-artwork";
import { ISpritesOtherVersions } from "./isprites-other-versions";

export interface ISpritesOther {
    dream_world: ISpritesOtherDreamWorld[],
    home: ISpritesOtherHome[],
    official_artwork: ISpritesOtherOfficialArtwork[],
    versions: ISpritesOtherVersions[],
}
