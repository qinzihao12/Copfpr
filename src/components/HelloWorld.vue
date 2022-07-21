<script setup>
import {useRoute,useRouter} from 'vue-router';
import {ref} from 'vue'
const route =useRoute()
const router =useRouter()
function psh(a) {
    router.push({name:a})
}
const val=ref('12');

</script>

<template>

 <div class='wrapper'>
 <div class="centerBox" id="F">
<img src='../assets/Aa.png'  @click="psh('Login')">
<input type="text" class="inp" placeholder="就让山上的斑鸠叫吧,我要像死了一般">
<ul class="recommend">
<div @click="psh('LoginOut')">切换</div>
<div>文章</div>
<div>赞助</div>
<div>联系方式</div>
</ul>
</div>
<div class="centerBox" id="o">
<div class="center">
<img src='../assets/Aa.png' >
<p>内容</p>
</div>
<input type="text" class="inp" v-model="val"  placeholder="就让山上的斑鸠叫吧,我要像死了一般.">
</div>
</div>

</template>

<style scoped lang='scss'>
.wrapper{
    top: 0;
    z-index: 100000;
    position: fixed;
    width: 100%;
    height: 3.625rem;
      background-color: $primarytColor;
#o{
      display: none;
} 
.centerBox{
    position: relative;
    left: 50%;
    transform: translateX(-50%);
width: 62.5rem;
height: 100%;
align-items: center;
justify-content: center;
display: flex;
    img{
        
        width: 10%;
        height: 100%;
        cursor: pointer;
    }
.inp{
   border-radius: 14px;
    height: 1.75rem;
    width: 20.9375rem;
    padding: 0 0 0 15px;
    cursor: text;
    border: none;
}
.recommend{
    width: 22.5rem;
    list-style: none;
    display: flex;
    align-items: center;
justify-content:space-around;   
cursor: pointer;
}
    }
}

@media only screen and (max-width: 40.625rem) {
  .wrapper {
      width: 100%;
   height: 5.5rem;
   display: flex;

   #F{
    display: none;
   }
   #o{
       display: flex;
   }
   .centerBox{
    left: 50%;
    transform: translateX(-50%);
     height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .center{
        position: relative;
        height: 3rem;
        display: flex;
     align-items: center;
     justify-content: space-around;
        width: 90%;
        img{
width: 9.375rem;
height: 300%;
        }
    }
    .inp{
         left: 50%;
    transform: translateX(-50%);
        position: relative;
       height: 2.1rem;
        width:90%;
        
    }
   }
  }
}
</style>
