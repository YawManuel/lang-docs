const firstvue = new Vue({
    el: '#divhead',  // creating an id to assign the new instance to
    data: {   // expressing data in Vue
        message: 'Hello VUE!!!',
        website: 'https://www.ehadzah.com',
        dnavbarTag: '<div><span>First</span> <span>Second</span> </div>'
    },
    methods: {   // defining methods in Vue
        morning: function gmorning() {
            return 'gud morning my neighbor!!'
        }
    }
});

const secondvue = new Vue({
    el: '#vimvues',
    data: { 
        age: 25,
        x: 0,
        y: 0
    },
    methods: {
        add: function () {
            this.age++;
        },
        subtract: function () {
            this.age--;
        },

        updateXY: function (event) {  // events listeners
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});

const thirdvue = new Vue({   // keystroke events
    el: 'dkeystroke',
    methods: {
        hitkey1: function(){
            alert('good vueman');
        },
        hitkey2: function(){
            alert(concat('good vueman', Math.log2));
        }
    }
});


// single file vue
<template>
<div>
<app-header></app-header>
<app-theblogcontent v-bind:blog="blog"></app-theblogcontent>
<app-footer></app-footer>
</div>
</template>

<script>
import Header from './components/Header.vue';
import Blog from './components/Theblogcontent.vue';
import Footer from './components/Footer.vue';

export default {
 components: {
   'app-header': Header,
   'app-theblogcontent': Blog,
   'app-footer': Footer
 },
 data(){
   return{
      blog:  [
              {name: 'Ryu', speciality: 'Vue Components', show: false},
              {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
              {name: 'Hitoshi', speciality: 'Click Events', show: false},
              {name: 'Tango', speciality: 'Conditionals', show: false},
              {name: 'Kami', speciality: 'Webpack', show: false},
              {name: 'Yoshi', speciality: 'Data Diggin', show: false}
          ]   
   }
 }
  
}
</script>

<style scoped>
app-header {
 margin: 20vh;
}

</style>