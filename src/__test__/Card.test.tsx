
import * as React from 'react';
import Card from '../components/Card'
import { shallow, render, mount } from 'enzyme'
import 'jsdom-global/register'
describe('test Card component', () => {
    it('render the correct default Card', () => {
        const wrapper = shallow(<Card>卡片内容</Card>)
        expect(wrapper.find('.card')).toHaveLength(1) 
        expect(wrapper.find('.card-body').text()).toBe('卡片内容') 
    })  
    it('render the correct Card component props', () => {
        const wrapper = mount(<Card title="卡片头部" footer="卡片底部">卡片内容</Card>)
        expect(wrapper.find('.card-header')).toHaveLength(1)
        expect(wrapper.find('.card-header').first().text()).toBe('卡片头部') 
        expect(wrapper.find('.card-footer')).toHaveLength(1)
        expect(wrapper.find('.card-footer').first().text()).toBe('卡片底部') 
    })  
    it('render the correct card cover', () => {
        const wrapper = mount(<Card>
            <Card.Item cover="https://cdn.pixabay.com/photo/2018/09/30/16/26/sun-3713835_960_720.jpg"></Card.Item>
        </Card>)
        expect(wrapper.find('.card-cover')).toHaveLength(1)
    })  
})