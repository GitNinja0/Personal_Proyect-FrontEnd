<script setup>
const props = defineProps({
    sale: {
        type: Object,
        required: true,
    },
});
console.log('url de la imagen ', props.sale.image);
</script>
<template>
    <div class="card">
        <picture>
            <img class="image" src="../assets/images/imagen_prueba.jpeg" alt="imagen de casa de prueba">
        </picture>
        <div class="content">
            <h3 class="title">{{ sale.title }}</h3>
            <p class="price">{{ sale.price }} €</p>
            <div class="general_content">
                <div class="content_details">
                    <p>{{ sale.rooms }} hab</p>
                    <p>{{ sale.bathrooms }} baños</p>
                    <p>{{ sale.direction}}</p>
                </div>
                <div class="content_description">
                    <p>Descripcion</p> 
                    <p>{{ sale.shortDescription }}</p>
                </div>
            </div>
        </div>
        
    </div>
</template>
<style scoped lang="scss">
.card{
        display: grid;
        grid-template-columns: 1fr 1fr;
        border: #000 solid 1px;
        width: 95%;
        margin: 2rem 0;
        border-radius: 10px;
    }   
    picture{
        display: flex;
        align-items: center;
        justify-content: center;
        .image{
            width: 90%;
            height: 90%;
        }
    }
    .content{
        display: flex;
        flex-direction: column;

        .general_content{
            .content_details{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                column-gap: 1rem;
            }
            
            
        }
    }
</style>