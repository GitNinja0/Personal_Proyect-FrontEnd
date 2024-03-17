<script setup>
import Header from '@/components/General/Header.vue';
import Footer from '@/components/General/Footer.vue';
import CardRent from '@/components/CardRent.vue';
import { useRentStore } from '@/stores/CallStore';

const store = useRentStore()
store.getRents()

console.log(store.getRents());

</script>
<template>
    <header>
        <Header />
    </header>
    <main>
        <h2>Alquileres</h2>
        <div id="cardRent_container">
            <div v-for="rent in store.rents">
                <CardRent :rent="rent"/>
            </div>
        </div>
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