import { Profile, PROFILE_MATCH_TYPE, GIFs } from '@the-cherry-25/types'
import {
	AssetRequest,
	AssetResponse,
	AssetTypeController,
} from './asset-type.controller.js'

export class GIFsController extends AssetTypeController<GIFs> {
	relativePath = '/💃 GIFs/🔥 Hot'

	match_type = PROFILE_MATCH_TYPE.BY_ID

	public find(result: AssetRequest): AssetResponse<GIFs> {
		const regex = /GIFs #([0-9]{2}) 🔥 Hot #([0-9]{2})/
		const match = result.path.match(regex)
		const profileId = this.getProfileByTag(result.metadata)

		if (profileId == undefined || match == undefined) {
			return {
				profileMatch: '',
				matchObject: {},
			}
		}

		return {
			profileMatch: profileId,
			matchObject: {
				id: Number(match[1]),
				seq: Number(match[2]),
				assetSrc: result.path,
				nudometro: 0,
				data: new Date(),
			},
		}
	}

	public merge(profile: Profile, asset: GIFs): void {
		if (profile.gifs === undefined) {
			profile.gifs = []
		}
		profile.gifs.push(asset)
	}
}
