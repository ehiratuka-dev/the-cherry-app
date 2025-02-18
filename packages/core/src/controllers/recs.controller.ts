import { Profile, PROFILE_MATCH_TYPE, RECs } from '@the-cherry-25/types'
import {
	AssetRequest,
	AssetResponse,
	ParentTypeController,
} from './parent.controller.js'

export class RECsController extends ParentTypeController<RECs> {
	relativePath = '/🎥 RECs/🔥 Hot'

	match_type = PROFILE_MATCH_TYPE.BY_ID

	public find(result: AssetRequest): AssetResponse<RECs> {
		const regex = /RECs #([0-9]{2}) ✂️ Clipe #([0-9]{2}) 🔥 Hot #([0-9]{2})/
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
				clipe: Number(match[2]),
				seq: Number(match[3]),
				assetSrc: result.path,
				nudometro: 0,
				data: new Date(),
			},
		}
	}

	public merge(profile: Profile, asset: RECs): void {
		if (profile.recs === undefined) {
			profile.recs = []
		}
		profile.recs.push(asset)
	}
}
