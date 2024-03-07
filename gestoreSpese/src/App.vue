<script>
import {RouterView} from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default{
  components:{Header,Footer}
}
</script>

<template>
  <div class="bg-gray-900">
  <Header />
    <RouterView />
  <Footer />
  </div>
</template>
