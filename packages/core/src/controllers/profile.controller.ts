import { Profile } from '@the-cherry-25/types'
import * as fs from 'fs'
import * as yaml from 'js-yaml'

export class ProfileController {
	private profiles: Profile[] = []

	public loadProfilesFromFile(filePath: string) {
		console.log(`Iniciando leitura de arquivo profiles.yaml`)

		try {
			const fileContents = fs.readFileSync(filePath, 'utf8')
			this.profiles = yaml.load(fileContents) as Profile[]

			console.log(`Leitura finalizada do arquivo profiles.yaml`)
		} catch (e) {
			throw e
		}
	}

	public dumpProfilesToFile() {
		console.log(`Iniciando gravação de arquivo index.yaml`)

		try {
			const caminhoArquivo = 'data/index.yaml'
			const yamlString = yaml.dump(this.profiles)

			fs.writeFileSync(caminhoArquivo, yamlString, 'utf8')
		} catch (e) {
			throw e
		}
		console.log(`Gravação finalizada do arquivo index.yaml`)
	}

	public findProfileByName(name: string | undefined): Profile | undefined {
		return this.profiles.find((profile: Profile) => profile.nome == name)
	}

	public findProfileById(id: string | undefined): Profile | undefined {
		return this.profiles.find((profile: Profile) => {
			if (id == undefined) {
				return false
			}
			const idCompare = id.substring(1)
			return profile.id == idCompare
		})
	}
}
