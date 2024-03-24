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
            const response = await axios.post('http://localhost:8080/api/v1/sale', this.property);
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
        <div class="elements">
            <label for="title">Titulo</label>
            <input type="text" v-model="property.title" required>
        </div>
        <div class="elements">
            <label for="description">Descripcion</label>
            <textarea type="text" v-model="property.description" required></textarea>
        </div>
        <div class="elements">
            <label for="price">Precio</label>
            <input type="number" v-model="property.price" required>
        </div>
        <div class="elements">
            <label for="image">Url de la imagen</label>
            <input type="text" v-model="property.image" required>
        </div>
        <div class="elements">
            <label for="direction">Direccion</label>
            <input type="text" v-model="property.direction" required>
        </div>
        <div class="elements">
            <label for="type">Tipo de propiedad</label>
            <input type="text" v-model="property.type" required>
        </div>
        <div class="elements">
            <label for="rooms">Número de habitaciones</label>
            <input type="number" v-model="property.rooms" required>
        </div>
        <div class="elements">
            <label for="bathrooms">Número de baños</label>
            <input type="number" v-model="property.bathrooms" required>
        </div>
        <div class="elements">
            <label for="shortDescription">Escriba una pequeña descripcion</label>
            <textarea name="shortDescription" id="shortDescription" v-model="property.shortDescription" required></textarea>
        </div>
        <div class="elements">
            <label for="status">Estado (Libre u Ocupado hasta una fecha-especifique)</label>
            <input type="text" v-model="property.status" required>
        </div>
        <input class="button" type="submit" value="Enviar">
    </form>
</template>
<style lang="scss" scoped>
 form {
    background-color: #f8f8f8;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 2rem auto;
 }

 .elements {
    margin-bottom: 20px;

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    input, textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
    }

    textarea {
      resize: none;
      min-height: 100px; 
    }
 }

 .button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #45a049;
    }
 }
</style>