<script setup>
import Header from '@/components/General/Header.vue';
import Footer from '@/components/General/Footer.vue';
import banner from '@/components/banner.vue';
import bannerPost from '@/components/bannerPost.vue'
</script>

<template>
  <header>
    <Header />
    <banner />
  </header>
  <main>
    <bannerPost />
  </main>
  <footer>
    <Footer />
  </footer>
</template>
<style scoped lang="scss">
main{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
