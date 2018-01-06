import React, { Props, StatelessComponent } from 'react'
import fontawesome, { FamilyPrefix } from '@fortawesome/fontawesome'

fontawesome.config = {
	familyPrefix
}
export const FaIcon: StatelessComponent<Props<HTMLElement>> = ({ children }) => (
	<i>{children} </i>
)
