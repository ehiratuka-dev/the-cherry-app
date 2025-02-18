import { AssetType } from '../interfaces/asset-type.js'

export interface RECs extends AssetType {
	id: number
	clipe: number
	seq: number
	nudometro: number
	data: Date
	assetSrc: string
}
