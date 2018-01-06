

declare module '@fortawesome/react-fontawesome' {
	/// <reference types="react" />
	import { Props, StatelessComponent } from 'react'

	export enum FlipDirections {
		horizontal = 'horizontal',
		vertical = 'vertical',
		both = 'both'
	}
	export enum PullDirections {
		right = 'right',
		left = 'left'
	}

	export enum Rotations {
		Ninenty = 90,
		OneEighty = 180,
		TwoSeventy = 270
	}

	export enum Sizes {
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
		readonly border?: boolean
		readonly className?: string
		readonly mask?: object | Array<any> | string
		readonly fixedWidth?: boolean
		readonly flip?: FlipDirections | string
		readonly icon?: object | Array<any> | string
		readonly listItem?: boolean
		readonly pull?: PullDirections | string
		readonly pulse?: boolean
		readonly name?: string
		readonly rotation?: Rotations | number
		readonly size?: Sizes | string
		readonly spin?: boolean
		readonly symbol?: boolean | string
		readonly transform?: string | object
	}

	export const FontAwesomeIcon: StatelessComponent<Props<HTMLDivElement>>;
	export default FontAwesomeIcon;
}
