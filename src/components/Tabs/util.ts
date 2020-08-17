import React from 'react'

export function getIndex(children: any, key: string | number | undefined) {
  let currentIndex = 0
  React.Children.forEach(children, (child: any, i) => {
    if (child !== null) {
      if (child.key === key || i === key) {
        currentIndex = i
      }
    }
  })
  return currentIndex
}

export function getOffset(target: HTMLElement): { top: number; left: number } {
  let top = 0
  let left = 0

  while (target.offsetParent) {
    top += target.offsetTop
    left += target.offsetLeft
    target = target.offsetParent as HTMLElement
  }

  return {
    top: top,
    left: left
  }
}
