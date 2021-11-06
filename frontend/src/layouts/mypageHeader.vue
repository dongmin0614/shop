<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      color="#6A76AB"
      dark
      dense
      height="150px"
      src="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <!-- <v-app-bar-title class="bartitle" @click="home()">Title</v-app-bar-title> -->
      <h2 class="bartitle" @click="home()">home</h2>
      <v-spacer></v-spacer>

      <ul class="menu" right>
        <li>{{ topMenu[0].title }}</li>
        <li>{{ topMenu[1].title }}</li>
        <li>{{ topMenu[2].title }}</li>
        <li @mouseover="listOne = true" @mouseleave="listOne = false">
          {{ topMenu[3].title }}
          <transition name="fade">
            <!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
            <ul v-if="listOne" @click="listOne = false">
              <li>
                <router-link class="routerlink" :to="mypage[0].to">{{
                  mypage[0].title
                }}</router-link>
              </li>
              <li>
                <router-link class="routerlink" :to="mypage[1].to">{{
                  mypage[1].title
                }}</router-link>
              </li>
              <li>
                <router-link class="routerlink" :to="mypage[2].to">{{
                  mypage[2].title
                }}</router-link>
              </li>
              <li>
                <router-link class="routerlink" :to="mypage[3].to">{{
                  mypage[3].title
                }}</router-link>
              </li>
            </ul>
          </transition>
        </li>
      </ul>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    topMenu: [
      { title: "로그인" },
      { title: "회원가입" },
      { title: "장바구니" },
      { title: "마이페이지" },
    ],
    mypage: [
      { title: "주문내역", to: "/mypage/order" },
      { title: "정보수정", to: "/mypage/changeinfo" },
      { title: "쿠폰보관함", to: "/mypage/coupon" },
      { title: "xxxx", to: "/mypage/xxxx" },
    ],
    listOne: false,
  }),

  methods: {
    home() {
      window.location.href = "/";
    },
  },
};
</script>

<style scoped>
.bartitle:hover {
  color: black;
  cursor: pointer;
}
.menu {
  font: 14px/1.5 "Open Sans", sans-serif;
  font-weight: 600;
  margin: 0;
  padding: 0;
  list-style: none;
  align-self: start;
  text-align: center;
}
.menu :hover {
  color: rgb(238, 237, 237);
  cursor: pointer;
}
.menu li {
  display: block;
  float: left;
  position: relative;
  color: rgb(202, 199, 199);
  min-width: 100px;
}

.menu li ul {
  position: absolute;
  background: rgb(252, 252, 252);
  left: 0;
  text-align: center;
  top: 20px;
  margin: 0;
  padding: 0;
  border-radius: 15px;
}

.menu li ul li {
  /* background: #fff; */
  transition: background 0.2s;
  height: 30px;
  top: 10px;
}
.menu li ul li .routerlink {
  color: rgb(0, 0, 0);
  text-decoration: none;
}
.menu li ul li .routerlink:hover {
  color: rgb(112, 109, 109);
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
