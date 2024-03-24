<template>
    <div class="container">
        <div class="banner">
            <h2>Una inmobilaria que esta siempre en tu lugar favorito</h2>
        </div>
    </div>

</template>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

.banner{
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
     ), url("./../assets/images/banner.jpg");
    height: 90vh;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;

}

h2{
    color: #fff;
    font-family: "Permanent Marker", cursive;
    font-weight: 200;

    font-size: 5rem;
}
</style>