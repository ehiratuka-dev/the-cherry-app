import { AssetType } from "../interfaces/asset-type.js";

export interface RECs extends AssetType {
  assetSrc: string;
  id: number;
  clipe: number;
  nudometro: number;
  data: Date;
}
