import { AppState } from "../AppState.js"

export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get cardHTMLTemplate() {
    return `
      <div class="col-md-4 card">
          <div class="row">
            <div class="col">
              <img src="${this.imgUrl}" alt="${this.name}" class="img-fluid">
              <hr>
              <div class="row d-flex align-items-center">
                <div class="col-md-6">
                  <h3>${this.name}</h3>
                  <p class="fs-4">${this.priceAsCurrency}</p>
                </div>
                <div class="col-md-6 text-end">
                  <p class="fs-4" role="button" onclick="app.SnacksController.buySnack('${this.name}')">Buy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    `
  }

  get priceAsCurrency() {
    return new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(this.price)
  }

  get snackTitle() {
    return `Purchase ${this.name} for ${this.priceAsCurrency}`
  }

}