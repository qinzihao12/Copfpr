<template>
        <div class="home">
        1
       <homeF class="F"></homeF>
       <homeT class="T"></homeT>
        </div>
</template>
    
<script setup >
import homeF from './homeF.vue'
import homeT from './homeT.vue'
    
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