<template>
   <button @click="visibile = true">打开</button>
   <el-dialog
      v-model:visibile="visibile"
      :title="d1"
      :content="xxx"
   ></el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import Dialog from "@/packages/Dialog/src/index.vue";
export default defineComponent({
   name: "Home",
   components: {
      ElDialog: Dialog,
   },
   setup() {
      const visibile = ref(false);
      function dialog() {
         console.log(1);
         // Dialog({
         //    title: "标题",
         //    content: "内容",
         // })
         //    .then((close) => {
         //       console.log("确定");
         //       close();
         //    })
         //    .catch(() => {
         //       console.log("取消");
         //    });
      }

      return {
         dialog,
         visibile,
      };
   },
});
</script>

<style lang="scss" scoped></style>
