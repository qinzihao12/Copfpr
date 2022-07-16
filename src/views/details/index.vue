<template>
        <div class="home">
          <detailsF class="F"></detailsF>
       <detailsT class="T"></detailsT>
        </div>
</template>
    
<script setup >
import detailsF from './detailsF.vue'
import detailsT from './detailsT.vue'
    
</script>
    
<style lang='scss' scoped>
   .T{
        display: none;
    }
  @media only screen and (max-width: 40.625rem){
 .T{
        display: flex;
    }
    .F{
        display: none;
    }
   }
</style>