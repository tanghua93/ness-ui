
## NESS-UI

基于React开发的移动端UI组件库 📦

## 技术栈及工具

🔥 Typescript with React Hooks

⛑️ 使用Jest + Enzyme测试工具进行组件单元测试

📃 使用dumi进行文档编写

## 演示地址

<a href="https://tanghua93.github.io/ness-ui-doc" target="_blank">点击查看</a>

## 安装
```js
npm install ness-ui
```

## 引入
```js
    import Button from 'ness-ui'
    import 'ness-ui/lib/components/styles/Button.css'
```
或者
```js
    import { Button } from 'ness-ui'
    import 'ness-ui/lib/components/styles/Button.css'
```
如需要配置按需加载，可安装<a href="https://www.npmjs.com/package/babel-plugin-component" target="_blank">babel-plugin-component</a>来实现组件和样式的按需加载，创建一个`.babelrc.js`文件，添加如下配置：
```js
module.exports = {
    "plugins": [
        ["component", {
            "libDir": "lib/components",
            "camel2Dash": false,
            "root": "index",
            "libraryName": "ness-ui",
            "styleLibrary": {
                "name": "styles"
            }
        }, "ness-ui"]
    ]
};
```
配置成功后，即可像下面这样引入组件即可：

``` js
    import { Button } from 'ness-ui'
```


