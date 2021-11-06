<template>
  <div class="wrap">
    <main-header />
    <div class="content">
      <h1>tshirts</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeFv3ORNp1b2DWy31FMMpeLlhQvF-RVZtFTQ&usqp=CAU"
        alt=""
      />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "../../layouts/header";
import Footer from "../../layouts/footer";
export default {
  components: {
    "main-header": Header,
    Footer,
  },
  methods: {},
  mounted() {
    console.log("tshirts");
  },
};
</script>
<style scoped>
@import "~@/assets/css/default.css";
</style>
