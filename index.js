var express = require('express')
var mongoose = require('mongoose')
var path = require('path')
var bodyParser = require('body-parser')
var indexRouter = require('./routes/indexRouter')
var editRouter = require('./routes/editRouter')

var app = express()

//使用 body-parser 解析POST请求
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// 中间件 打印所有请求到控制台
app.use((req, res, next) => {
    console.log(req.method, req.url)
    next()
})

// 使用静态目录
app.use(express.static(path.join(__dirname, 'public')));

// 设置模板路径
app.set('views', path.join(__dirname, 'views'));
// 是指模板引擎
app.set('view engine', 'ejs');

// 首页路由
app.use('/', indexRouter)

// 编辑路由
app.use('/', editRouter)


app.listen(8080, () => {
    console.log(`Server started on port 8080`);
});