
import * as React from 'react';
import Grid from '../components/Grid'
import { shallow, render, mount } from 'enzyme'
import 'jsdom-global/register'
describe('test Grid component', () => {
    it('render the correct default Grid component',()=>{
        const wrapper = shallow(<Grid>
            <Grid.Item>网格</Grid.Item>
            <Grid.Item>网格</Grid.Item>
        </Grid>)
        expect(wrapper.find('.g')).toHaveLength(1)
    })
    it('render the correct Grid component props', () => {
        const wrapper = shallow(<Grid
            avg={4}
            bordered

        >
            <Grid.Item>col1</Grid.Item>
            <Grid.Item>col2</Grid.Item>
            <Grid.Item>col3</Grid.Item>
            <Grid.Item>col4</Grid.Item>
        </Grid>)
        expect(wrapper.find('.g').children()).toHaveLength(4)
        expect(wrapper.find('.g').hasClass('g-avg-4')).toEqual(true)
        expect(wrapper.find('.g').hasClass('g-bordered')).toBe(true)
    })
    it('render the correct Grid.Item component props', () => {
        const wrapper = mount(<Grid
        >
            <Grid.Item cols={2}>col-2</Grid.Item>
            <Grid.Item cols={4}>col-4</Grid.Item>
        </Grid>)
        wrapper.find('.col').forEach(element => {
            expect(element.hasClass(`${element.props().children}`)).toBeTruthy()
        });
       
    })
})