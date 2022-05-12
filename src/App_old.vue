<template>
  <div>
    <ListHelper >
      <template #listItem>
        <ul>
          <li v-for="item in list" :key="item">{{ item }}</li>
        </ul>
      </template>
      <template v-slot:pera>
        <p>
          User also know PHP
        </p>
      </template>
      <template v-slot:[loader]>
        <p>
          See you again
        </p>
      </template>
      
    </ListHelper>
  </div>
</template>

<script>
import ListHelper from "./components/ListHelper.vue";
export default {
  data() {
    return {
      list: ["html", "css", "js"],
      loader : ''
    };
  },
  components: {
    ListHelper,
  },
  created() {
    setTimeout(() => {
      this.loader = 'loading'
    }, 3000);
  },
};
</script>

<style scoped>
ul li {
  color: red;
}
p {
  color: blue;
}
</style>





====================================================
<template>
  <div>
    <div class="flex space-x-4 p-4 justify-center">
      <button
        class="
          py-1
          px-2
          bg-[#41B883]
          text-[#34495E]
          font-bold
          rounded-full
          hover:bg-[#34495E] hover:text-[#41B883]
          duration-300
        "
        @click="componentToRender = 'Home'"
      >
        Home
      </button>
      <button
        class="
          py-1
          px-2
          bg-[#41B883]
          text-[#34495E]
          font-bold
          rounded-full
          hover:bg-[#34495E] hover:text-[#41B883]
          duration-300
        "
        @click="componentToRender = 'About'"
      >
        About
      </button>
      <button
        class="
          py-1
          px-2
          bg-[#41B883]
          text-[#34495E]
          font-bold
          rounded-full
          hover:bg-[#34495E] hover:text-[#41B883]
          duration-300
        "
        @click="componentToRender = 'Contact'"
      >
        Contact
      </button>
    </div>
    <keep-alive>
      <component :is="componentToRender"></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";

export default {
  data() {
    return {
      componentToRender: "Contact",
    };
  },
  components: { Home, About, Contact },
};
</script>

<style>
</style>