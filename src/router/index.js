import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// 解决同一链接重复点击
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};
// 配置路由表
const routes=[
      {path:'/',redirect:'/flash'},
      {path:'/flash',name:'flash',component:()=> import ('../pages/flash/FlashPage') },
      {path:'/main',component:()=> import ('../pages/main/MainPage') ,children:[
       {path:'',redirect:'disease'},
       {path:'disease',name:'disease',component:()=>import('../pages/disease/DiseasePage')},
       {path:'detail',name:'detail',component:()=>import('../pages/detail/DetailPage')},

      ]},
      {path:'*',component:()=>import('../pages/notfoundpage/NotFoundPage')}
    
    ]
  
  const router = new VueRouter({
      routes,
      mode:"history"
  });
  
  export default router;