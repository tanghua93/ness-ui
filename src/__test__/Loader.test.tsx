import * as React from 'react';
import Loader from '../components/Loader'
import { shallow, render, mount } from 'enzyme'
import 'jsdom-global/register'
describe('test Loader component', () => {
    it('render the correct default Loader component', () => {
        const wrapper = shallow(
            <Loader />
        )
        expect(wrapper.find('.loader')).toHaveLength(1);
        expect(wrapper.find('.loader-inner').hasClass('ball-spin-fade-loader')).toEqual(true);
    })
    it('render the correct default Loader component props', () => {
        const wrapper = shallow(
            <Loader name="pacman" color="red" scale={1.5}/>
        )
        expect(wrapper.find('.loader-inner').hasClass('pacman')).toEqual(true);
        expect(wrapper.find('.loader').children().props().style.transform).toEqual(`scale(1.5)`);
    })
})