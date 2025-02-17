import { AssetType } from "../interfaces/asset-type.js";

export interface Arquivo extends AssetType {
  id: number;
  assetSrc?: string;
}
