import Vue from 'vue';
import VueRouter from 'vue-router';

import demo from "@/view/demo"
import action from "@/view/action";
//登入
import singIn from "@/view/signIn";
//儀錶板
import dashboard from "@/view/home/dashboard";
//書籍
import book_list from "@/view/book/book_list";


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
                }
            ]
        }
    ]
});

export default router;

