import { Arquivo } from '../asset-types/arquivo.model.js'
import { GIFs } from '../asset-types/gifs.model.js'
import { RECs } from '../asset-types/recs.model.js'
import { RECs25 } from '../asset-types/recs25.model.js'
import { SocialMedia } from '../asset-types/social-media.model.js'

export interface Profile {
	id: string
	nome: string
	cidade?: string
	instagram?: string
	tags?: string[]
	nudometro?: number

	bannerSrc?: string
	iconSrc?: string
	hidden?: boolean
	bannered?: boolean

	socialMedia?: SocialMedia
	recs25?: RECs25[]
	recs?: RECs[]
	gifs?: GIFs[]
	arquivos?: Arquivo[]
}
