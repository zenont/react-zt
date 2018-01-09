import React, { Props, StatelessComponent } from 'react'
import FontAwesomeIcon, { IconSizeType } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/fontawesome-free-solid'

export interface ISpinnerProps extends Props<HTMLElement> {
	spin: boolean
	size?: IconSizeType
}

export const Spinner: StatelessComponent<ISpinnerProps> = ({ spin, size }) => (
	spin === true ?
		<FontAwesomeIcon icon={faSpinner} spin={spin} size={size} /> : null
)
export { IconSizeType }
export default Spinner
