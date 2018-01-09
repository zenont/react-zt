import React, { Props, StatelessComponent } from 'react'
import FontAwesomeIcon, { IconSizeType } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/fontawesome-free-solid'

export interface IButtonProps extends Props<HTMLElement> {
	size?: IconSizeType
}

export const Button: StatelessComponent<IButtonProps> = ({ children }) => (
	<a className="zt-component-btn">{children}</a>
)
export { IconSizeType }
export default Button
