import React from 'react'
import ReactDom from 'react-dom'
import {AppContainer} from 'react-hot-loader'

import getRouter from './router/router'

renderWithHotReload(getRouter())

if (module.hot) {
  module.hot.accept('./router/router', () => {
    const getRouter = require('./router/router').default
    renderWithHotReload(getRouter())
  })
}

function renderWithHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>
      {RootElement}
    </AppContainer>,
    document.getElementById('app')
  )
}
