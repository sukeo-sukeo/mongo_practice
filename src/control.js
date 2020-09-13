const db = require('./database')

//検索
const find = (name, query, cb) => {
  db.db.collection(name, (err, collection) => {
    collection.find(query).toArray(cb)
  })
}

//追加
const add = (name, data) => {
  name.insertMany(data)
  .then((item) => console.log(`「${item[0].title}」を追加しました！`))
}

//削除
const eras = (name, id) => {
  name.deleteOne({_id: id})
  .then((item) => console.log(`「${id}」を削除しました！`))
}

//更新
const update = (name, body, id) => {
  name.updateMany(
    {_id: id},
    {
      title: body.title,
      descript: body.descript,
      addDate: new Date(),
      limitDate: body.limit
    }
  )
  .then((item) => console.log(`「${body.title}」に更新しました！`))
}

module.exports = {find, add, eras, update}
