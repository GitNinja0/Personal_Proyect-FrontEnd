<script setup>
const props = defineProps({
    sale: {
        type: Object,
        required: true,
    },
});
console.log('url de la imagen ', props.sale.image);
console.log(props.sale.id)
</script>
<template>
    <div class="card">
        <picture>
            <div class="image" :style="{ 'background-image': 'url(' + sale.image + ')' }"></div>
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
            <div class="button">
                <router-link :to="{path: `/details/${props.sale.id}`}" >Ver Más</router-link>
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
    .button{
        background-color: #49f19d;
        width: 20%;
        height: 4rem;
        margin-bottom: 3rem;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        a{
            color: #000;
            text-decoration: none;
    
        }  
    }

    .button:hover{
        background-color: #1d5a3b;

        a{
            color: #fff;
        }
    }
    picture{
        display: flex;
        align-items: center;
        justify-content: center;
        .image{
            width: 90%;
            height: 90%;
            background-position: center;
            background-size: cover;
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