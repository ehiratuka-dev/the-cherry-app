import { AssetType } from '../models/asset-type.js'

export interface SocialMedia extends AssetType {
	assetSrc: string
	data: string
	sequencial: string | undefined
}
