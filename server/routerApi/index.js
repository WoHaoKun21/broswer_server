const XLSX = require("xlsx");
const path = require("path");
// 获取表格数据
const getExcelData = (name, num = 0) => {
  const workbook = XLSX.readFile(path.join(process.cwd(), name));
  const sheetName = workbook.SheetNames[num]; // 获取excel表的第一张表名字
  const worksheet = workbook.Sheets[sheetName]; // 获取第一张表的数据
  const data = XLSX.utils.sheet_to_json(worksheet); // 将表格数据转成json数据
  return data;
};

// 更新/新增表格数据
const updateExcelData = (name, num = 0, data = []) => {
  const workbook = XLSX.readFile(path.join(process.cwd(), name));
  const sheetName = workbook.SheetNames[num];
  const newWorksheet = XLSX.utils.json_to_sheet(data);
  workbook.Sheets[sheetName] = newWorksheet;
  const newFilePath = `${process.cwd()}/${name}`;
  XLSX.writeFile(workbook, newFilePath);
};


module.exports = { getExcelData, updateExcelData };
