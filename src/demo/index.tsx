import '../../styles/sass/all'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { App } from './App'

const app = document.getElementById('app')

const hotRender = (HotReloadComponent: any) => {
	render(
		<AppContainer>
			<HotReloadComponent />
		</AppContainer>,
		app
	)
}

hotRender(App)

if (module.hot) {
	module.hot.accept('./App', () => hotRender(App))
}
