<template>
  <div id="home" >
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper-cpn :banners="banners"/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import SwiperCpn from "@/views/tabbar/home/childCpn/SwiperCpn";

import {getHomeMultidate} from "@/network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    SwiperCpn
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidate().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
