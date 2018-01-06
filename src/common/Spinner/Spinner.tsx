import React, { Props, StatelessComponent } from 'react'
import FontAwesomeIcon, { BaseFontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/fontawesome-free-solid'

export interface ISpinnerProps extends Props<HTMLElement>, BaseFontAwesomeIconProps {

}

export const Spinner: StatelessComponent<ISpinnerProps> = (props) => (
	<FontAwesomeIcon icon={faSpinner} {...props} />
)

export default Spinner
