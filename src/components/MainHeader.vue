<template>
  <div id="main-header">
    <div class="cool">
      BuyTheShop
    </div>
    <div
      class="main-header__menu-button"
      @click="menuButton = !menuButton"
    >
      <div class="main-header__button-box">
        <i
          v-if="!menuButton"
          class="fas fa-chevron-circle-down animated flipInX"
        ></i>
        <i
          v-if="menuButton"
          class="fas fa-times-circle animated flipInX"
        ></i>
      </div>
    </div>
    <div
      v-if="menuButton"
      class="main-header__menu-box">
      <div
        id="one-item__first-item"
        class="menu-box__one-item animated fadeInDown">
        Your first item
      </div>
      <div
        id="one-item__second-item"
        class="menu-box__one-item animated fadeInDown">
        Your second item
      </div>
      <div
        id="one-item__third-item"
        class="menu-box__one-item animated fadeInDown">
        Your third item
      </div>
      <div
        id="one-item__four-item"
        class="menu-box__one-item animated fadeInDown">
        Your four item
      </div>
      <div
        id="one-item__five-item"
        class="menu-box__one-item animated fadeInDown">
        Your five item
      </div>
      <div
        id="one-item__six-item"
        class="menu-box__one-item animated fadeInDown">
        Your six item
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
  data() {
    return {
      menuButton: false,
    };
  },
};
</script>

<style
    lang="stylus"
    scoped>
  #main-header
    text-align center
    transform scaleX(45deg) rotate(45deg)
    background linear-gradient(to bottom, #537895, #09203F)
    color white
    font-weight bold
    font-size 25px
    padding 15px 0
    position fixed
    width 100%
  .main-header__menu-button
    display flex
    justify-content center
  .main-header__button-box
    width 35px
    height 35px
    display flex
    justify-content center
    align-items center
    border-radius 50%
    background-color: inherit
  .main-header__menu-box
    border-radius 10%
    display flex
    justify-content center
    flex-direction column
  .menu-box__one-item
    text-align center
    color white
    background-color: inherit
    padding 15px 0
    box-shadow 0.5px 0.5px 0.5px 0.5px #000000
    user-select none
    -moz-user-select none
    -ms-user-select none
    -webkit-user-select none
  /*.fadeInDown:hover*/
    /*opacity 0.6*/
  #one-item__first-item
    animation-duration: 0.1s;
  #one-item__second-item
    animation-duration: 0.2s;
  #one-item__third-item
    animation-duration: 0.3s;
  #one-item__four-item
    animation-duration: 0.4s;
  #one-item__five-item
    animation-duration: 0.5s;
  #one-item__five-item
    animation-duration: 0.6s;
  #one-item__six-item
    animation-duration: 0.7s;
  .cool
    font-size 40px
  .fa-chevron-circle-down
    transition 0.8s
  .fa-times-circle
    transition 0.8s
</style>
