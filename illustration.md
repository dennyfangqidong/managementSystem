# 结构 
node_modules - 放置的是安装好的依赖，包括echarts就是安装在这里的
public - 后续的一些自开发/第三方公共组件库
src/assets - 一些需要的支持资源文件
components - 自开发组件/组件组
images - 图片文件
router - 路由配置都放在这里；自己开发的组件如果被页面引用，则也需要在router内文件中import。// 大部分路由配置在router.js或者 router/index.js；但是导航守卫在main.js配置

store - 暂时没用到
views - 页面，引用的组件如果在main.js公共注册，就不需要在views内的页面中再次注册了
App.vue - 应该是可以不要的
main.js - 公共注册的组件放在这里
package.json - 看到所有的依赖
webpack2 - build配置webpack文件（webpack.base.conf.js/webpack.dev.conf.js）；config配置全局文件(dev.env.js/prod.env.js);入口index.html在最外层，cli3在public；static文件夹不见了
vue-cli3 - 继承了大部分微博pack配置，而不需要进行复杂的webpack配置
vue.config.js - 在最外层建立vue.config.js，配置全局变量

# 步骤
## 组件
对于组件，每开发完成组件，需要export default,但是可以不用命名，只在引用页面import即可。组件使用的名称使在import后的那个名称
App.vue统一的单页面，即进入入口
## js库
js库，需要在main.js注册，或者在引用页面import；注册后，直接在html部分引用组件即可
## 页面
对于页面，需要注意所用的组件是否全局注册或者页面内局部注册；并要注意页面需要添加到路由才可实现跳转
## 路由
大部分路由配置在router.js或者 router/index.js；但是导航守卫在main.js配置


# 页面说明
## 登陆页面
## vuex页面
store/index.js是一个vuex的入口文件，只是引用vue和vuex并实例化。
其余的vuex操作在store文件夹下的其他文件完成

# 页面规范
## 项目文件命名
首字母大写

# 其他知识
## vue 父子组件传值
prop
parent/children
$ref

