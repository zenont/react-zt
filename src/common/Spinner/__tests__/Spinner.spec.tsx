import React from 'react'
import { shallow } from 'enzyme'
import { Spinner } from '../Spinner'

describe('<Spinner />', () => {
	it('should render', () => {
		const wrapped = shallow(<Spinner />)
		expect(wrapped).toMatchSnapshot()
	})
})
