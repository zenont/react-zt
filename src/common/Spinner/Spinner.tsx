import React, { Props, StatelessComponent } from 'react'

export const Spinner: StatelessComponent<Props<HTMLDivElement>> = ({ children }) => (
	<div className="zt-component-spinner">
		{children} yah i am here!
		<i className="far fa-user">icon!</i>
	</div>
)

export default Spinner
