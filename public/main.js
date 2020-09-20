const TopPage = {
  template: '#top-page',
  data: function() {
    return {
      baseURL: 'http://localhost:3000',
      isActives: [],
      todos: [],
      rating: 3,
      ratingComent: {
        1: 'とりあえずメモ',
        2: 'あとあと役に立つかも',
        3: '思いつき',
        4: '重要',
        5: '命'
      },
      changes: {
        calendar: false,
        updateCalendar: false,
        addTodoDialog: false,
        drawer: false,
      },
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
        console.log(this.todos[0].descript);
      })
      .then(() => {
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
        this.changes.addTodoDialog = false
        this.rating = 3
        this.getTodoData()
      })
      .catch(err => {
        console.log(err);
      })
    },
    deleteTodo: function(id) {
      axios.post(this.baseURL + '/delete' + `/${id}`)
      .then(res => {
        console.log(res);
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
