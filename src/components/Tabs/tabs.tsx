import React from 'react'
import { StickyContainer } from 'react-sticky'
import { TabsPropsType } from './propsType'
import { TabPane } from './tabPane'
import { TabBar } from './tabBar'
import { TabContent } from './tabContent'
import { getIndex, getOffset } from './util'

class TabsStateType {
  currentIndex!: number
  current?: number | string
}

export class Tabs extends React.Component<TabsPropsType, TabsStateType> {
  static TabPane = TabPane
  state: TabsStateType
  rate: number
  vertical: boolean
  initScrollTop: number
  scrollTop: Array<number | undefined>
  tabBarRef: React.RefObject<TabBar>
  tabsRef: React.RefObject<HTMLDivElement>

  static defaultProps = {
    classPrefix: 'tabs',
    position: 'top',
    animated: true,
    swipeable: true,
    tabHeight: 32,
    pageSize: 5,
    sticky: false,
    preRender: false
  }

  constructor(props: TabsPropsType) {
    super(props)
    const {
      children,
      position,
      pageSize,
      current,
      defaultActiveKey
    } = this.props
    this.tabBarRef = React.createRef<TabBar>()
    this.tabsRef = React.createRef<HTMLDivElement>()
    this.scrollTop = []

    let rate = 100
    if (Array.isArray(children)) {
      rate = rate / Math.min(pageSize as number, children.length)
    }
    this.rate = rate
    this.vertical = position === 'left' || position === 'right'
    this.initScrollTop = 0
    this.state = {
      current,
      currentIndex: getIndex(children, current || defaultActiveKey)
    }
  }

  componentDidMount() {
    if (this.props.sticky) {
      const div = this.tabsRef.current
      if (div) {
        const offset = getOffset(div)
        this.initScrollTop = offset.top
      }
    }
  }

  static getDerivedStateFromProps(
    nextProps: TabsPropsType,
    prevState: TabsStateType
  ) {
    // 处理受控 current
    if (nextProps.current !== prevState.current) {
      const index = getIndex(nextProps.children, nextProps.current)
      return {
        current: nextProps.current,
        currentIndex: index
      }
    }
    return null
  }

  componentDidUpdate(prevProps: TabsPropsType, prevState: TabsStateType) {
    // 处理 onChange 事件
    const prevIndex = prevState.currentIndex
    const currentIndex = this.state.currentIndex
    const { pageSize, children } = this.props
    if (prevIndex !== currentIndex) {
      if (prevProps.sticky) {
        const scrollingElement = document.scrollingElement || document.body
        const scrollTop = scrollingElement.scrollTop
        if (scrollTop >= this.initScrollTop) {
          const currentScrollTop = this.scrollTop[currentIndex]
          scrollingElement.scrollTop =
            currentScrollTop || this.initScrollTop
          this.scrollTop[prevIndex] = scrollTop
        } else {
          this.scrollTop = this.scrollTop.map(() => 0)
        }
      }
      // tab bar 位置处理
      if (pageSize) {
        const len = children.length - 1
        if (len >= pageSize) {
          let delta = currentIndex - pageSize + 2
          // 保证不能偏移过头
          if (delta < 0) {
            delta = 0
          }
          if (len < delta + pageSize) {
            delta = len - pageSize + 1
          }
          if (!this.vertical) {
            // @ts-ignore
            const ref = this.tabBarRef.current.tabBar.current
            if (ref) {
              ref.style.left = `-${delta * this.rate}%`
              ref.style.position = 'relative'
            }
          }
        }
      }
      if (this.props.onChange) {
        this.props.onChange(
          this.props.children[currentIndex],
          this.props.children[prevIndex],
          currentIndex
        )
      }
    }
  }

  gotoTab = (key: number | string) => {
    this.setIndex(getIndex(this.props.children, key))
  }

  setIndex = (index: number) => {
    // 只处理非受控
    if (this.props.current === undefined) {
      const { currentIndex } = this.state
      const { children } = this.props
      const len = children.length - 1
      index = Math.min(Math.max(0, index), len)
      if (currentIndex !== index) {
        this.setState({
          currentIndex: index
        })
      }
    }
  }

  render() {
    const { classPrefix, position, sticky, onSwipe } = this.props

    const pane = [
      <TabBar
        {...this.props}
        currentIndex={this.state.currentIndex}
        setIndex={this.setIndex}
        vertical={this.vertical}
        rate={this.rate}
        key="tab-bar"
        ref={this.tabBarRef}
      />,
      <TabContent
        {...this.props}
        currentIndex={this.state.currentIndex}
        setIndex={this.setIndex}
        vertical={this.vertical}
        rate={this.rate}
        onSwipe={onSwipe}
        key="tab-content"
      />
    ]
    if (position === 'bottom' || position === 'right') {
      pane.reverse()
    }

    const tabs = (
      <div
        className={`${classPrefix} ${classPrefix}-${position}${
          this.vertical ? ` ${classPrefix}-vertical` : ` ${classPrefix}-horizontal`
        }`}
        ref={this.tabsRef}
      >
        {pane}
      </div>
    )

    if (sticky) {
      return <StickyContainer>{tabs}</StickyContainer>
    }
    return tabs
  }
}
