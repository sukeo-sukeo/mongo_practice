const db = require('./database')

//検索
const find = (name, query, cb) => {
  db.db.collection(name, (err, collection) => {
    collection.find(query).toArray(cb)
  })
}

//追加
const add = (data) => {
  data.save()
  .then((item) => console.log( 'todo [' + item.title + '] を登録しました'))
}

module.exports = {find, add}
