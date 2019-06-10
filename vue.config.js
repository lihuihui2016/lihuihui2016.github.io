module.exports={
 publicPath:'',  //设置打包的相对路径
  devServer:{
      open:true,
    //  host:'localhost',
      port:8080,
      proxy:{
          "/vue":{
              target:"http://139.196.103.167:1901/",
              changeOrigin:true,
          }
      }
  }
}