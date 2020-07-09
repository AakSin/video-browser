import Vue from "vue";
import App from "./App";
require('dotenv').config()

new Vue({
    render:h=>h(App)
}).$mount("#app");