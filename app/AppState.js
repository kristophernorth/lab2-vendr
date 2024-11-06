import { Snack } from './models/SnackModel.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []



  snacks = [
    new Snack({
      name: 'Nachos',
      price: 4,
      imgURL: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }),
    new Snack({
      name: 'Pizza',
      price: 10,
      imgURL: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }),
    new Snack({
      name: 'Burger',
      price: 7,
      imgURL: 'https://plus.unsplash.com/premium_photo-1683619761492-639240d29bb5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }),
    new Snack({
      name: 'Sushi',
      price: 6,
      imgURL: 'https://plus.unsplash.com/premium_photo-1664472644125-f12aecccdd52?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    })
  ]
  money = 0
}




export const AppState = createObservableProxy(new ObservableAppState())