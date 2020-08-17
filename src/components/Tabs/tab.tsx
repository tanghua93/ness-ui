import React, { ReactElement } from 'react'
import { TabPropsType } from './propsType'

export class Tab extends React.PureComponent<TabPropsType> {
  handleClick = () => {
    const {
      index,
      children,
      setIndex
    } = this.props

    const tab = children[index] as ReactElement
    if (tab.props.onClick) {
      tab.props.onClick(tab, index)
    }
    setIndex(index)
  }

  render() {
    const { classPrefix, active, vertical, tabHeight, title, rate } = this.props
    const cls = `${classPrefix}-tab-bar-tab`
    const activeCls = active ? ` ${cls}-active` : ''

    const style: React.CSSProperties = {}
    if (vertical) {
      style.height = tabHeight
    } else {
      style.width = `${rate}%`
    }

    return (
      <div
        className={`${cls}${activeCls}`}
        style={style}
        onClick={this.handleClick}
      >
        {title}
      </div>
    )
  }
}
