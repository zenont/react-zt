import React, { Props, StatelessComponent } from 'react'

export const Spinner: StatelessComponent<Props<HTMLDivElement>> = ({ children }) => (
	<div className="zt-component-spinner">
		{children}
	</div>
)

export default Spinner
