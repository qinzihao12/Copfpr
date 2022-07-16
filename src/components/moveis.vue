<template>
    <div class="moive">
    <div class="shipin" v-for="(i,index) in 4 " :key="index">
    <div class="more">
     <h1>标题</h1>
    <div>更多</div>
    </div>
   
    <div class="tap"> 
         <div class="li">热门</div>
         <div class="li">热门</div>
         <div class="li">热门</div>
         <div class="li">热门</div>
    </div>
    <div class="introduction">
    <div class="k" v-for="(i,index) in 12 " :key="index">
    <img src="@/assets/logo.png" alt=""  @click="psh('details')">
          <p>标题</p>
         <n-rate />
    </div>
   
    </div>
    </div>
    </div>
</template>
    
<script setup >
    import {useRoute,useRouter} from 'vue-router';
const route =useRoute()
const router =useRouter()
function psh(a) {
    router.push({name:a})
}

</script>
    
<style scoped lang='scss'>
    .moive{
        position: relative;
        transform: translateX(-50%);
        left: 50%;
        width: 56.25rem;
         margin-top: 10px;
         box-shadow: .5rem 1rem 1rem .5rem hsl(0deg 0% 0%/0.25 );


    .shipin{
        
        flex-direction: column;
        display: flex;
        width: 100%;
        .more{
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
            width: 100%;
        }
        .tap{
            width: 100%;
            display: flex;
            justify-content: space-around;
            .li{
                position:relative;
                width: 2rem;
transition: .1s linear;
                border-radius:25%;
                background-color: rgba(14, 255, 255, 0.2);
            }
            .li:hover{
box-shadow: .125rem .125rem .125rem black;
            }
        }
        .introduction{
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            .k{
            width: 8.9375rem;
            height: 12.5625rem;
            img{
                width: 100%;
            }
            }
        }
    }
    }
</style>