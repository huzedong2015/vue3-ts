<template>
   <teleport to="body">
      <transition name="fade">
         <div v-if="visibile" class="dialog-mask"></div>
      </transition>

      <transition name="slide">
         <div v-if="visibile" class="dialog-box" :style="{ width }">
            <div class="dialog-head">
               <div v-if="title" class="dialog-title">{{ title }}</div>
               <slot v-else name="title"></slot>

               <button class="dialog-close" @click="cancel"></button>
            </div>

            <div class="dialog-content">
               <template v-if="content">{{ content }}</template>
               <slot v-else></slot>
            </div>

            <div class="dialog-bottom">
               <button
                  class="dialog-button dialog-button--default"
                  @click="cancel"
               >
                  取消
               </button>
               <button
                  class="dialog-button dialog-button--primary"
                  @click="confirm"
               >
                  确定
               </button>
            </div>
         </div>
      </transition>
   </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
   name: "ElDialog",
   props: {
      // 是否显示对话框
      visibile: Boolean,
      // 宽度
      width: {
         type: String,
         default: "30%",
      },
      // 标题
      title: {
         type: String,
         default: "",
      },
      // 内容
      content: {
         type: String,
         default: "",
      },
      // 显示关闭按钮
      showClose: {
         type: Boolean,
         default: true,
      },
   },
   emits: ["confirm", "update:visibile", "cancel"],

   setup(poops, { emit }) {
      // 确定
      const confirm = () => {
         emit("confirm");
      };

      // 取消
      const cancel = () => {
         emit("update:visibile", false);
         emit("cancel");
      };

      return {
         confirm,
         cancel,
      };
   },
});
</script>

<style lang="scss" scoped>
.dialog {
   &-mask {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 10000;
      background: rgba(0, 0, 0, 0.6);
   }

   &-box {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      margin: 15vh auto 0;
      background: #fff;
      border-radius: 4px;
      z-index: 10001;
      --gap: 20px;
      --color-main: #3a8ee6;
   }

   &-title {
      font-size: 18px;
      line-height: 1.3;
   }

   &-head {
      position: relative;
      padding: var(--gap) var(--gap) 10px;
   }

   &-close {
      position: absolute;
      right: var(--gap);
      top: var(--gap);
      width: 18px;
      height: 18px;
      padding: 0;
      color: #ddd;
      background: none;
      border: none;
      outline: none;
      cursor: pointer;

      &:hover {
         color: var(--color-main);
      }

      &::before,
      &::after {
         content: "";
         position: absolute;
         top: 0;
         left: 50%;
         width: 1px;
         height: 100%;
         background: currentColor;
         transform: rotate(-45deg);
      }

      &::after {
         transform: rotate(45deg);
      }
   }

   &-content {
      padding: 30px var(--gap);
      font-size: 14px;
      color: #666;
   }

   &-bottom {
      display: flex;
      justify-content: flex-end;
      padding: 10px var(--gap) var(--gap);

      .dialog-button {
         margin-left: 15px;
      }
   }

   &-button {
      display: inline-block;
      padding: 12px 20px;
      font-size: 14px;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      color: #606266;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      transition: 0.1s;
      user-select: none;
      background: #fff;
      border: 1px solid #dcdfe6;
      border-radius: 4px;

      &--default {
         &:hover {
            color: var(--color-main);
            border-color: #c6e2ff;
            background-color: #ecf5ff;
         }
      }

      &--primary {
         color: #fff;
         background-color: var(--color-main);
         border-color: var(--color-main);

         &:hover {
            opacity: 0.9;
         }
      }
   }
}
.fade-enter-active,
.fade-leave-active {
   transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
   opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
   transition-property: opacity, transform;
   transition-duration: 0.3s;
   transition-timing-function: ease-out;
}

.slide-enter-from,
.slide-leave-to {
   opacity: 0;
   transform: translateY(-24px);
}
</style>
