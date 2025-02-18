import { ProfileController } from '../controllers/profile.controller.js'
import { AssetTypeController } from '../controllers/asset-type.controller.js'
import { ArquivoController } from '../controllers/arquivo.controller.js'
import { RECsController } from '../controllers/recs.controller.js'
import { RECs25Controller } from '../controllers/recs25.controller.js'
import { Arquivo, GIFs, RECs, RECs25 } from '@the-cherry-25/types'
import { GIFsController } from '../controllers/gifs.controller.js'

const profileController = new ProfileController()
profileController.loadProfilesFromFile('data/profiles.yaml')

const controller = new AssetTypeController(profileController)
await controller.mergeAssets<Arquivo>(new ArquivoController())
await controller.mergeAssets<GIFs>(new GIFsController())
await controller.mergeAssets<RECs>(new RECsController())
await controller.mergeAssets<RECs25>(new RECs25Controller())
await controller.finish()

profileController.dumpProfilesToFile()
