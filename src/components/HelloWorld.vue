<script setup>


</script>

<template>

 <div class='wrapper'>
 <div class="centerBox" id="F">
<img src='../assets/Aa.png' >
<input type="text" class="inp">
<ul class="recommend">
<div>App</div>
<div>订阅</div>
<div>发电</div>
<div>观看历史</div>
</ul>
</div>
<div class="centerBox" id="o">
<div class="center">
<img src='../assets/Aa.png' >
<p>⌛观看历史</p>
</div>
<input type="text" class="inp">
</div>
</div>

</template>

<style scoped lang='scss'>
.wrapper{
    top: 0;
    z-index: 100000;
    position: fixed;
    width: 1247px;
    height: 4.625rem;
    background-color: rgb(255, 255, 255);
    box-shadow: 1px 1px 3px  black;
#o{
      display: none;
} 
.centerBox{
    position: relative;
    left: 50%;
    transform: translateX(-50%);
width: 1000px;
height: 100%;
align-items: center;
display: flex;
    img{
        
        width: 10%;
        height: 100%;
        cursor: pointer;
    }
.inp{
   border-radius: 14px;
    height: 2.75rem;
    width: 20.9375rem;
    padding: 0 0 0 15px;
    cursor: text;
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
