import React, { Component } from 'react'
import { IconSize, Spinner } from '../common'

export class App extends Component {
	public render() {
		return (
			<div>
				<Spinner size={IconSize.lg} spin />
			</div>
		)
	}
}
