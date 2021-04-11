import {
   createVNode,
   render,
   ComponentInternalInstance,
   ComponentPublicInstance,
   VNodeProps,
} from "vue";
import DialogConstructor from "./src/index.vue";

import { Options } from "./Dialog";

let instance: ComponentInternalInstance;

/**
 * 初始化实例
 * @param options
 * @param container
 */
function initInstance(options: Options, container: HTMLElement) {
   // 创建虚拟DOM
   const vnode = createVNode(DialogConstructor, {
      ...options,
   } as VNodeProps);

   // 渲染虚拟DOM到container上
   render(vnode, container);

   // 将元素添加到页面
   if (container.firstElementChild) {
      document.body.appendChild(container.firstElementChild);
   }

   vnode.component;

   return vnode.component;
}

/**
 * 对话框
 * @param options
 */
export function Dialog(options: Options): Promise<Function> {
   const div = document.createElement("div");

   if (!instance) {
      instance = initInstance(options, div) as ComponentInternalInstance;
   }

   const { props } = instance;
   const vm = instance.proxy as ComponentPublicInstance<{
      cancel: Function;
      confirm: Function;
   }>;

   Object.assign(props, {
      visibile: true,
      ...options,
   });

   return new Promise((reslove, reject) => {
      // 取消
      vm.cancel = () => {
         props.visibile = false;
         reject();
      };

      // 确认
      vm.confirm = () => {
         reslove(vm.cancel);
      };
   });
}

/** 组件引用 */
Dialog.component = DialogConstructor;
