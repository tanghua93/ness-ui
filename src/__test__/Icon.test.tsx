import * as React from 'react';
import Icon from '../components/Icon'
import { shallow, render, mount } from 'enzyme'

describe('test Icon component', () => {
    it('render the correct default Icon component', () => {
        const wrapper = shallow(
            <Icon /> 
        )
        expect(wrapper.find('.icon')).toHaveLength(1);
    })
    it('render the correct default Icon component props', () => {
        const wrapper = shallow(
            <Icon name="down"/>
        )
        expect(wrapper.find('.icon').hasClass('icon-down')).toEqual(true);
    })
    
})