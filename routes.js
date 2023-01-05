const { Router } = require('@layer0/core/router')

export default new Router().fallback(({ renderWithApp }) => {
  renderWithApp()
})
