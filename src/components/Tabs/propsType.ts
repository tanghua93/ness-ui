import { ReactNode } from 'react'

export interface SwipeData {
  direction: string
  edge: boolean
  currentIndex: number
  nextIndex: number
  defaultAction: () => void
}

export interface TabsPropsType {
  classPrefix?: string
  /** tab bar 的位置，默认 top。当 vertical 时可设置 left 或 right */
  position?: 'top' | 'bottom' | 'left' | 'right'
  /** 切换 tab 时是否显示动画 */
  animated?: boolean
  /** 受控，指定显示的 tab */
  current?: number | string
  /** 非受控，指定初始化显示的 tab */
  defaultActiveKey?: number | string
  /** 是否可使用手势滑动 tab，默认 true */
  swipeable?: boolean
  /** 是否支持 sticky */
  sticky?: boolean
  /** 一屏内显示的 tab 数量 */
  pageSize?: number
  /** 纵向 tab 高度 */
  tabHeight?: number
  /** tab 切换时触发 */
  onChange?: (
    currentTab: TabPanePropsType,
    prevTab: TabPanePropsType,
    index: number
  ) => void
  onSwipe?: (event: Event, data: SwipeData) => void
  children: Array<TabPanePropsType>
  preRender?: boolean
}

export interface TabPanePropsType {
  key?: string | number | null
  title?: ReactNode
  onClick?: (currentTab: TabPanePropsType) => void

}

export interface TabBarPropsType extends TabsPropsType, TabPanePropsType {
  currentIndex: number
  vertical: boolean
  setIndex: (index: number) => void
  rate: number
}

export interface TabPropsType extends TabBarPropsType {
  index: number
  active: boolean
}

export interface TabContentPropsType extends TabBarPropsType {}
