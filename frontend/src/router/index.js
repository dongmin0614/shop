import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cart from "@/views/Cart";
import Pants from "@/views/product/Pants";
import Tshirts from "@/views/product/Tshirts";
import Shoes from "@/views/product/Shoes";
import MCouponList from "@/views/mypage/CouponList";
import MOrderList from "@/views/mypage/OrderList";
import MUserInfoModify from "@/views/mypage/UserInfoModify";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/product/pants",
    name: "pants",
    component: Pants,
  },
  {
    path: "/product/tshirts",
    name: "tshirts",
    component: Tshirts,
  },
  {
    path: "/product/shoes",
    name: "shoes",
    component: Shoes,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  // mypage
  {
    path: "/mypage/order",
    name: "order",
    component: MOrderList,
  },
  {
    path: "/mypage/coupon",
    name: "coupon",
    component: MCouponList,
  },
  {
    path: "/mypage/changeinfo",
    name: "changeinfo",
    component: MUserInfoModify,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
