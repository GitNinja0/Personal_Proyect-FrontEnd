<script setup>

</script>
<template>
    <div class="card">
        <img src="../assets/images/imagencasa.jpg" alt="imagen banner">

        <div class="elements">
            <h3>¿Deseas subir una propiedad?</h3>
            <p>Dale Click en nuestro enlace y publica tu propiedad</p>
            <div class="button">
                <router-link to="/formPost">Subir Propiedad</router-link>
            </div>
        </div>
    </div>
    </template>
<style lang="scss" scoped>
.card{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2rem;
    margin: 2rem 0;
    background-color: #000814;
    color: #fff;
    width: 100%;
    justify-items: center;
    align-items: center;

    .elements{
        margin: 2rem;
    }
    p{
        width: 90%;
    }
    img{
        margin-top: 4rem 0;
        border-radius: 4px;
        height: 90%;
        width: 90%;
    }

    .button{
        background-color: #FFD60A;
        width: 20rem;
        height: 4rem;   
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
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

@media (max-width: 863px) {
    .card{
        display: flex;
        flex-direction: column;
    }
}
</style>