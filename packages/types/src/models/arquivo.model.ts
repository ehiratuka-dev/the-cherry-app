import { AssetType } from "../interfaces/asset-type";

export interface Arquivo extends AssetType {
  id: number;
  assetSrc?: string;
}
