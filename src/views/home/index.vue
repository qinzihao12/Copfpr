<template>
        <div class="home">
       <homeF class="F" ></homeF>
        </div>
</template>
    
<script setup >
import {ref,computed} from 'vue'
import homeF from './homeF.vue'
import homeT from './homeT.vue'
console.log(  window.document.body.clientWidth);

</script>
    
<style lang='scss' scoped>
 .home{
     display: flex;
     justify-content: center;
 }

</style>