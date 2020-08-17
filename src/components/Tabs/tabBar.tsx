import React from 'react'
import { Sticky } from 'react-sticky'
import Gesture, { IGestureStatus } from 'rc-gesture'
import { TabBarPropsType } from './propsType'
import { Tab } from './tab'

export class TabBar extends React.PureComponent<TabBarPropsType> {
  tabBar: React.RefObject<HTMLDivElement>

  constructor(props: TabBarPropsType) {
    super(props)
    this.tabBar = React.createRef<HTMLDivElement>()
  }

  onPan = (() => {
    let offset: number = 0

    return {
      onPanStart: () => {
        if (this.tabBar && this.tabBar.current) {
          offset = this.tabBar.current.offsetLeft
        }
      },
      onPanMove: (status: IGestureStatus) => {
        if (!status.moveStatus) {
          return
        }
        if (this.tabBar && this.tabBar.current) {
          let x = offset + status.moveStatus.x
          x = Math.max(
            Math.min(x, 0),
            this.tabBar.current.clientWidth - this.tabBar.current.scrollWidth
          )
          this.tabBar.current.style.left = `${x}px`
        }
      },
      onPanEnd: () => {}
    }
  })()

  render() {
    const {
      classPrefix,
      position,
      vertical,
      currentIndex,
      tabHeight,
      children,
      rate,
      sticky
    } = this.props
    const cls = `${classPrefix}-tab-bar`
    let deviate = 0
    const activeStyle: React.CSSProperties = {}
    const tabbar = (
      <div className={`${cls}-wrap ${cls}-${position}`}>
        <div className={`${cls}`} ref={this.tabBar}>
          <Gesture {...this.onPan}>
            <div className={`${cls}-content`}>
              {React.Children.map(children, (child: any, i: number) => {
                const { title, onClick } = child.props
                if (i === currentIndex) {
                  deviate = rate * i
                  if (vertical) {
                    activeStyle.height = tabHeight
                    activeStyle.top = i * (tabHeight as number)
                  } else {
                    activeStyle.width = `${rate}%`
                    activeStyle.left = `${deviate}%`
                  }
                }
                return (
                  <Tab
                    key={i as any}
                    index={i}
                    active={i === currentIndex}
                    title={title}
                 
                    onClick={onClick}
                    {...this.props}
                  />
                )
              })}
              <div className={`${cls}-underline`} style={activeStyle}></div>
            </div>
          </Gesture>
        </div>
      </div>
    )
    if (sticky) {
      return (
        <Sticky>
          {({ style }) => {
            return React.cloneElement(tabbar, {
              style: { ...style, zIndex: 1 }
            })
          }}
        </Sticky>
      )
    }
    return tabbar
  }
}
