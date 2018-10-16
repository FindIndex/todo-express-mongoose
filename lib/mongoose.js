var mongoose = require('mongoose')
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/todo-express-mongoose', (error) => {
    if (error) {
        console.log('数据库连接失败')
    } else {
        console.log('数据库连接成功')
    }
})


var todoSchema = new Schema({
    content: String,
    isFinished: {
        type: Boolean,
        default: false
    }
})

exports.Todo = mongoose.model('Todo', todoSchema)