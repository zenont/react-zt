import React, { Props, StatelessComponent } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/fontawesome-free-solid'

export interface ISpinnerProps extends Props<HTMLElement> {
	spin: boolean
}

export const Spinner: StatelessComponent<ISpinnerProps> = ({ spin }) => (
	<FontAwesomeIcon icon={faSpinner} spin={spin} />
)

export default Spinner
