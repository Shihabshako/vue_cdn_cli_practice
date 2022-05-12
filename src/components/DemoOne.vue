<template>
    <h2> {{ name }} </h2>
</template>

<script>
import {ref} from 'vue'
export default {
    setup() {
        let name = ref('Shihab')

        setTimeout(() => {
            name.value = 'Shihab Jamil'
            console.log(name)
        }, 2000);

        return{
            name
        }
    }
}
</script>

<style>

</style>