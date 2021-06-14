// 导入
import { createRouter, createWebHashHistory } from "vue-router";
// 组件
import Index from "../page/index/index.vue";

const routes: Array<any> = [
  {
    path: "/",
    name: "index",
    component: Index,
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
