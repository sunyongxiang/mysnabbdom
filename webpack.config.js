var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports  ={
    entry:'./src/index.js',
    output:{
        publicPath:'/invoice',
        filename:'app.js'
    },
    devtool:"source-map",
    devServer:{
        port:9090
    },
    plugins:[
        new HtmlWebpackPlugin({
            tempate:'./index.html'
        })
    ]
}