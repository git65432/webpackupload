const path=require("path")
const HtmlWebPackPlugin=require("html-webpack-plugin")
const htmlPlugin=new HtmlWebPackPlugin({
  template:path.join(__dirname,'./src/index.html'),
  filenname:'index.html'
})
// 向外暴露一个打包的配置对象；因为webpack是基于node构建的；所以webpack支持所有node   API和语法
module.exports={
  mode:'development',//production,development
  //在webpack4.x中，有一个很大的特性，就是约定大于配置  ，约定，默认的打包入口路径是src->index.js
  plugins:[
    htmlPlugin
  ]
}