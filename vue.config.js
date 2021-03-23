module.exports = {
    // 基本路径,线上服务器文件储存地址，公共资源访问路径
    publicPath: '/',
    // 输出文件目录,npm run build文件目录
    outputDir: 'dist',
    // 生产环境sourceMap，写成false后，项目体积就会小很多,就不会产生map文件。map用来定位js或者css哪里出错了
    productionSourceMap: true,
    // webpack配置
    configureWebpack: () => {}, //webpack配置
    chainWebpack: () => {},
    // chainWebpack: config => {
    //     config.module
    //         .rule('css')
    //         .test(/\.css$/)
    //         .oneOf('vue')
    //         .resourceQuery(/\?vue/)
    //         .use('px2rem')
    //         .loader('px2rem-loader')
    //         .options({
    //             remUnit: 192 //代表的是 1rem = ？px  这里假设设计稿是 1920px ，那么这里的比例就是 1/10
    //         })
    //         .end()
    // }, //webpack 链式配置
    // css相关配置
    css: {
        // 启用 css modules
        requireModuleExtension: false,
        // 是否使用css分离操作
        extract: true,
        //开启css source maps，用来定位出错
        sourceMap: false,
        // css预设器配置，less scss等
        loaderOptions: {},
    },
    // 项目启动配置；也可以配置代理
    // 服务器间访问不存在跨域问题，只有客户端才有跨域问题
    devServer: {
        // 项目启用域名，端口
        host: '0.0.0.0',
        port: 4333,
        open: true, // 配置，启动项目，就自动打开浏览器
        // proxy: {}, // 产生跨域问题，配置代理，webpack dev server 在本地启动服务器，转发请求，因而使服务器间通信，而不是客户端间通信，不存在跨域问题
    },
    pluginOptions: {
        // ...
    }
}