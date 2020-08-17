import * as React from 'react';
import Badge from '../components/Badge'
import { shallow, render, mount } from 'enzyme'

describe('test Badge component', () => {
    it('render Badge by default', () => {
        const wrapper = shallow(
            <Badge /> 
        )
        expect(wrapper.find('.badge')).toHaveLength(1)
        expect(wrapper.find('.badge').hasClass('badge-default')).toBeTruthy()
    })
    it('render the correct Badge component props', () => {
        const wrapper = shallow(
            <Badge theme="primary" rounded/>
        )
        expect(wrapper.find('.badge').hasClass('badge-primary badge-rounded')).toBeTruthy()
        wrapper.setProps({className:'badgeExample'})
        expect(wrapper.prop('className')).toEqual('badge badgeExample badge-primary badge-rounded') 
        wrapper.setProps({ style: {backgroundColor:'red'} })
        expect(wrapper.prop('style').backgroundColor).toEqual('red')
       
    })
    it('render Badge is hollow style', () => {
        const wrapper = shallow(
            <Badge theme="primary" hollow />
        )
        expect(wrapper.find('.badge').hasClass('badge-hollow-primary')).toBeTruthy()
    })
})