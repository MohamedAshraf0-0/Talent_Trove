<template>
  <div class="full-bod">
    <HeaderComponent/>
    <div v-if="isAuth">
    </div>
    <div v-else class="not-auth">
        <h1>Please login first</h1>
    </div>
    <FooterComponent/>
  </div>
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
    components:{
        HeaderComponent, FooterComponent
    },
    data(){
    return {
      isAuth : localStorage.getItem('token') !== null,
    }
  },
  mounted(){
    document.title = "Portfolios";
  },
}
</script>
<style >
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
  .full-bod{
    height: 100%;
  }
</style>