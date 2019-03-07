import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/index.vue"
import Ious from "../ious/index.vue"
import Raise from "../raise/index.vue"
import Download from "../special/download.vue"
import Register from "../register/register.vue"
import Login from "../login/login.vue"
import User from "../user/user.vue"
import "../../css/reset.scss"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        }, {
            path: "/money",
            name: "money",
            component: Money,
        }, {
            path: "/ious",
            name: "ious",
            component: Ious,
        }, {
            path: "/raise",
            name: "raise",
            component: Raise,
        }, {
            path: "/download",
            name: "download",
            component: Download,
        },
        , {
            path: "/user",
            name: "user",
            component: User,
        },
        , {
            path: "/login",
            name: "login",
            component: Login,
        }, , {
            path: "/register",
            name: "register",
            component: Register,
        },
    ],
})
