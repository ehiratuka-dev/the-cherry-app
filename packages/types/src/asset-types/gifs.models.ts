import { AssetType } from '../models/asset-type.js'

export interface GIFs extends AssetType {
	id: number
	seq: number
	nudometro: number
	data: Date
	assetSrc: string
}
