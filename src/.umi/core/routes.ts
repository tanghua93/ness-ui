// @ts-nocheck
import { ApplyPluginsType } from '/Users/tanghua/vp-touch-ui/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../../node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"安装与使用","meta":{}},{"title":"Components","path":"/components","meta":{},"children":[{"path":"/components/accordion","title":"Accordion 手风琴","meta":{}},{"path":"/components/badge","title":"Badge 小徽标","meta":{}},{"path":"/components/button","title":"Button 按钮","meta":{}},{"path":"/components/card","title":"Card 卡片","meta":{}},{"path":"/components/checkbox","title":"Checkbox 复选框","meta":{}},{"path":"/components/checkbox-group","title":"CheckboxGroup 复选框组","meta":{}},{"path":"/components/grid","title":"Grid 网格","meta":{}},{"path":"/components/icon","title":"Icon 图标","meta":{}},{"path":"/components/input","title":"Input 输入框组","meta":{}},{"path":"/components/list","title":"List 列表","meta":{}},{"path":"/components/loader","title":"Loader 加载器","meta":{}},{"path":"/components/modal","title":"Modal 弹窗","meta":{}},{"path":"/components/nav-bar","title":"NavBar 顶部导航栏","meta":{}},{"path":"/components/notification","title":"Notification 通知栏","meta":{}},{"path":"/components/off-canvas","title":"OffCanvas 抽屉式导航","meta":{}},{"path":"/components/progress","title":"Progress 进度条","meta":{}},{"path":"/components/radio","title":"Radio 单选框","meta":{}},{"path":"/components/radio-group","title":"RadioGroup 单选框组","meta":{}},{"path":"/components/refresh","title":"Refresh 上拉加载、下拉刷新","meta":{}},{"path":"/components/slider","title":"Slider 轮播器","meta":{}},{"path":"/components/switch","title":"Switch 开关","meta":{}},{"path":"/components/tab-bar","title":"TabBar 底部导航栏","meta":{}},{"path":"/components/tabs","title":"Tabs 选项卡","meta":{}}]}],"/components":[{"title":"基础组件","children":[{"path":"/components/accordion","title":"Accordion 手风琴"},{"path":"/components/badge","title":"Badge 小徽标"},{"path":"/components/button","title":"Button 按钮"},{"path":"/components/card","title":"Card 卡片"},{"path":"/components/grid","title":"Grid 网格"},{"path":"/components/slider","title":"Slider 轮播器"},{"path":"/components/loader","title":"Loader 加载器"},{"path":"/components/tab-bar","title":"TabBar 底部导航栏"},{"path":"/components/icon","title":"Icon 图标"},{"path":"/components/modal","title":"Modal 弹窗"},{"path":"/components/switch","title":"Switch 开关"},{"path":"/components/refresh","title":"Refresh 上拉加载、下拉刷新"},{"path":"/components/tabs","title":"Tabs 选项卡"},{"path":"/components/off-canvas","title":"OffCanvas 抽屉式导航"},{"path":"/components/notification","title":"Notification 通知栏"},{"path":"/components/nav-bar","title":"NavBar 顶部导航栏"},{"path":"/components/tab-bar","title":"TabBar 底部导航栏"},{"path":"/components/checkbox-group","title":"CheckboxGroup 复选框组"},{"path":"/components/radio-group","title":"RadioGroup 单选框组"},{"path":"/components/progress","title":"Progress 进度条"}]}]}},"locales":[],"navs":{},"title":"NESS-UI","logo":"data:image/png;base64,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","desc":"移动端UI组件库","mode":"doc"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('../../index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/index.md",
          "updatedTime": 1594362774266,
          "title": "安装与使用",
          "slugs": [
            {
              "depth": 2,
              "value": "NESS-UI",
              "heading": "ness-ui"
            },
            {
              "depth": 2,
              "value": "技术栈及工具",
              "heading": "技术栈及工具"
            },
            {
              "depth": 2,
              "value": "安装",
              "heading": "安装"
            },
            {
              "depth": 2,
              "value": "引入",
              "heading": "引入"
            }
          ]
        },
        "title": "安装与使用"
      },
      {
        "path": "/components/accordion",
        "component": require('../../components/Accordion/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Accordion/index.md",
          "updatedTime": 1597648189606,
          "title": "Accordion 手风琴",
          "slugs": [
            {
              "depth": 1,
              "value": "Accordion",
              "heading": "accordion"
            },
            {
              "depth": 2,
              "value": "Accordion Props",
              "heading": "accordion-props"
            },
            {
              "depth": 2,
              "value": "Accordion.Item Props",
              "heading": "accordionitem-props"
            }
          ],
          "group": {
            "title": "Components",
            "path": "/components"
          }
        },
        "title": "Accordion 手风琴"
      },
      {
        "path": "/components/badge",
        "component": require('../../components/Badge/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Badge/index.md",
          "updatedTime": 1597655228400,
          "title": "Badge 小徽标",
          "slugs": [
            {
              "depth": 1,
              "value": "Badge",
              "heading": "badge"
            },
            {
              "depth": 2,
              "value": "Badge Props",
              "heading": "badge-props"
            }
          ],
          "group": {
            "title": "Components",
            "path": "/components"
          }
        },
        "title": "Badge 小徽标"
      },
      {
        "path": "/components/button",
        "component": require('../../components/Button/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Button/index.md",
          "updatedTime": 1594372670963,
          "title": "Button 按钮",
          "slugs": [
            {
              "depth": 1,
              "value": "Button",
              "heading": "button"
            },
            {
              "depth": 2,
              "value": "Button Props",
              "heading": "button-props"
            }
          ],
          "group": {
            "title": "Components",
            "path": "/components"
          }
        },
        "title": "Button 按钮"
      },
      {
        "path": "/components/card",
        "component": require('../../components/Card/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Card/index.md",
          "updatedTime": 1594981173384,
          "title": "Card 卡片",
          "slugs": [
            {
              "depth": 1,
              "value": "Card",
              "heading": "card"
            },
            {
              "depth": 2,
              "value": "Card Props",
              "heading": "card-props"
            },
            {
              "depth": 2,
              "value": "Card.Item Props",
              "heading": "carditem-props"
            }
          ],
          "group": {
            "title": "Components",
            "path": "/components"
          }
        },
        "title": "Card 卡片"
      },
      {
        "path": "/components/checkbox",
        "component": require('../../components/Checkbox/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Checkbox/index.md",
          "updatedTime": 1595230135873,
          "title": "Checkbox 复选框",
          "slugs": [
            {
              "depth": 1,
              "value": "Checkbox",
              "heading": "checkbox"
            },
            {
              "depth": 2,
              "value": "Checkbox Props",
              "heading": "checkbox-props"
            }
          ],
          "group": {
            "path": "/components",
            "title": "Components"
          }
        },
        "title": "Checkbox 复选框"
      },
      {
        "path": "/components/checkbox-group",
        "component": require('../../components/CheckboxGroup/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/CheckboxGroup/index.md",
          "updatedTime": 1594370114370,
          "title": "CheckboxGroup 复选框组",
          "slugs": [
            {
              "depth": 1,
              "value": "CheckboxGroup",
              "heading": "checkboxgroup"
            },
            {
              "depth": 2,
              "value": "CheckboxGroup Props",
              "heading": "checkboxgroup-props"
            }
          ],
          "group": {
            "title": "Components",
            "path": "/components"
          }
        },
        "title": "CheckboxGroup 复选框组"
      },
      {
        "path": "/components/grid",
        "component": require('../../components/Grid/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Grid/index.md",
          "updatedTime": 1597212296438,
          "title": "Grid 网格",
          "slugs": [
            {
              "depth": 1,
              "value": "Grid",
              "heading": "grid"
            },
            {
              "depth": 2,
              "value": "Grid Props",
              "heading": "grid-props"
            },
            {
              "depth": 2,
              "value": "Grid.Item Props",
              "heading": "griditem-props"
            }
          ],
          "group": {
            "title": "Components",
            "path": "/components"
          }
        },
        "title": "Grid 网格"
      },
      {
        "path": "/components/icon",
        "component": require('../../components/Icon/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Icon/index.md",
          "updatedTime": 1594368314102,
          "title": "Icon 图标",
          "slugs": [
            {
              "depth": 1,
              "value": "Icon",
              "heading": "icon"
            },
            {
              "depth": 2,
              "value": "Icon Props",
              "heading": "icon-props"
            }
          ],
          "group": {
            "title": "Components",
            "path": "/components"
          }
        },
        "title": "Icon 图标"
      },
      {
        "path": "/components/input",
        "component": require('../../components/Input/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Input/index.md",
          "updatedTime": 1596681140728,
          "title": "Input 输入框组",
          "slugs": [
            {
              "depth": 1,
              "value": "Input",
              "heading": "input"
            },
            {
              "depth": 2,
              "value": "Input Props",
              "heading": "input-props"
            }
          ],
          "group": {
            "path": "/components",
            "title": "Components"
          }
        },
        "title": "Input 输入框组"
      },
      {
        "path": "/components/list",
        "component": require('../../components/List/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/List/index.md",
          "updatedTime": 1594368314117,
          "title": "List 列表",
          "slugs": [
            {
              "depth": 1,
              "value": "List",
              "heading": "list"
            },
            {
              "depth": 2,
              "value": "List Props",
              "heading": "list-props"
            },
            {
              "depth": 2,
              "value": "List.Item Props",
              "heading": "listitem-props"
            }
          ],
          "group": {
            "path": "/components",
            "title": "Components"
          }
        },
        "title": "List 列表"
      },
      {
        "path": "/components/loader",
        "component": require('../../components/Loader/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Loader/index.md",
          "updatedTime": 1594368314111,
          "title": "Loader 加载器",
          "slugs": [
            {
              "depth": 1,
              "value": "Loader",
              "heading": "loader"
            },
            {
              "depth": 2,
              "value": "Grid Props",
              "heading": "grid-props"
            }
          ],
          "group": {
            "title": "Components",
            "path": "/components"
          }
        },
        "title": "Loader 加载器"
      },
      {
        "path": "/components/modal",
        "component": require('../../components/Modal/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Modal/index.md",
          "updatedTime": 1594368314117,
          "title": "Modal 弹窗",
          "slugs": [
            {
              "depth": 1,
              "value": "Modal",
              "heading": "modal"
            },
            {
              "depth": 2,
              "value": "Modal Props",
              "heading": "modal-props"
            }
          ],
          "group": {
            "title": "Components",
            "path": "/components"
          }
        },
        "title": "Modal 弹窗"
      },
      {
        "path": "/components/nav-bar",
        "component": require('../../components/NavBar/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/NavBar/index.md",
          "updatedTime": 1597655056467,
          "title": "NavBar 顶部导航栏",
          "slugs": [
            {
              "depth": 1,
              "value": "NavBar",
              "heading": "navbar"
            },
            {
              "depth": 2,
              "value": "NavBar Props",
              "heading": "navbar-props"
            },
            {
              "depth": 3,
              "value": "LeftContent/RightContent Attribute",
              "heading": "leftcontentrightcontent-attribute"
            }
          ],
          "group": {
            "title": "Components",
            "path": "/components"
          }
        },
        "title": "NavBar 顶部导航栏"
      },
      {
        "path": "/components/notification",
        "component": require('../../components/Notification/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Notification/index.md",
          "updatedTime": 1597655111739,
          "title": "Notification 通知栏",
          "slugs": [
            {
              "depth": 1,
              "value": "Notification",
              "heading": "notification"
            },
            {
              "depth": 2,
              "value": "Notification Props",
              "heading": "notification-props"
            }
          ],
          "group": {
            "title": "Components",
            "path": "/components"
          }
        },
        "title": "Notification 通知栏"
      },
      {
        "path": "/components/off-canvas",
        "component": require('../../components/OffCanvas/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/OffCanvas/index.md",
          "updatedTime": 1597648167235,
          "title": "OffCanvas 抽屉式导航",
          "slugs": [
            {
              "depth": 1,
              "value": "OffCanvas",
              "heading": "offcanvas"
            },
            {
              "depth": 2,
              "value": "Notification Props",
              "heading": "notification-props"
            }
          ],
          "group": {
            "title": "Components",
            "path": "/components"
          }
        },
        "title": "OffCanvas 抽屉式导航"
      },
      {
        "path": "/components/progress",
        "component": require('../../components/Progress/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Progress/index.md",
          "updatedTime": 1594372749892,
          "title": "Progress 进度条",
          "slugs": [
            {
              "depth": 1,
              "value": "Progress",
              "heading": "progress"
            }
          ],
          "group": {
            "title": "Components",
            "path": "/components"
          }
        },
        "title": "Progress 进度条"
      },
      {
        "path": "/components/radio",
        "component": require('../../components/Radio/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Radio/index.md",
          "updatedTime": 1594368314117,
          "title": "Radio 单选框",
          "slugs": [
            {
              "depth": 1,
              "value": "Radio",
              "heading": "radio"
            },
            {
              "depth": 2,
              "value": "Radio Props",
              "heading": "radio-props"
            }
          ],
          "group": {
            "path": "/components",
            "title": "Components"
          }
        },
        "title": "Radio 单选框"
      },
      {
        "path": "/components/radio-group",
        "component": require('../../components/RadioGroup/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/RadioGroup/index.md",
          "updatedTime": 1594370235419,
          "title": "RadioGroup 单选框组",
          "slugs": [
            {
              "depth": 1,
              "value": "RadioGroup",
              "heading": "radiogroup"
            },
            {
              "depth": 2,
              "value": "Radio Props",
              "heading": "radio-props"
            }
          ],
          "group": {
            "title": "Components",
            "path": "/components"
          }
        },
        "title": "RadioGroup 单选框组"
      },
      {
        "path": "/components/refresh",
        "component": require('../../components/Refresh/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Refresh/index.md",
          "updatedTime": 1594368314117,
          "title": "Refresh 上拉加载、下拉刷新",
          "slugs": [
            {
              "depth": 1,
              "value": "Refresh",
              "heading": "refresh"
            },
            {
              "depth": 2,
              "value": "Refresh Props",
              "heading": "refresh-props"
            }
          ],
          "group": {
            "title": "Components",
            "path": "/components"
          }
        },
        "title": "Refresh 上拉加载、下拉刷新"
      },
      {
        "path": "/components/slider",
        "component": require('../../components/Slider/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Slider/index.md",
          "updatedTime": 1594368314116,
          "title": "Slider 轮播器",
          "slugs": [
            {
              "depth": 1,
              "value": "Slider",
              "heading": "slider"
            }
          ],
          "group": {
            "title": "Components",
            "path": "/components"
          }
        },
        "title": "Slider 轮播器"
      },
      {
        "path": "/components/switch",
        "component": require('../../components/Switch/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Switch/index.md",
          "updatedTime": 1597224633606,
          "title": "Switch 开关",
          "slugs": [
            {
              "depth": 1,
              "value": "Switch",
              "heading": "switch"
            },
            {
              "depth": 2,
              "value": "Badge Props",
              "heading": "badge-props"
            }
          ],
          "group": {
            "title": "Components",
            "path": "/components"
          }
        },
        "title": "Switch 开关"
      },
      {
        "path": "/components/tab-bar",
        "component": require('../../components/TabBar/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/TabBar/index.md",
          "updatedTime": 1594368321073,
          "title": "TabBar 底部导航栏",
          "slugs": [
            {
              "depth": 1,
              "value": "TabBar",
              "heading": "tabbar"
            },
            {
              "depth": 2,
              "value": "TabBar Props",
              "heading": "tabbar-props"
            },
            {
              "depth": 2,
              "value": "TabBar.Item Props",
              "heading": "tabbaritem-props"
            }
          ],
          "group": {
            "title": "Components",
            "path": "/components"
          }
        },
        "title": "TabBar 底部导航栏"
      },
      {
        "path": "/components/tabs",
        "component": require('../../components/Tabs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/components/Tabs/index.md",
          "updatedTime": 1594372780613,
          "title": "Tabs 选项卡",
          "slugs": [
            {
              "depth": 1,
              "value": "Tabs",
              "heading": "tabs"
            },
            {
              "depth": 2,
              "value": "Tabs Props",
              "heading": "tabs-props"
            },
            {
              "depth": 2,
              "value": "TabPane Props",
              "heading": "tabpane-props"
            }
          ],
          "group": {
            "title": "Components",
            "path": "/components"
          }
        },
        "title": "Tabs 选项卡"
      },
      {
        "path": "/components",
        "meta": {},
        "exact": true,
        "redirect": "/components/accordion"
      }
    ],
    "title": "NESS-UI"
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
