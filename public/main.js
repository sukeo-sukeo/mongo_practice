const TopPage = {
  template: '#top-page',
  data: function() {
    return {
      msg: 'ToDo',
      isActives: [],
      todos: []
    }
  },
  methods: {
    updBtn: function(key) {
      this.$set(this.isActives, key, this.isActives[key] = !this.isActives[key])
      console.log(this.isActives);
    }
  },
  created: function() {
    axios.get('http://localhost:3000/getdata')
    .then(res => {
      console.log(res);
      this.todos = res.data
      for (let i = 0; i < res.data.length; i++) {
        this.isActives.push( Boolean(false) )
      }
      console.log(this.isActives);
    })
    .catch(err => {
      console.log(err);
    })
  }
}

// const Sample2 = {
//   template: '<p>sample2です</p>',
//   data: function() {
//     return {
//       msg: 'hello'
//     }
//   }
// }

console.log();
new Vue({
  el: '#app',
  components: {
    'top-page': TopPage
  }
})
// new Vue({
//   el: '#app2',
//   components: {
//     'sample2': Sample2
//   }
// })
