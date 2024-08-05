const XLSX = require("xlsx");
const path = require("path");
// 获取表格数据
const getExcelData = (name, num = 0) => {
  const workbook = XLSX.readFile(
    path.join(path.resolve(__dirname, "../"), name)
  ); // database/login.xls
  const sheetName = workbook.SheetNames[num]; // 获取excel表的第一张表名字
  const worksheet = workbook.Sheets[sheetName]; // 获取第一张表的数据
  const data = XLSX.utils.sheet_to_json(worksheet); // 将表格数据转成json数据
  return data;
};

// 更新表格数据
const updateExcelData = (name, num = 0) => {
  // 读取 Excel 文件
  const workbook = XLSX.readFile(path.join(__dirname, name));
  // 获取 Excel 文件中的第一个工作表
  const sheetName = workbook.SheetNames[num];
  const worksheet = workbook.Sheets[sheetName];
  // 修改 Excel 数据
  worksheet["A1"].v = "New Value"; // 修改单元格 A1 的值为 'New Value'

  // 将修改后的数据保存到新的 Excel 文件
  const newFilePath = path.join(__dirname, "updated_example.xlsx");
  XLSX.writeFile(workbook, newFilePath);
};

module.exports = { getExcelData, updateExcelData };
