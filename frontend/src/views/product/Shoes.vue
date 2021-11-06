<template>
  <div class="wrap">
    <main-header />
    <div class="content">
      <h1>shoes</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1iU4Y2POGHBFPscBXdBmXiZlW65ZPmP8Eg&usqp=CAU"
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
import Footer from "../../layouts/footer.vue";

export default {
  components: {
    "main-header": Header,
    Footer,
  },
  methods: {},
  mounted() {
    console.log("shoes");
  },
};
</script>
<style scoped>
@import "~@/assets/css/default.css";
</style>
