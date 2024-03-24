<script setup>
import Header from '@/components/General/Header.vue';
import Footer from '@/components/General/Footer.vue';
import CardSale from '@/components/CardSale.vue';
import { useSaleStore } from '@/stores/CallStore';

const store = useSaleStore();
store.getSales();
console.log(store.getSales());

</script>
<template>
    <header>
        <Header />
    </header>
    <main>
        <h2>Ventas</h2>

        <div id="cardSale_container">
            <div class="container_card" v-for="sale in store.sales">
                <CardSale :sale="sale"  />
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

  #cardSale_container{
    margin: 2rem;

    .container_card{
        display: flex;
        justify-content: center;
    }
  }
}
</style>