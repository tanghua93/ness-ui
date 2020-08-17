import * as React from 'react';
import Notification from '../components/Notification'
import { shallow, render, mount } from 'enzyme'
import 'jsdom-global/register'
describe('test Notification component', () => {
    it('render the correct default Notification component', () => {
        const wrapper = mount(
            <Notification title="这是标题" visible={false}/>
        )
        expect(wrapper.find('.notification')).toHaveLength(0)
        wrapper.setProps({ visible: true})
        wrapper.update()
        expect(wrapper.find('.notification')).toHaveLength(1)
        expect(wrapper.find('.notification').text()).toBe('这是标题')
    })
})