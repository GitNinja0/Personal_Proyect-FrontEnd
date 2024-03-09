<script setup>
import Header from '@/components/General/Header.vue';
import Footer from '@/components/General/Footer.vue';
import CardRent from '@/components/CardRent.vue';
</script>
<template>
    <header>
        <Header />
    </header>
    <main>
        <h2>Alquileres</h2>
        <CardRent />
    </main>
    <footer>
        <Footer />
    </footer>
</template>
<style scoped lang="scss">
main{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>