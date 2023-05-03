import Mock from "mockjs";

Mock.mock("/test/goodslist", "get", {
  status: 200,
  message: "获取商品;列表成功",
  // 方式一
  // data: [1, 2, 3, 4, 5, 6],

  // 方式二
  // data: [
  //   { id: 0, name: "魅族", price: 3999, count: 999, img: "线上图片地址1" },
  //   { id: 0, name: "oppo", price: 2889, count: 756, img: "线上图片地址2" },
  //   { id: 0, name: "小米", price: 4889, count: 533, img: "线上图片地址3" },
  //   { id: 0, name: "华为", price: 7888, count: 1002, img: "线上图片地址4" },
  // ],

  // 方式三 "data|6-10"
  "data|6": [
    {
      id: "@increment(1)", // 'id|+1': 0, 也是一样的 从0开始自增
      name: "@cword(2,3)",
      price: "@integer(2999,10000)",
      count: "@integer(599,1500)",
      img: "@dataImage(200x200)", // image方式不稳定
    },
  ],
});

Mock.mock("/test/addgoods", "post", function (option) {
  // 这里的option是请求相关的参数
  console.log(option);
  // return {
  //   status: 200,
  //   // message: "添加商品成功",
  //   message: "@cword(3,10)", // 这样不生效
  // };

  // mock嵌套
  return Mock.mock({
    status: 200,
    message: "@cword(3,10)",
  });
});

// 传入正则 斜杠要转义 /test/getgoods/1  /\/test\/getgoods/ => 包含了/test/getgoods就可以了+
Mock.mock(/\/test\/getgoods/, "get", {
  data: {
    id: 7,
    name: "华为",
    price: 7888,
    count: 1002,
    img: "@dataImage(200x200)",
  },
  status: 200,
  message: "获取id为1的商品信息",
});
