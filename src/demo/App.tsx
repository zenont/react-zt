import React, { Component, Props } from 'react'
import { IconSize, Spinner } from '../common'

export class App extends Component<Props<{}>> {
	public render() {
		return (
			<div>
				<Spinner size={IconSize.lg} spin />
			</div>
		)
	}
}
