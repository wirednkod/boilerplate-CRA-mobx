import { decorate, observable, configure, action, computed } from "mobx"

configure({ enforceActions: 'observed' })

class Store {
  name = 'This is the name'

  get retrieveName () {
    return this.name
  }

  alterName = (val) => {
    this.name = val
  }
}

decorate(Store, {
  name: observable,
  retrieveName: computed,
  alterName: action
})

const appStore = new Store()
export default appStore
