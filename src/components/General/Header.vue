<script>
export default {
    name: 'Header'
}
</script>
<template>
    <header>
        <h1 class="h1_header">Inmobiliaria Inmóvil</h1>
        <nav class="nav">
            <router-link to="/">Inicio</router-link>
            <router-link to="/rent">Alquileres</router-link>
            <router-link to="/sale">Ventas</router-link>
            
        </nav>
    </header>
</template>
<style scoped lang="scss">
header{
    background-color: rgb(0, 0, 0);
    color: #fff;
    display: flex;    
    justify-content: space-around;
    align-items: center;
    // position: fixed;
    // width: 100%;

    .nav{
        display: flex;
        gap: 1rem;
        align-items: center;
    }
}

a{
    color: #fff;
    text-decoration: none;
}
a:hover{
    color: bisque;
}

</style>