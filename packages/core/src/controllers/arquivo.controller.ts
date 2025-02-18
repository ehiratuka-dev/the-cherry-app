import { Profile, PROFILE_MATCH_TYPE, Arquivo } from '@the-cherry-25/types'
import {
	AssetRequest,
	AssetResponse,
	AssetTypeController,
} from './asset-type.controller.js'

export class ArquivoController extends AssetTypeController<Arquivo> {
	relativePath = '/🗂️ Arquivos'

	match_type = PROFILE_MATCH_TYPE.BY_NAME

	public find(result: AssetRequest): AssetResponse<Arquivo> {
		const regex = /🗂️ Arquivos 👩‍🦰 (.+) #([0-9]{2})/
		const match = result.path.match(regex)

		if (match == undefined) {
			return {
				profileMatch: '',
				matchObject: {},
			}
		}

		return {
			profileMatch: match[1],
			matchObject: {
				id: Number(match[2]),
				assetSrc: result.path,
				nudometro: 0,
				data: new Date(),
			},
		}
	}

	public merge(profile: Profile, asset: Arquivo): void {
		if (profile.arquivos === undefined) {
			profile.arquivos = []
		}
		profile.arquivos.push(asset)
	}
}
