export default {
  // 生命周期的函数(自定义指令)
  mounted(el) {
    // console.log(el);
    const imgSrc = el.src;
    el.src = "";

    // 交叉观察器: 理解为 观察元素是否已经进入到可视区域
    // const observer = new IntersectionObserver((entries) => {} --> 需要解构出来 entries 是一个长度为1的数组
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      // 接收一个回调函数: 元素出现在可视区域,和离开可视区域被触发
      console.log("触发了", isIntersecting); // entries.isIntersecting为true就是在可视区域

      if (isIntersecting) {
        // 加载图片
        el.src = imgSrc;

        // 加载玩之后需要停止观察
        observer.unobserve(el);
      }
    });
    observer.observe(el);
  },
};
