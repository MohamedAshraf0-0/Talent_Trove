<template>
  <Header/>
  <div v-if="isAuth">
  </div>
  <div v-else class="not-auth">
    <h1>Please login first</h1>
  </div>
  <Footer/>
</template>

<script>
import Header from "../components/HeaderComponent.vue";
import Footer from "../components/FooterComponent.vue";
export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
  },
  data(){
    return {
      isAuth : localStorage.getItem('token') !== null,
    }
  },
  mounted(){
    document.title = "Home Page"
  }
}
</script>
<style>
  .not-auth{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .not-auth h1{
    color: rgb(99, 99, 99);
    font-weight: lighter;
    font-size: 50px;
  }
</style>