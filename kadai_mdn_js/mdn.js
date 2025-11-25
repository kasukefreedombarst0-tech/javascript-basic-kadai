const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // getMonth() は 0 から始まるので、1 を足します
const date = today.getDate();

console.log(year + '年' + month + '月' + date + '日');