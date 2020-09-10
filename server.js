const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

const db = require('./src/database')
const {TodoListShema, WeponShema} = require('./src/model')
const {find, add} = require('./src/control')

// const todo1 = new TodoListShema({
//   title: '納豆を買いに行く',
//   descript: '納豆があと１パックのため',
//   addDate: new Date(),
//   limitDate: 'today'
//  })

 const data1 = new TodoListShema()
 data1.title = '卵を買う'

add(data1)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/', express.static('public'))

app.post('/', (req, res) => {
  console.log(req.body.name);
  res.send(req.body.name)
})


app.listen(port, () => {
  console.log(`todo project listening on port ${port}!`)
})
