declare module '@fortawesome/fontawesome' {
	export interface FontAwesomeConfig {
		autoReplaceSvg: boolean
	}

	export enum FamilyPrefix {
		fa = 'fa',
	}

	export interface FontAwesomeOptions {
		/**
		 * String used to prefix classes like fa-spin.
		 * Changing this would allow you to still use Font Awesome 4 with the prefix of fa.
		 * default fa
		 * @type {string}
		 * @memberof Options
		 */
		familyPrefix?: string
		/**
		 * used as the base class name when building the SVG elements.
		 * If you changed this to foo the SVGs would start with <svg class="foo ...">.
		 * default svg-inline--fa
		 * @type {string}
		 * @memberof Options
		 */
		replacementClass?: string
		/**
		 * if this is set to true Font Awesome will automatically add CSS definitions to the <head> of the document.
		 * default true
		 * @type {boolean}
		 * @memberof Options
		 */
		autoAddCss?: boolean
		/**
		 * whether to automatically apply accessibility best practices for the generated icons.
		 * default true
		 * @type {boolean}
		 * @memberof Options
		 */
		autoA11y?: boolean
		/**
		 * setting this to true will add performance markers using the Performance API
		 * default false
		 * @type {boolean}
		 * @memberof Options
		 */
		measurePerformance: boolean
	}

	export type FaIcon = {
		node: HTMLCollection[]
		html: string[]
		abstract: object[]
	}

	export type i2svgParams = {
		node?: HTMLElement
		callback: Function
	}

	export type FindIconDefinitionParams = {
		prefix?: string
		iconName?: string
	}

	export type IconParams = {
		transform?: FontAwesomeTransform
		compose?: any
		title?: string
		classes?: string[]
		attributes?: object
		style?: object
		symbol?: boolean | string
	}

	export type TextParms = {
		transform?: FontAwesomeTransform
		title?: string
		classes?: string[]
		attributes?: object
		style?: object
	}

	export type Styles = {

	}

	export interface IconDefinition {
		prefix: string
		iconName: string
		icon: Array<number | string | Array<any>>
	}

	export interface FontAwesomeTransform {
		size?: number
		x?: number
		y?: number
		rotate?: number
		flipX: boolean
		flipY: boolean
	}

	export interface Dom {
		i2svg: (params?: i2svgParams | any) => void
		styles: () => Styles
		insertStyles: (styles: Styles | any) => void
	}

	export interface Parse {
		transform: (transformString: string) => FontAwesomeTransform
	}

	export interface FontAwesomeLibrary {
		add: (...iconDefinitions: any[]) => void
	}

	export interface FaIconFunction {
		(): FaIcon
	}

	export interface PushFunction {
		(func: FaIconFunction): void
	}

	export interface LayerFunction {
		(func: (push: PushFunction) => void): FaIcon
	}

	export interface FontAwesome {
		dom: Dom
		parse: Parse
		library: FontAwesomeLibrary
		config: FontAwesomeOptions
		findIconDefinition: (params: FindIconDefinitionParams | any) => IconDefinition | undefined
		icon: (iconDefinition: IconDefinition, params?: IconParams | any) => FaIcon
		layer: LayerFunction
		text: (content: string, params?: TextParms | any) => FaIcon | any
	}
	global {
		interface Window {
			FontAwesome: FontAwesome
			FontAwesomeConfig: FontAwesomeConfig
		}
	}
	export const fontawesome: FontAwesome
	export default fontawesome
}
