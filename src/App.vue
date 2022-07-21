<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

<div class="ap">
<HelloWorld class="viw"/>
<router-view class="router"></router-view>

</div>
</template>

<style lang='scss'>
:root{
  background: $primaryfColor;
  color: rgb(0, 0, 0);
}
*{
  font-size: 16px;
  line-height: 18.4px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.router{
  position: relative;

margin-top: 4.75rem;
}
</style>
