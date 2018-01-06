import React from 'react'
import { render } from 'react-dom'
import { Spinner } from '../common'

const element = document.getElementById('app')

render(
	<div>
		<Spinner />
	</div>,
	element)
