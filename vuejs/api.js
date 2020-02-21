Vue.component('common-list',{
  props : ['lists'],
  template : ` <div class="row">
  <div class="card col-4 m-1 mx-auto" v-for="item in lists">
    <div class="card-body">
      <h5 class="card-title" >{{ item.id}}</h5>
      <p class="card-text">{{ item.title}}</p>
    </div>
  </div>`
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
