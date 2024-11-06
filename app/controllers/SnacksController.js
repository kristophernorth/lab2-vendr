import { AppState } from "../AppState.js";
import { snacksService } from "../services/SnacksService.js";
import { setHTML } from "../utils/Writer.js";


export class SnacksController {
  constructor() {
    this.drawSnack()
  }

  drawSnack() {
    const snacks = AppState.snacks
    let snacksHTML = ''
    snacks.forEach(snack => snacksHTML += snack.cardHTMLTemplate)
    setHTML('snacks-list', snacksHTML)
  }


  buySnack(snackName) {
    snacksService.buySnack(snackName)
  }
}

