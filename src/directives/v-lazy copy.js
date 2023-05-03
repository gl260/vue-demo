// import _ from "lodash"; // 引入整个lodash对象
// import { throttle } from "lodash";
// import throttle from "lodash/throttle";
import { throttle } from "lodash-es";

export default {
  // 生命周期的函数(自定义指令)
  mounted(el) {
    const imgSrc = el.src;
    el.src = "";
    const scrollListener = throttle(() => {
      const clientHeight = document.documentElement.clientHeight; // 可视区高度
      const scrollTop = document.documentElement.scrollTop; // 滚动高度
      console.log(el.offsetTop, clientHeight, scrollTop);

      if (el.offsetTop < clientHeight + scrollTop) {
        // 加载图片
        el.src = imgSrc;
        console.log("123");
      }
    }, 1000);
    window.addEventListener("scroll", scrollListener);
  },
  // unmounted(el) {
  //   window.removeEventListener("scroll", scrollListener);
  // },
};
