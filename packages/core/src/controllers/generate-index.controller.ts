import * as fs from 'fs'
import * as path from 'path'
import { exiftool } from 'exiftool-vendored'
import { ProfileController } from './profile.controller.js'
import { ParentTypeController } from './parent.controller.js'
import { AssetType, PROFILE_MATCH_TYPE } from '@the-cherry-25/types'

export class GenerateIndexController {
	private rootPath: string

	private profileController: ProfileController

	constructor(profileController: ProfileController) {
		this.rootPath = 'C:/Users/duduh/iCloudDrive/🍒 The Cherry 25'
		this.profileController = profileController
	}

	private async processFile<T extends AssetType>(
		filePath: string,
		parent: ParentTypeController<T>
	) {
		const metadata = await exiftool.read(filePath)

		const assetResult = parent.find({
			path: filePath,
			metadata: metadata.Subject,
		})

		let profile = null
		switch (parent.match_type) {
			case PROFILE_MATCH_TYPE.BY_NAME:
				profile = this.profileController.findProfileByName(
					assetResult.profileMatch
				)
				break
			case PROFILE_MATCH_TYPE.BY_ID:
				profile = this.profileController.findProfileById(
					assetResult.profileMatch
				)
				break
		}

		if (profile != undefined) {
			parent.merge(profile, assetResult.matchObject as T)
		}
	}

	private async processDirectory<T extends AssetType>(
		directory: string,
		parent: ParentTypeController<T>
	) {
		const files = fs.readdirSync(directory)

		for (const file of files) {
			const filePath = path.join(directory, file)
			const stat = fs.statSync(filePath)

			if (stat.isDirectory()) {
				await this.processDirectory(filePath, parent)
			} else {
				await this.processFile(filePath, parent)
			}
		}
	}

	public async mergeAssets<T extends AssetType>(
		parent: ParentTypeController<T>
	) {
		console.log(`Iniciando leitura de dados em ${parent.relativePath}`)

		const filePath = path.join(this.rootPath, parent.relativePath)
		if (!fs.existsSync(filePath)) {
			console.log(`O diretório ${filePath} não existe.`)
			return []
		}
		await this.processDirectory<T>(filePath, parent)

		console.log(`Leitura de dados finalizada em ${parent.relativePath}`)
	}

	public async finish() {
		await exiftool.end()
	}
}
