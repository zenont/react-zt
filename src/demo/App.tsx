import React, { Component, Props } from 'react'
import { Button, IconSize, Spinner } from '../common'

const divStyle = {
	marginBottom: '15px'
}

export class App extends Component<Props<{}>> {
	public render() {
		return (
			<div>
				<div style={divStyle}>
					<Spinner size={IconSize.lg} spin />
				</div>
				<div style={divStyle}>
					<Button>button</Button>
				</div>
			</div>
		)
	}
}
