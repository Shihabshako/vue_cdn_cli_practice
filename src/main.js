import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";


const app = createApp(App);

// app.component("Header", Header);
// app.component("Footer", Footer);


app.directive('sj',{
    created(el, binding) {
        el.innerHTML = binding.value
        el.style.color = 'red';
    },
})

app.mount("#app"); //have to execute at the end of everything regarding app 

