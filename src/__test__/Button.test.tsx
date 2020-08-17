
import * as React from 'react';
import Button, { ButtonProps } from '../components/Button'
import { shallow, render, mount } from 'enzyme'
const testProps: ButtonProps = {
    btnType: 'primary',
    size: 'lg',
    className: 'custom'
}
const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn()
}
describe('test Button component', () => {
    it('should render the correct default button', () => {
        const wrapper = shallow(<Button>Nice</Button>)
        expect(wrapper.text()).toEqual('Nice')
        expect(wrapper.hasClass('btn btn-default')).toEqual(true) 
        expect(wrapper.prop('disabled')).toBeUndefined()
        expect(wrapper.find('.btn').type()).toEqual('button')
        wrapper.setProps({ onClick: jest.fn() })
        wrapper.simulate('click')
        expect(wrapper.props().onClick).toBeCalledTimes(1)
    })
    it('should render the correct component based on different props', () => {
        const wrapper = shallow(
            <Button {...testProps}>size</Button>
        )
     
        expect(wrapper.text()).toEqual('size')
        expect(wrapper.hasClass('btn custom btn-primary btn-lg')).toBeTruthy()
    })
    
    it('should render a link button is provided', () => {
        const wrapper = shallow(<Button href="https://www.baidu.com">link</Button>)
        expect(wrapper.text()).toEqual('link')
        expect(wrapper.props().href).not.toBeUndefined()
        expect(wrapper.find('.btn').type()).toEqual('a')
    })
    it('should render disabled button when disabled set to true', () => {
        const wrapper = shallow(<Button {...disabledProps}>disabled</Button>)
        expect(wrapper.text()).toEqual('disabled')
        expect(wrapper.prop('disabled')).toEqual(true)
        expect(disabledProps.onClick).not.toHaveBeenCalled()
    })
})