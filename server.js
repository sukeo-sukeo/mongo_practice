const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

const db = require('./src/database')
const Todo = require('./src/model')
const {find, add, eras, update} = require('./src/control')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/', express.static('public'))

app.post('/', (req, res) => {
  const todoData = new Todo({
    title: req.body.title,
    descript: req.body.descript,
    addDate: new Date(),
    limitDate: req.body.limit
  })
  add(Todo, todoData)
  res.redirect('/')
})

app.post('/delete/:id', (req, res) => {
  eras(Todo, req.params.id)
  res.redirect('/')
})

app.post('/update/:id', (req, res) => {
  update(Todo, req.body, req.params.id)
  res.redirect('/')
})

app.get('/getdata', (req, res) => {
  console.log('getきた');
  find('todolists', '', (err, docs) => {
    console.log(docs);
    res.send(docs)
  })
})


app.listen(port, () => {
  console.log(`todo project listening on port ${port}!`)
})
