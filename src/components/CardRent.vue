<script setup>
import axios from 'axios';

const props = defineProps({
    rent: {
        type: Object,
        required: true,
    },
});

const deleteRent = async (id) => {

    try {
        await axios.delete(`http://localhost:8080/api/v1/rents/${id}`);
        console.log('eliminado')
        location.reload();
    } catch (error) {
        console.error(error)
    }
}
console.log('url de la imagen ', props.rent.image);
</script>
<template>
    <div class="card">
        <picture>
            <div class="image" :style="{ 'background-image': 'url(' + rent.image + ')' }"></div>
        </picture>
        <div class="content">
            <h3 class="title">{{ rent.title }}</h3>
            <p class="price">{{ rent.price }} €/mes</p>
            <div class="general_content">
                <div class="content_details">
                    <p>{{ rent.rooms }} hab</p>
                    <p>{{ rent.bathrooms }} baños</p>
                    <p>{{ rent.direction}}</p>
                </div>
                <div class="content_description">
                    <p>Descripcion</p> 
                    <p>{{ rent.shortDescription }}</p>
                    
                </div>
            </div>
            <div class="buttons">
                <div class="button">
                    <router-link :to="{path: `/detail/${props.rent.id}`}" >Ver Más</router-link>
                </div>
                <div class="button">
                    <router-link :to="{path: `/formPut/${props.rent.id}`}" >Editar</router-link>
                </div>
                <button class="button_delete" @click="deleteRent(rent.id)">Eliminar Propiedad</button>
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
        border-radius: 4px;
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
        width: 90%;
        margin: 2rem;

        .general_content{
            .content_details{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                column-gap: 1rem;
            }
            
            
        }
    }
    .button_delete{
        background-color: rgb(223, 50, 50);
        width: 25rem;
        border: none;
        border-radius: 4px;
        height: 4rem;
        margin-bottom: 2rem;
    }
@media (max-width: 1000px) {
    .card{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }

}

.buttons{
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
}
</style>