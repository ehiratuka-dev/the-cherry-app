import { AssetType } from "../interfaces/asset-type";

export interface SocialMedia extends AssetType {
  assetSrc: string;
  data: string;
  sequencial: string | undefined;
}
