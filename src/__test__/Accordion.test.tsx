
import * as React from 'react'
import Accordion from '../components/Accordion'
import { shallow,mount } from 'enzyme'
import 'jsdom-global/register'
import ReactDOM from 'react-dom'
const testContent = [
    {
        title: '对明天最好的准备，是把今天做到最好',
        desc: `
            如果累了，就拉上窗帘关上手机关掉闹钟深呼吸一口气钻进被窝，放空去睡觉，难熬的日子总需要更多精力。`
    },
    {
        title: '在往事背后疗伤，在人来人往中坚强',
        desc: `
               人生短暂，岁月带着年华走，欢喜悲伤皆浮华，做心里最真实的自己，不虚伪，不做作。过自己最向往的生活，不摧眉，不折腰。感恩有助于自己的人，不忘义，不忘情。面对生活的不顺与挫折，不叹息，不惆怅，以平和的心态珍惜每一天。`
    },
    {
        title: '清清浅浅人生路，简简单单随缘行',
        desc: `人帮人，心靠心，朋友才能守住，才能风雨同舟。情暖情，心交心，感情才能拥有，才能天长地久。`
    }
];
describe('test Button component', () => {
    it('render accordion selected by default', async () => {
        const wrapper = mount(
            <Accordion defaultActiveKey={1}>
                {testContent.map((item, i) => {
                    return (
                        <Accordion.Item
                            title={item.title}
                            key={i}

                        >
                            {item.desc}
                        </Accordion.Item>
                    )
                })}
            </Accordion>
        )
        expect(wrapper.find('.accordion')).toHaveLength(1);
        expect(wrapper.find('.accordion-item').at(1).hasClass('active')).toEqual(true)
        expect(wrapper.find('dt').at(0).text()).toBe('对明天最好的准备，是把今天做到最好');
    })
})