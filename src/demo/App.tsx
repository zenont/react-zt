import React, { Component } from 'react'
import { IconSize } from '@fortawesome/react-fontawesome'
import { Spinner } from '../common'

export class App extends Component {
	public render() {
		return (
			<div>
				<Spinner size={IconSize.x10} spin />
			</div>
		)
	}
}
