import { AssetType } from "../interfaces/asset-type";

export interface RECs extends AssetType {
  assetSrc: string;
  id: number;
  clipe: number;
  nudometro: number;
  data: Date;
}
