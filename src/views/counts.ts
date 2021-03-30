import {
   ref,
   reactive,
   computed,
   watchEffect,
   toRefs,
   onBeforeUnmount,
} from "vue";

const cacheInc = sessionStorage.getItem("inc");
let inc: number = cacheInc ? parseInt(cacheInc) || 0 : 0;

export function userCount() {
   const currentCount = ref(inc);
   const doubleCurrent = computed(() => currentCount.value * 2);

   const user = reactive({
      date: 1991,
      age: computed((): number => new Date().getFullYear() - user.date),
   });

   watchEffect(() => {
      console.log("当前值:", currentCount.value);
      inc = currentCount.value;
   });

   onBeforeUnmount(() => {
      sessionStorage.setItem("inc", inc.toString());
   });

   return {
      currentCount,
      doubleCurrent,
      ...toRefs(user),
   };
}
