import { ProfileController } from "../controllers/profile.controller.js";

/**
 * Carrega os dados dos Profiles no Controller
 */
const profileController = new ProfileController();
const profiles =
  profileController.loadProfileDataFromFile("data/profiles.yaml");
console.log(profiles);
