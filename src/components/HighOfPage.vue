<template>
  <div id="high-of-page">
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="place_search-box">
      <div class="search-box">
        <input
          id="search-text__input"
          v-model="searchText"
        >
        <label
          for="search-text__input"
          class="search-box__search-button"
          @click="searchText ? goSearch : false"
        >
          <i
            style="color: #00F2FE"
            class="fas fa-search" />
        </label>
      </div>
    </div>
    <div class="high-of-page__title">
      <div
        class="title__best-items">
        <div
          v-for="(item, key) in bestItems"
          :key="key"
          :style="{'backgroundColor': item.styleColor}"
          class="best-items__one-item"
        >
          <!--<div @click="moveOneOfItem($event, key)">-->
          <span class="one-item__text">{{ item.name }}</span>
          <!--</div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'HihOfPage',
  data() {
    return {
      searchText: '',
    };
  },
  // created() {
  //   if (confirm('Open this site?')) {
  //     console.log('Site opened! Welcome!');
  //   }
  // },
  computed: {
    ...mapGetters([
      'bestItems',
    ]),
  },
  methods: {
    goSearch() {

    },
    // moveOneOfItem(e, id) {
    //   const ix = e.x + 500;
    //   const iy = e.y + 500;
    //   const coordinats = ix.toString() + iy.toString();
    //   let addedColor = '#';
    //   addedColor += coordinats;
    //   this.bestItems[id].styleColor = addedColor;
    //   if (this.bestItems[id].name === 'It\'s unnecessary!') {
    //     this.bestItems[id].name = 'Tired to switch, dude!';
    //   } else this.bestItems[id].name = 'It\'s unnecessary!';
    // },
  },
};
</script>

<style
  lang="stylus"
  scoped>
  @import url('https://fonts.googleapis.com/css?family=Germania+One');

  #high-of-page
    user-select none
    -moz-user-select none
    -ms-user-select none
    -webkit-user-select none
    // background linear-gradient(to top right, #0078E3, #4C00BE)
    background url("../photoStore/dark-paths.png") white center
  .high-of-page__title
    height 550px
  .title__best-items
    padding 10px
  .best-items__one-item
    text-align center
    padding 8px
    margin-top 8px
    border-radius 35px
    background-color: white
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: blue;
    font-size 25px
    font-family: 'Germania One', cursive;
  .best-items__one-item:active
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: blue;
    background-color blue
    cursor pointer
  .place_search-box
    display flex
    justify-content center
    align-items center
  .search-box
    display flex
    justify-content center
    align-items center
    margin 10px 0 0 0
    border 2px solid yellow
    border-radius 23px 23px
  #search-text__input
    line-height: 29px;
    background: linear-gradient(to bottom, #F83600, #3a1a9f);
    border: none
    border-radius 23px 0 0 23px
    padding 5px
    color #00F2FE
  #search-text__input:focus
    outline none
  .search-box__search-button
    display flex
    justify-content center
    align-items center
    background: linear-gradient(to bottom, #F83600, #3a1a9f);
    border-radius 0 50% 50% 0
    width 39px
    height 39px
  @media (min-width: 740px) {
    #search-text__input:focus {
      /*animation-duration: 3s;*/
      /*animation-delay: 2s;*/
      /*transition 2s*/
      width 400px
    }
    .best-items__one-item:hover {
      -webkit-text-fill-color: white;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: blue;
      background-color blue
      cursor pointer
    }
  }
</style>
