const mongoose = require('mongoose')

const TodoListShema = mongoose.model('TodoList', {
  title:  String,
  descript: String,
  addDate: String,
  limitDate: String
 })

module.exports = TodoListShema
