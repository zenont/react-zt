declare module '@fortawesome/react-fontawesome' {
	/// <reference types="react" />
	/// <reference types="@fortawesome/fontawesome" />
	import { Props, StatelessComponent } from 'react'
	import { IconDefinition, FontAwesomeTransform } from '@fortawesome/fontawesome'

	export enum IconDirection {
		horizontal = 'horizontal',
		vertical = 'vertical',
		both = 'both'
	}
	export enum IconPull {
		right = 'right',
		left = 'left'
	}

	export enum IconRotation {
		Ninenty = 90,
		OneEighty = 180,
		TwoSeventy = 270
	}

	export enum IconSize {
		lg = 'lg',
		xs = 'xs',
		sm = 'sm',
		x1 = '1x',
		x2 = '2x',
		x3 = '3x',
		x4 = '4x',
		x5 = '5x',
		x6 = '6x',
		x7 = '7x',
		x8 = '8x',
		x9 = '9x',
		x10 = '10x'
	}

	export interface FontAwesomeIconProps extends Props<HTMLDivElement> {
		readonly icon: IconDefinition | Array<any> | string | undefined
		readonly border?: boolean
		readonly className?: string
		readonly mask?: object | Array<any> | string
		readonly fixedWidth?: boolean
		readonly flip?: IconDirection | string
		readonly listItem?: boolean
		readonly pull?: IconPull | string
		readonly pulse?: boolean
		readonly name?: string
		readonly rotation?: IconRotation | number
		readonly size?: IconSize | string
		readonly spin?: boolean
		readonly symbol?: boolean | string
		readonly transform?: string | FontAwesomeTransform | object
	}

	export const FontAwesomeIcon: StatelessComponent<FontAwesomeIconProps>;
	export default FontAwesomeIcon;
}
