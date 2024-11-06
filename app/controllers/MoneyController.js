import { AppState } from "../AppState.js";
import { moneyService } from "../services/MoneyService.js";
import { setText } from "../utils/Writer.js";


export class MoneyController {
  constructor() {
    AppState.on('money', this.drawMoney)
  }

  addQuarter() {
    moneyService.addQuarter()
  }

  drawMoney() {
    const moneyAsCurrency = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(AppState.money)
    setText('total-money', moneyAsCurrency)
  }
}