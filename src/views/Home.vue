<template>
  <div class="home">
    <cat></cat>

    <button @click="date++">增加({{ date }})</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, h, inject, ref, provide, computed } from "vue";
import Cat from "../components/Cat.vue";

export default defineComponent({
   name: "Home",
   components: {
      Cat
   },
   setup() {
      const date = ref(1990);

      function updateAge(value: number) {
         date.value = value;
      }

      provide("age", date);
      provide("updateAge", updateAge);

      return {
         date
      };
   }
});
</script>

<style lang="scss" scoped></style>
