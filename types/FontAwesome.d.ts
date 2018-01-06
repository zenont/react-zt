declare module '@fortawesome/fontawesome' {
	export enum FamilyPrefix {
		fa = 'fa',
	}

	export interface Options {
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
	} & any

	export type i2svgParams = {
		node?: HTMLElement
		callback: Function
	}

	export type Icons = number | string | Array<number | string | any> | any

	export type FindIconDefinitionParams = {
		prefix?: string
		iconName?: string
		icon?: Icons
	}

	export type IconParams = {
		transform?: Transform
		compose?: any
		title?: string
		classes?: string[]
		attributes?: object
		style?: object
		symbol?: boolean | string
	}

	export type Styles = {

	}

	export interface IconDefinition {
		prefix: string
		iconName: string
		icon: Icons
	}

	export interface Transform {
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
		transform: (transformString: string) => Transform
	}

	export interface Library {
		add: (...iconDefinitions: any[]) => void
	}

	export interface FontAwesome {
		dom: Dom
		parse: Parse
		library: Library
		config: Options
		findIconDefinition: (params: FindIconDefinitionParams | any) => IconDefinition | undefined
		icon: (iconDefinition: IconDefinition, params?: IconParams | any) => FaIcon | undefined
	}
	export const fontawesome: FontAwesome
	export default fontawesome
}

/*
/// <reference types="react" />
import { Component } from 'react';
export declare class App extends Component {
    render(): JSX.Element;
}

/// <reference types="react" />
import { Props, StatelessComponent } from 'react';
export declare const Spinner: StatelessComponent<Props<HTMLDivElement>>;
export default Spinner;*/
