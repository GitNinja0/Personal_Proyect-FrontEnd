<script setup>
import Header from '@/components/General/Header.vue';
import Footer from '@/components/General/Footer.vue';
import CardSale from '@/components/CardSale.vue';
</script>
<template>
    <header>
        <Header />
    </header>
    <main>
        <h2>Ventas</h2>
        <CardSale />
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