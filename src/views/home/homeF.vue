<template>
    <div class="Box">
    <ul>
    <li v-for="(i,index) in obj" :key="index">
    <p>{{i.name}}  </p> 
    <p> {{i.TimeRanges}}</p>
    </li>
    </ul>
    </div>
</template>
  
<script setup>
import {ref,reactive} from 'vue'
const obj = [{
    name:'关于我的第一篇文章',
    TimeRanges:'2022-7-21',
    remake:'F'
  },
  {
    name:'关于我的第er`篇文章',
    TimeRanges:'2022-7-21',
    remake:''
  }, {
    name:'关于我的第er`篇文章',
    TimeRanges:'2022-7-21',
    remake:''
  },{
    name:'1',
    TimeRanges:'2',
    remake:''
  }, {
    name:'关于我的第er`篇文章',
    TimeRanges:'2022-7-21',
    remake:''
  }, {
    name:'关于我的第er`篇文章',
    TimeRanges:'2022-7-21',
    remake:''
  }, {
    name:'关于我的第er`篇文章',
    TimeRanges:'2022-7-21',
    remake:''
  }, {
    name:'关于我的第er`篇文章',
    TimeRanges:'2022-7-21',
    remake:''
  }, {
    name:'关于我的第er`篇文章',
    TimeRanges:'2022-7-21',
    remake:''
  }, {
    name:'关于我的第er`篇文章',
    TimeRanges:'2022-7-21',
    remake:''
  }, {
    name:'关于我的第er`篇文章',
    TimeRanges:'2022-7-21',
    remake:''
  }, {
    name:'关于我的第er`篇文章',
    TimeRanges:'2022-7-21',
    remake:''
  }, {
    name:'关于我的第er`篇文章',
    TimeRanges:'2022-7-21',
    remake:''
  },]
</script>
  
<style scoped lang='scss'>
  .Box{
    position: relative;
    width: 37.5rem;
     background-color: $primaryttColor;
text-align: left;
padding-left: 30px;
  li{
     cursor: pointer;
    margin-top: 30px;
    color: rgb(44, 31, 31);
    p:nth-child(2){
       font-size: .125rem ;
       color: rgb(116, 116, 116);    
    }
  }
   li:first-child{
    margin: 0;
  }
  }
</style>