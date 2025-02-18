import { AssetType } from '../interfaces/asset-type.js'

export interface RECs extends AssetType {
	assetSrc: string
	id: number
	clipe: number
	seq: number
	nudometro: number
	data: Date
}
