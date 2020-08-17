
import * as React from 'react';
import Checkbox from '../components/Checkbox'
import { shallow, render, mount } from 'enzyme'
import 'jsdom-global/register'
describe('test Checkbox component', () => {
    it('render the correct default Checkbox component',()=>{
        const wrapper = mount(<Checkbox>男</Checkbox>)
        expect(wrapper.find('.checkbox')).toHaveLength(1) 
        expect(wrapper.find('.checkbox').first().text()).toBe('男') 
    })
    it('render the correct Checkbox component props', () => {
        const changeMock = jest.fn()
        const wrapper = mount(<Checkbox defaultChecked onChange={changeMock}>男</Checkbox>)
        const checkbox = wrapper.find('input[type="checkbox"]').first()
        expect(wrapper.find('input').prop('defaultChecked')).toBe(true)
        checkbox.simulate('change', { target: { checked: true } })
        expect(changeMock).toHaveBeenCalled()
    })
    it('render the correct Checkbox component disabled', () => {
        const wrapper = mount(<Checkbox disabled>男</Checkbox>)
        expect(wrapper.prop('disabled')).toBe(true)
        expect(wrapper.find('.checkbox').hasClass('item-disabled')).toBe(true)  
    })
})