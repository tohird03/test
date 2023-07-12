import {makeAutoObservable} from 'mobx'

class ThemeStore {
  theme = 'light'

  constructor() {
    makeAutoObservable(this)
  }

  setTheme = (theme) => {
    this.theme = theme
  }
}

export const themeStore = new ThemeStore()
