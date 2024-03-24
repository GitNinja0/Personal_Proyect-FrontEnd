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
        let image = ref('')

        onMounted(async ()=> {
            const id = route.params.id;

            try {
                const response = await axios.get(`http://localhost:8080/api/v1/rents/${id}`, { cache: false });

                content.value = response.data

                image.value = response.data.image
                console.log(image.value)

                console.log(response.data);
                console.log(response.data.image);
            } catch (error) {
                console.error("error: ",error)
            }
        })
        return { content, image }
    }
}
</script>
<template>
        <Header />

        <div v-if="content && image" class="content">
            <picture>
                <div class="image" :style="{ 'background-image': 'url(' + image + ')' }"></div>
            </picture>
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

        <div class="description">
            <p>{{ content.description }}</p>
        </div>

    </div>
    <div class="contact">
        <h3>Contacta con el agente</h3>
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
            margin-top: 2rem;
            width: 100rem;
            height: 50rem;
            background-position: center;
            background-size: cover;
        }
}
.description{
    width: 90%;
}
h3{
    text-align: center;
}
</style>