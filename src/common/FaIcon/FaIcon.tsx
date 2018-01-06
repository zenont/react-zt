import React, { Props, StatelessComponent } from 'react'
import fontawesome, { FamilyPrefix } from '@fortawesome/fontawesome'

fontawesome.dom.i2svg()
const lol: string[] = fontawesome.layer((push) => { push(fontawesome.text('Wait…', { transform: { size: 4 } })) }).html
fontawesome.layer((push) => {
	push(fontawesome.text('Wait…', { transform: { size: 4 } }))
	push(fontawesome.text('Wait…', { transform: { size: 4 } }))
})
export const FaIcon: StatelessComponent<Props<HTMLElement>> = ({ children }) => (
	<i>{children} </i>
)
