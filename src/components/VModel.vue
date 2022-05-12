<template>
  <div>
      <input type="text" class="border-solid border-2 border-green-400" placeholder="First Name" v-model="fName"> <br>
      <input type="text" class="border-solid border-2 border-green-400" placeholder="Last Name" v-model="lName">
      <br>
      <br>
       <input type="text" class="border-solid border-2 border-green-400" placeholder="Hero Name" v-model="heroName"> <br>
      <input type="text" class="border-solid border-2 border-green-400" placeholder="First Name" v-model="firstName"> <br>
      <input type="text" class="border-solid border-2 border-green-400" placeholder="Last Name" v-model="lastName">

  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue"
export default {
    setup(){
        const heroName = ref('')
        const state = reactive({
            firstName : '',
            lastName : ''
        })

        return {
            heroName,
            ...toRefs(state)
        }
    },
    data() {
        return {
            fName : '',
            lName : ''
        }
    },
}
</script>

<style>

</style>