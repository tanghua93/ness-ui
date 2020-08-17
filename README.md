<p align="center"><img src="https://github.com/tanghua93/upload-img-files/blob/master/logo.png" width="150" height="150"/></p>
<p align="center">NESS-UI</p>
<p align="center">基于React开发的移动端UI组件库<a href="https://tanghua93.github.io/ness-ui-doc" target="_blank">Live Demo>></a></p>


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
## License

<a href="https://github.com/tanghua93/ness-ui/blob/master/LICENSE" target="_blank">babel-plugin-component</a>
