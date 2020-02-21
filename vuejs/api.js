var urlApi = "https://jsonplaceholder.typicode.com/photos";
new Vue({
  el: "#main",
  created: function() {
    this.getUser();
  },
  data: {
    list: []
  },
  methods: {
    getUser: function() {
      axios.get(urlApi).then(res => {
        this.list =res.data
      })
    }
  }
});
