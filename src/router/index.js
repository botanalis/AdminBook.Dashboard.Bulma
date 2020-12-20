import Vue from 'vue';
import VueRouter from 'vue-router';

import demo from "@/view/demo"
import action from "@/view/action";
//登入
import singIn from "@/view/signIn";
//儀錶板
import dashboard from "@/view/home/dashboard";
//書籍_列表
import book_list from "@/view/book/book_list";
//顧客_列表
import customer_list from "@/view/customer/customer_list";
//訂單_列表
import order_list from "@/view/order/order_list";


Vue.use(VueRouter);
const router = new VueRouter({
    mode: "hash",
    routes: [
        { path: "/singIn", name: "singIn", component: singIn },
        { path: "/", component: demo ,
            children:[
                {
                    //儀錶版
                    path: "dashboard", component: action,
                    children:[
                        {
                            path: "info", name: "dashboard", component: dashboard
                        }
                    ]
                },
                {
                    //書籍
                    path: "books", component: action,
                    children:[
                        {
                            //清單
                            path: "list", name: "book_list", component: book_list
                        }
                    ]
                },
                {
                    //顧客
                    path: "customers", component: action,
                    children:[
                        {
                            //清單
                            path: "list", name: "customer_list", component: customer_list
                        }
                    ]
                },
                {
                    //訂單
                    path: "orders", component: action,
                    children:[
                        {
                            //清單
                            path: "list", name: "order_list", component: order_list
                        }
                    ]
                }
            ]
        }
    ]
});

export default router;

