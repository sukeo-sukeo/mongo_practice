const mongoose = require('mongoose')

const TodoListShema = mongoose.model('TodoList', {
  title:  String,
  descript: String,
  addDate: String,
  limitDate: String
 })

const WeponShema = mongoose.model('Wepons', {
  name:  String,
  descript: String,
  atk: Number,
  price: Number,
  addDate: String,
 })

module.exports = {TodoListShema, WeponShema}
