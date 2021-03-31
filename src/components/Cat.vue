<template>
   <h1>{{ age }}</h1>
   <button @click="updateAge(~~(Math.random() * 10000))">更新</button>
</template>

<script>
import { defineComponent, inject } from "vue";
export default defineComponent({
   name: "Cat",
   setup() {
      const age = inject("age", "default value");
      const updateAge = inject("updateAge");

      return {
         age,
         updateAge,
      };
   },
});
</script>

<style></style>
