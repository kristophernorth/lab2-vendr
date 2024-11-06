import { AppState } from "../AppState.js";


class MoneyService {
  addQuarter() {
    AppState.money += .25
  }
}

export const moneyService = new MoneyService()