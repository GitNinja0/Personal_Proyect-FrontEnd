<script>
import { useRoute } from 'vue-router';
import {onMounted, ref } from 'vue';
import axios from 'axios';
import Header from '@/components/General/Header.vue';
import Footer from '@/components/General/Footer.vue';
import ContactForm from '@/components/ContactForm.vue';

export default {
    components: {Header, Footer, ContactForm},
    setup() {
        const route = useRoute()
        const content = ref(null)

        onMounted(async ()=> {
            const id = route.params.id;

            try {
                const response = await axios.get(`http://localhost:8080/api/v1/rents/${id}`, { cache: false });

                console.log(response)
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

        <div v-if="content" class="content">
            <picture>
                <div class="image" :style="{ 'background-image': 'url(' + content.image + ')' }"></div>
            </picture>

            <p>{{ content.image }}</p>
        <h2 class="title">{{ content.title }}</h2>

        <div class="details_content">    
            <p>{{ content.price }} €/Mes</p>
            <p>{{ content.bathrooms }} Baños</p>
            <p>{{ content.rooms }} Habitaciones</p>
            <p>{{ content.type }}</p>
            <p>{{ content.status }}</p>
        </div>

        <div class="secundary_content">
            <p>{{ content.direction }}</p>
        </div>

        <p>{{ content.description }}</p>

    </div>
    <div class="contact">
        <ContactForm />
    </div>
        <Footer />

</template>
<style lang="scss" scoped>
.content{
    display: flex;
    flex-direction: column;
    align-items: center;

    .details_content{
        display: flex;
        column-gap: 1rem;
        border-bottom: 1px #000 solid;
    }
    .secundary_content{
        border-bottom: 1px #000 solid;
    }
    .image{
            width: 100%;
            height: 100%;
            background-position: center;
            background-size: cover;
        }
}
</style>