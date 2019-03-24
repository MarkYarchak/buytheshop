<template>
  <div id="app">
    <MainHeader />
    <AllPage />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader';
import AllPage from './components/AllPage';

export default {
  name: 'Vue',
  components: {
    MainHeader,
    AllPage,
  },

};
</script>

<style>

</style>
