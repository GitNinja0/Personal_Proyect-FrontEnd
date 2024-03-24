<script>
import emailjs from '@emailjs/browser';

export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm('service_xr15ek8', 'template_p1cgyak', this.$refs.form, {
          publicKey: 'Q8lC4Eql-6IyOUaib',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    },
  },
};
</script>
<template>
    <form ref="form" @submit.prevent="sendEmail">
       <div class="field">
         <label for="name">Nombre</label>
         <input type="text" name="name" id="name" required>
       </div>
       <div class="field">
         <label for="context">Contexto</label>
         <input type="text" name="context" id="context" required>
       </div>
       <div class="field">
         <label for="email">Correo Electronico</label>
         <input type="text" name="email" id="email" required>
       </div>
       <div class="field">
         <label for="phone">Número de Telefono</label>
         <input type="text" name="phone" id="phone" required>
       </div>
       <div class="field">
         <label for="message">Mensaje</label>
         <input type="text" name="message" id="message" required>
       </div>
       <input type="submit" id="button" value="Enviar Correo">
    </form>
</template>
<style lang="scss" scoped>
form{
    display: flex;
    flex-direction: column;
    margin: 2rem;
    padding: 1rem;
    align-items: center;
    
    div{
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;
        
        input{
            width: 30rem;
        }    
    }
    #button{
        background-color: #FFC300;
        border: none;
        border-radius: 10px;
        height: 4rem;
        width: 20rem;
    }
    #button:hover{
        background-color: #001D3D;
        color: #fff;
    }
}
</style>
   
   