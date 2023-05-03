// import xlsx from "xlsx"; // 报错 没有默认导出
import * as xlsx from "xlsx";

const jsonToExcel = (list, header, fileName, bookType) => {
  // 这里是修改表头
  if (header) {
    list = list.map((item) => {
      const obj = {};
      for (const key in item) {
        if (header[key]) {
          obj[header[key]] = item[key];
        } else {
          obj[key] = item[key];
        }
      }
      return obj;
    });
  }
  // 1.创建一个工作簿
  const workBook = xlsx.utils.book_new();

  // 2.创建工作表
  const workSheet = xlsx.utils.json_to_sheet(list);

  // 3.将工作表放入到工作簿中
  xlsx.utils.book_append_sheet(workBook, workSheet);

  // 4.生成数据 保存 -- new Date().valueOf() 时间戳
  xlsx.writeFile(workBook, fileName || `测试.${new Date().valueOf()}.xls`, {
    bookType: bookType || "xls",
  });
};

export default jsonToExcel;
