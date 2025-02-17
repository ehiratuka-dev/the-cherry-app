import { Profile } from '@the-cherry-25/types'
import * as fs from 'fs'
import * as yaml from 'js-yaml'

export class ProfileController {
	public loadProfileDataFromFile(filePath: string): Profile[] {
		try {
			const fileContents = fs.readFileSync(filePath, 'utf8')
			return yaml.load(fileContents) as Profile[]
		} catch (e) {
			throw e
		}
	}
}
