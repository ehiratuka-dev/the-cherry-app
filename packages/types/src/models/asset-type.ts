import { Profile } from '../models/profile.model.js'

export interface AssetType {
	profile: Profile
	nudometro: number
	data: Date
	assetSrc: string
}
