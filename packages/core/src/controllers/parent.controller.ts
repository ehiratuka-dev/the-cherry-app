import { AssetType, Profile, PROFILE_MATCH_TYPE } from '@the-cherry-25/types'

export interface AssetRequest {
	path: string
	metadata: string[] | undefined
}

export interface AssetResponse<T extends AssetType> {
	profileMatch: string
	matchObject: Partial<T>
}

export abstract class ParentTypeController<T extends AssetType> {
	public abstract relativePath: string

	public abstract match_type: PROFILE_MATCH_TYPE

	public abstract find(result: AssetRequest): AssetResponse<T>

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
