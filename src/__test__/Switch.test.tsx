import * as React from 'react';
import Switch from '../components/Switch'
import { shallow, render, mount } from 'enzyme'
import 'jsdom-global/register'
describe('test Switch component', () => {
    it('render the correct default Switch component', () => {
        const wrapper = mount(
            <Switch />
        )
        expect(wrapper.find('.switch')).toHaveLength(1)
        expect(wrapper.find('.switch').hasClass('switch-primary')).toBe(true)
    })
    it('render the correct Switch component props', () => {
        const changeMock = jest.fn()
        const wrapper = mount(
            <Switch 
                solid
                onValueChange={changeMock}
            />
        )
        expect(wrapper.find('.switch').hasClass('switch-solid')).toBe(true)
        wrapper.find('input').simulate('change',{ target: { checked: true } })
        expect(changeMock).toHaveBeenCalled()
    })
    it('render the correct disabled Switch component', () => {
        const wrapper = mount(
            <Switch
                disabled
            />
        )
        expect(wrapper.props().disabled).toBe(true)
        expect(wrapper.find('.switch').hasClass('disabled')).toBe(true) 
    })
})