import Vue from 'vue';
import VueRouter from 'vue-router';

//登入
import singIn from "../view/signIn";


Vue.use(VueRouter);
const router = new VueRouter({
    mode: "hash",
    routes: [
        { path: "/singIn", name: "singIn", component: singIn },
    ]
});

export default router;

