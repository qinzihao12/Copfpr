<template>
  <div class="F">
    <div class="TAp">
      <n-carousel autoplay class="carousel">
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
        />
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
        />
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
        />
        <img
          class="carousel-img"
          src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
        />
      </n-carousel>
      <div class="litterTap">
        <div class="adders">🔈茶杯狐最新网址：cupfox.app 请及时收藏！</div>
        <div class="box">
          <div class="zz"></div>
          <div class="zz"></div>
        </div>

        <ul>
          <li>
            <img src alt />剧集
          </li>
          <li>
            <img src alt />电影
          </li>
          <li>
            <img src alt />动漫
          </li>
          <li>
            <img src alt />综艺
          </li>
          <li>
            <img src alt />纪录片
          </li>
          <li>
            <img src alt />筛选
          </li>
        </ul>
      </div>
    </div>
    <moveis/>
  </div>

</template>
    
<script setup >
import moveis from '@/components/moveis.vue'
</script>
    
<style lang='scss' scoped>
.F {
  margin-top: 10px;
  .TAp {
    width: 900px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-around;
    .litterTap {
      width: 25rem;
      height: 12.5rem;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      border-radius: 1px;
      box-shadow: 1px 1px 4px 1px black;
      .adders {
        text-align: center;
        flex: 0.2;
        border-radius: 1px;
        box-shadow: 1px 1px 4px 1px black;
      }
      .box {
        flex: 1;
        margin-top: 0.625rem;
        display: flex;
        justify-content: space-around;
        height: 6.25rem;
        .zz {
          width: 150px;
          height: 100%;
          background-color: rgb(236, 155, 155);
        }
      }
      ul {
        flex: 0.3;
        display: flex;
        width: 100%;
        justify-content: space-around;
        margin-top: 10px;
      }
    }
    .carousel {
      width: 400px;
      height: 12.5rem;
      .carousel-img {
        border-radius: 20px;
        width: 100%;
        height: 200px;
        object-fit: cover;
      }
    }
  }
}
</style>