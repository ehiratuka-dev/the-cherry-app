import { Arquivo } from './arquivo.model.js'
import { RECs } from './recs.model.js'
import { RECs25 } from './recs25.model.js'
import { SocialMedia } from './social-media.model.js'

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
	arquivos?: Arquivo[]
}
