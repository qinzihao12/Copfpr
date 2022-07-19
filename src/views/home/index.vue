<template>
        <div class="home">
       <homeF class="F" ></homeF>
       <homeT class="T" ></homeT>
        </div>
</template>
    
<script setup >
import {ref,computed} from 'vue'
import homeF from './homeF.vue'
import homeT from './homeT.vue'
console.log(  window.document.body.clientWidth);
// const a=ref(0)
// const whith=computed(()=> window.document.body.clientWidth);
// setInterval(() => {
//     a.value++
//     console.log(whith.value);
// }, 1000);
</script>
    
<style lang='scss' scoped>
  
  @media only screen and (max-width: 40.625rem){
 .T{
        display: flex;
    }
    .F{
        display: none;
    }
   }
</style>