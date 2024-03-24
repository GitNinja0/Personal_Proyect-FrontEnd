<script>
import axios from 'axios';

export default {
 data() {
    return {
        property:{
            title: '',
            description: '',
            price: Number,
            image: '',
            direction: '',
            type: '',
            rooms: Number,
            bathrooms: Number,
            shortDescription: '',
            status: ''
        }
    }
 },   
 methods: {
    async submitForm(){
        try {
            const response = await axios.post('http://localhost:8080/api/v1/rents', this.property);
            console.log(response.data)
        } catch (error) {
            console.error(error)
        }
    }
 }
}
</script>
<template>
    <form @submit.prevent=submitForm>
        <div>
            <label for="title">Titulo</label>
            <input type="text" v-model="property.title" required>
        </div>
        <div>
            <label for="description">Descripcion</label>
            <input type="text" v-model="property.description" required>
        </div>
        <div>
            <label for="price">Precio</label>
            <input type="number" v-model="property.price" required>
        </div>
        <div>
            <label for="image">Url de la imagen</label>
            <input type="text" v-model="property.image" required>
        </div>
        <div>
            <label for="direction">Direccion</label>
            <input type="text" v-model="property.direction" required>
        </div>
        <div>
            <label for="type">Tipo de propiedad</label>
            <input type="text" v-model="property.type" required>
        </div>
        <div>
            <label for="rooms">Número de habitaciones</label>
            <input type="number" v-model="property.rooms" required>
        </div>
        <div>
            <label for="bathrooms">Número de baños</label>
            <input type="number" v-model="property.bathrooms" required>
        </div>
        <div>
            <label for="shortDescription">Escriba una pequeña descripcion</label>
            <textarea name="shortDescription" id="shortDescription" cols="90" rows="10" v-model="property.shortDescription" required></textarea>
        </div>
        <div>
            <label for="status">Estado (Libre u Ocupado)</label>
            <input type="text" v-model="property.status" required>
        </div>
        <input class="button" type="submit" value="Enviar">
    </form>
</template>
<style lang="scss" scoped>
form{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        input{
            width: 30rem;
        }
        
    }
    .button{
        background-color: #FFC300;
        border: none;
        border-radius: 10px;
        height: 4rem;
        width: 20rem;
        margin-bottom: 2rem;
    }
    .button:hover{
        background-color: #001D3D;
        color: #fff;
    }

}
</style>