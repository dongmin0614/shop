<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title class="bartitle" @click="home()">Title</v-app-bar-title>
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

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab
            v-for="(item, i) in categories"
            :key="i"
            :to="item.to"
            @click="btn_cate(item)"
            >{{ item.title }}</v-tab
          >
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="224"
    >
      <v-container style="height: 224px"></v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    categories: [
      {
        title: "상의",
        to: "/product/tshirts",
      },
      {
        title: "하의",
        to: "/product/pants",
      },
      {
        title: "신발",
        to: "/product/shoes",
      },
    ],
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
    btn_cate(item) {
      console.log(item.title);
    },
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
  right: 15%;
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
