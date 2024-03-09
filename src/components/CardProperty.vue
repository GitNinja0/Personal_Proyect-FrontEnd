<template>
    <div class="card">
        <picture>
            <img class="image" src="../assets/images/imagen_prueba.jpeg" alt="imagen de casa de prueba">
        </picture>
        <div class="content">
            <h3 class="title">Titulo de la propiedad</h3>
            <p class="price">300 €/mes</p>
            <div class="general_content">
                <div class="content_details">
                    <p>3 hab</p>
                    <p>3 baños</p>
                    <p>Lugar</p>
                    <p>Planta</p>
                </div>
                <div class="content_description">
                    <p>Descripcion</p> 
                    <p>esta es una pequeña descripcion</p>
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