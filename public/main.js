const TopPage = {
  template: '#top-page',
  data: function() {
    return {
      msg: 'ToDo',
      msg2: 'やることを登録してください',
      baseURL: 'http://localhost:3000',
      isActives: [],
      calendar: false,
      updateCalendar: false,
      dialog: false,
      drawer: false,
      todos: [],
      todosRev: [],
      todoData: {
        title: '',
        descript: '',
        limit: ''
      },
      updateTodoData: {
        title: '',
        descript: '',
        limit: ''
      }
    }
  },
  methods: {
    getTodoData: function() {
      axios.get(this.baseURL + '/getdata')
      .then(res => {
        this.todos = res.data.slice().reverse()
        this.todoData = {
          title: '',
          descript: '',
          limit: ''
        }
        this.updateTodoData = {
          title: '',
          descript: '',
          limit: ''
        }
      })
      .catch(err => {
        console.log(err);
      })
    },
    updBtn: function(idx) {
      //$set(対象、場所、プロパティ)
      this.$set(this.isActives, idx, this.isActives[idx] = !this.isActives[idx])
    },
    addTodo: function() {
      axios.post(this.baseURL + '/', this.todoData)
      .then(res => {
        this.msg2 = `todoを追加しました！`
        this.getTodoData()
      })
      .catch(err => {
        console.log(err);
      })
    },
    deleteTodo: function(id) {
      axios.post(this.baseURL + '/delete' + `/${id}`)
      .then(res => {
        this.msg2 = `todoを削除しました！`
        this.getTodoData()
      })
      .catch(err => {
        console.log(err);
      })
    },
    updateTodo: function(id, idx) {
      this.updateTodoSpaceCheck(idx)
      axios.post(this.baseURL + '/update' + `/${id}`, this.updateTodoData)
      .then(res => {
        this.msg2 = `todoを更新しました！`
        this.getTodoData()
        this.updBtn(idx)
      })
      .catch(err => {
        console.log(err);
      })
    },
    updateTodoSpaceCheck: function(idx) {
      if (!this.updateTodoData.title) {this.updateTodoData.title = this.todos[idx].title}
      if (!this.updateTodoData.descript) {this.updateTodoData.descript = this.todos[idx].descript}
      if (!this.updateTodoData.limit) {this.updateTodoData.limit = this.todos[idx].limitDate}
    }
  },
  created: function() {
    this.getTodoData()
  }
}

new Vue({
  el: '#app',
  components: {
    'top-page': TopPage
  },
  vuetify: new Vuetify()
})
