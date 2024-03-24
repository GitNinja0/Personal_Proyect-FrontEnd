<script setup>

</script>
<template>
    <div class="card">
        <img src="../assets/images/bannerPostCard.jpeg" alt="imagen banner">
        <h3>¿Deseas subir una propiedad?</h3>
        <p>Dale Click en nuestro enlace y publica tu propiedad</p>
        <div class="button">
            <router-link to="/formPost">Subir Propiedad</router-link>
        </div>
    </div>
    </template>
<style lang="scss" scoped>
.card{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
    background-color: #000814;
    color: #fff;
    width: 40rem;
    border-radius: 10px;

    p{
        width: 90%;
        text-align: center;
    }
    img{
        margin-top: 2rem;
        border-radius: 10px;
    }

    .button{
        background-color: #FFD60A;
        width: 20rem;
        height: 4rem;   
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        margin-bottom: 2rem;

        a{
            color: #000;
            text-decoration: none;
        }

    }
    .button:hover{
        background-color: #003566;
        color: #fff;
    }
}
</style>