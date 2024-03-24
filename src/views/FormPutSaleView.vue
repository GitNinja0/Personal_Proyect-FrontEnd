<script>
import axios from 'axios';
import Header from '@/components/General/Header.vue';
import Footer from '@/components/General/Footer.vue';
export default {
    components: {Header, Footer},
 data() {
    return {
      sale: {
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
    };
 },
 async created() {
    const id = this.$route.params.id; 
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/sale/${id}`, { cache: false });
      this.sale = response.data; 
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
 },
 methods: {
    async updateSale() {
      try {
        const response = await axios.put(`http://localhost:8080/api/v1/sale/${this.sale.id}`, this.sale);
        console.log('Propiedad actualizada:', response.data);
      } catch (error) {
        console.error('Error al actualizar la propiedad:', error);
      }
    }
 }
};
</script>
<template>
<Header />
    <div class="container" v-if="sale">
        <form @submit.prevent=updateSale>
            <div class="elements">
                <label for="title">Titulo</label>
                <input type="text" v-model="sale.title" required>
            </div>
            <div class="elements">
                <label for="description">Descripcion</label>
                <textarea type="text" v-model="sale.description" required></textarea>
            </div>
            <div class="elements">
                <label for="price">Precio</label>
                <input type="number" v-model="sale.price" required>
            </div>
            <div class="elements">
                <label for="image">Url de la imagen</label>
                <input type="text" v-model="sale.image" required>
            </div>
            <div class="elements">
                <label for="direction">Direccion</label>
                <input type="text" v-model="sale.direction" required>
            </div>
            <div class="elements">
                <label for="type">Tipo de propiedad</label>
                <input type="text" v-model="sale.type" required>
            </div>
            <div class="elements">
                <label for="rooms">Número de habitaciones</label>
                <input type="number" v-model="sale.rooms" required>
            </div>
            <div class="elements">
                <label for="bathrooms">Número de baños</label>
                <input type="number" v-model="sale.bathrooms" required>
            </div>
            <div class="elements">
                <label for="shortDescription">Escriba una pequeña descripcion</label>
                <textarea name="shortDescription" id="shortDescription" v-model="sale.shortDescription" required></textarea>
            </div>
            <div class="elements">
                <label for="status">Estado (Libre u Ocupado)</label>
                <input type="text" v-model="sale.status" required>
            </div>
            <input class="button" type="submit" value="Enviar">
        </form>
    </div>
<Footer />
</template>
<style lang="scss" scoped>
 form {
    background-color: #f8f8f8;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 0 auto;
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
      width: 100%; 
      min-height: 100px; 
      padding: 10px;
      border: 1px solid #ccc; 
      border-radius: 4px; 
      font-size: 16px; 
      box-sizing: border-box; 
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
