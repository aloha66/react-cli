# react cli
🏆 一个通用的react脚手架

## 注意

- 鉴于开发环境的打包速度少于10s，没有通过dll把依赖库分离
- 涉及内容不算多，没有独立配置项，目前只有预设
- 可能是因为目前运行项目不大，开启多进行和多核打包（已注释），打包速度反而下降了
- ci环境不建议开启缓存，避免不必要的问题

## 新建文件规范
```
1. 属于哪个模块,先建立该模块的文件夹，例如是订单order
2. 如果该文件的所属范围是订单首页（首页命名必须是index） 目录结构： order/index.js,导出文件变量：order（api，name等）/Order（页面）
3. 如果是详情页，目录结构：order/detail.js,导出文件变量：orderDetail（api，name等）/OrderDetail（页面）
```

## commit 规范

### 提交格式
必填：类型规则和header
```
feat(影响的范围，可不写): <header>

<body>

<footer>

e.g.
fix: 修复页面不能滚动
```


### 类型规则
```
build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
docs：文档更新
feat：新增功能
merge：分支合并 Merge branch ? of ?
fix：bug 修复
perf：性能, 体验优化
refactor：重构代码(既没有新增功能，也没有修复 bug)
style：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
test：新增测试用例或是更新现有测试
revert：回滚某个更早之前的提交
chore：不属于以上类型的其他类型
```

## 目录结构

```
react-cli/
├─.browserslistrc           * 目标浏览器配置表
├─.eslintrc.js              * eslint配置文件
├─.gitignore                * git忽略文件配置
├─.prettierignore           * prettier忽略文件配置
├─.prettierrc               * prettier配置
├─babel.config.js           * babel配置文件，官方推荐方式
├─CHANGELOG.md              * 项目变更日志，由git commit间接生成
├─commitlint.config.js      * git commit检验规则
├─package.json              * 包管理信息
├─postcss.config.js         * postcss配置文件
├─README.md              
├─src                       
|  ├─App.jsx                * 入口组件
|  ├─index.js               * 入口文件
|  ├─index.scss
|  ├─containers             * 页面容器
|  |     ├─Frame.jsx        * 业务（通用）父组件
|  |     ├─Login.jsx        * 登录
|  |     ├─home             * 主页
|  |     |  ├─index.jsx
|  |     |  └index.scss
|  ├─const                  * 存放常量
|  ├─components             * 公共组件
|  |     ├─test
|  |     |  └index.jsx
|  ├─assets                 * 存放资源
|  |   ├─scss               * 存放scss等预处理器
|  |   ├─img                * 图片等多媒体
|  ├─api                    * api
├─scripts                   * 存放项目需要运行的脚本文件
|    └verifyCommit.js
├─public                    * index模板
|   └index.html
├─dist                      * 打包后的目录
├─config                    * 项目配置
├─build                     * webpack配置
|   ├─utils.js              * webpack配置工具类
|   ├─webpack.config.js     * 公用配置
|   ├─webpack.dev.js        * 开发环境配置
|   ├─webpack.dll.js        * dll打包配置
|   ├─webpack.mpa.js        * 多页应用打包配置
|   ├─webpack.prod.js       * 生产环境配置
|   └─webpack.ssr.js        * ssr打包配置
```

## Todos
- ~~功能注释~~
- ~~区分环境配置~~
- ~~eslint 代码规范~~
- ~~prettier 代码统一格式化~~
- ~~css loader~~
    - ~~css预处理 兼容性问题~~
    - ~~开发环境样式内联到head~~
    - ~~生产环境压缩整合~~
    - ~~sass采用dart-sass~~
- ~~picture loader~~
    - ~~开发环境原图，保证开发打包速率~~
    - ~~生产环境自动压缩~~
- ~~babel-loader把高阶语句转换成es5~~
- ~~处理字体 内联~~
- ~~打包自动生成html内容 压缩~~
- ~~打包显示进度条~~
- ~~显示良好的webpack提示错误~~
- ~~开发环境热加载 局部加载~~
- ~~移除多余的moment依赖~~
- ~~移除wepback运行日志~~
- ~~打包前清空dist~~
- ~~预设包分析工具~~
- ~~开启打包速度日志~~
- ~~提取公共库~~
- ~~规范git commit格式~~
- ~~检验git commit格式~~
- ~~根据commit生成CHANGELOG.md~~
- ~~生产环境引入依赖cdn及es5依赖~~
- ~~代码分割~~
- ~~代码缓存~~
- ~~移除没用到的css 类似tree-shaking~~
- 支持ts
- 配置环境用到的script命令
- 自动修改已占用的端口
- 加入jest
- 加入ci
- 多页应用打包
- ssr打包
- 记录每次打包的时间