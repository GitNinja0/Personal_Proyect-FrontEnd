<script>
import { useRoute } from 'vue-router';
import {onMounted, ref } from 'vue';
import axios from 'axios';
import Header from '@/components/General/Header.vue';
import Footer from '@/components/General/Footer.vue';
export default {
    components: {Header, Footer},
    setup() {
        const route = useRoute()
        const content = ref(null)

        onMounted(async ()=> {
            const id = route.params.id;

            try {
                const response = await axios.get(`http://localhost:8080/api/v1/sale/${id}`, { cache: false });

                content.value = response.data
                console.log(response.data);
            } catch (error) {
                console.error("error: ",error)
            }
        })
        return { content }
    }
}

</script>
<template>
        <Header />

    <div v-if="content">
        <p>{{ content.image }}</p>
        <h2 class="title">{{ content.title }}</h2>
        <div class="details_content">    
            <p>{{ content.price }} €/Venta</p>
            <p>{{ content.bathrooms }}</p>
            <p>{{ content.rooms }}</p>
        </div>
        <div class="secuntary_content">
            <p>{{ content.direction }}</p>
            <p>{{ content.type }}</p>
        </div>
        <p>{{ content.description }}</p>

    </div>
        <Footer />

</template>
<style lang="scss" scoped>

</style>