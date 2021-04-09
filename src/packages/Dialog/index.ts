import {
   createVNode,
   render,
   ComponentInternalInstance,
   ComponentPublicInstance,
} from "vue";
import DialogConstructor from "./src/index.vue";

let instance: ComponentInternalInstance;

function initInstance(options: any, container: HTMLElement) {
   const vnode = createVNode(DialogConstructor, options);
   render(vnode, container);

   if (container.firstElementChild) {
      document.body.appendChild(container.firstElementChild);
   }

   return vnode.component;
}

export interface Options {
   // 标题
   title?: string;
   /** 内容 */
   content?: string;
   /** 取消 */
   onCancel?: Function;
   /** 确定 */
   onConfirm?: Function;
}

export function Dialog(options: Options): void {
   const div = document.createElement("div");

   if (!instance) {
      instance = initInstance(options, div) as ComponentInternalInstance;
   }

   const { props } = instance;
   const vm = instance.proxy as ComponentPublicInstance<{
      cancel: Function;
      confirm: Function;
   }>;

   const { onCancel, onConfirm, ...resOptions } = options;

   vm.cancel = () => {
      props.visibile = false;
      onCancel && onCancel();
   };

   vm.confirm = () => {
      props.visibile = false;
      onConfirm && onConfirm();
   };

   Object.assign(props, {
      visibile: true,
      ...resOptions,
   });
}
