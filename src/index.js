

//webpack-dev-server打包好的main.js是托管到了内存中，所以在项目根目录中看不到；
//但是我们可以认为，在项目根目录中，有一个看不到的main.js
function asn1(){
console.log("我是一")
}
function asn2(){
    console.log("我是二")
}
async function add(){
     await asn1()
     await asn2()
}

add()