import { Profile, PROFILE_MATCH_TYPE } from '@the-cherry-25/types'
import { AssetResult } from './asset-type.controller.js'

export abstract class ParentTypeController<T> {
	public abstract relativePath: string

	public abstract match_type: PROFILE_MATCH_TYPE

	public abstract callback(result: AssetResult): {
		profileMatch: string
		matchObject: Partial<T>
	}

	public abstract merge(profile: Profile, asset: T): void

	protected getProfileByTag(
		metadata: string[] | undefined
	): string | undefined {
		if (metadata === undefined) {
			return
		}
		return metadata.find((value: string) => {
			return value.startsWith('@')
		})
	}
}
