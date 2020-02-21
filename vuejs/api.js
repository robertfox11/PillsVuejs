Vue.component('common-list',{
  props : ['lists'],
  template : `<ul class="list-group">
  <li v-for="item in lists" class="list-group-item">
      {{item.title}}
  </li>
</ul>`
});
var urlPhotos = "http://jsonplaceholder.typicode.com/photos?_limit=5&_page=1";
new Vue({
  el: '#main',
  created: function() {
      this.getPhotos()
  },
  data:{
      photos: []
  },
  methods: {
      getPhotos: function(){
          axios.get(urlPhotos).then(res =>{
              this.photos = res.data
          });
      }
  },

})
