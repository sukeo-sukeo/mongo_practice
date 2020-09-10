const TopPage = {
  template: '#top-page',
  data: function() {
    return {
      msg: 'やることを登録'
    }
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
