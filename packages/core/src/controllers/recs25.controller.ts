import { PROFILE_MATCH_TYPE, RECs25 } from '@the-cherry-25/types'
import { AssetResult } from './asset-type.controller.js'
import { ParentTypeController } from './parent.controller.js'

export class RECs25Controller extends ParentTypeController<RECs25> {
	relativePath = '/🎬 RECs25/🔥 Hot'

	match_type = PROFILE_MATCH_TYPE.BY_ID

	callback(result: AssetResult): {
		profileMatch: string
		matchObject: Partial<RECs25>
	} {
		return {
			profileMatch: '',
			matchObject: {},
		}
	}
}
