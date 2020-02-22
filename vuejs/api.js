//create Template component
Vue.component("common-list", {
  props: ["lists"],
  template: `<div class="row">
  <div class="card col-3 m-1 mx-auto" v-for="item in lists">
  <img class="card-img-top" v-bind:src="item.thumbnailUrl">
  <div class="card-body">
    <h5 class="card-title" >{{ item.id}}</h5>
    <p class="card-text">{{ item.title}}</p>
  </div>
  </div>
</div>`
});
const URL = "https://jsonplaceholder.typicode.com/photos?_limit=5&_page=";
new Vue({
  el: "#main",
  created: function() {
    this.getPhotos();
  },
  data: {
    photos: [],
    load: [],
    page: 1
  },
  methods: {
    getPhotos: function() {
      axios.get(URL+this.page++).then(res => {
        this.photos = [...this.photos, ...res.data];
        res.data.forEach(item => {
          var img = new Image();
          img.src = item.url;
          img.onload = () => {
            this.load.push(img.src);
            if (this.load.length == this.photos.length) {
              this.updateScrollEvent();
            }
          };
        });
      });
      
    },
    updateScrollEvent() {
      var updated = false;
      window.onscroll = ev => {
        var userPosition = window.innerHeight + window.scrollY;
        var height = document.body.offsetHeight;
        if (!updated && userPosition >= height) {
          updated = true;
          this.getPhotos();
        }
      };
    }
  }
});
