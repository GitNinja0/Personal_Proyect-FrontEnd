<script setup>
import PostRent from '../components/PostRent.vue';
import Header from '@/components/General/Header.vue';
import Footer from '@/components/General/Footer.vue';
import PostSale from '@/components/PostSale.vue';
</script>
<template>
    <Header />
    <main>
        <div>
            <h3>Subir un Alquiler</h3>
            <PostRent />
        </div>
        <div>
            <h3>Subir una Venta</h3>
            <PostSale />
        </div>
    </main>
        <Footer />
</template>
<style lang="scss" scoped>
main{
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    div{
        text-align: center;
    }
}
@media (max-width: 957px) {
    main{
        display: flex;
        flex-direction: column;
    }
}
</style>