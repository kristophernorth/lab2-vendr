import { router } from './router-config.js';
import { HomeController } from './controllers/HomeController.js';
import { MoneyController } from './controllers/MoneyCOntroller.js';
import { SnacksController } from './controllers/SnacksController.js';
const USE_ROUTER = false

class App {

  MoneyController = new MoneyController()
  SnacksController = new SnacksController

  HomeController = new HomeController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }

}

const app = new App()
// @ts-ignore
window.app = app
