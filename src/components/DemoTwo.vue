<template>
  <h2> {{ firstName }} {{ lastName }} </h2>
</template>





<script>

import {reactive, toRefs} from 'vue'
export default {
    setup() {
       const state = reactive({
           firstName : 'Bruce',
           lastName : 'Wayne'
       }) 

       setTimeout(() => {
           state.firstName = 'Clark';
           state.lastName = 'Kent'
       }, 2000);

       return toRefs(state)
    }
}
</script>

<style>

</style>