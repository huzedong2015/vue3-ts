<template>
   <button @click="show">api引用</button>
   <!-- <button @click="visibile = true">组件调用</button>
   <el-dialog
      v-model:visibile="visibile"
      title="提示"
      @confirm="visibile = false"
   >
      <div>测试内容</div>
   </el-dialog> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Dialog } from "@/packages/Dialog";

export default defineComponent({
   setup() {
      function show() {
         Dialog({
            title: "测试",
            content: "的撒发生发是否",
            onCancel() {
               console.log(1);
            },
         });
      }

      return {
         show,
      };
   },
});
</script>
