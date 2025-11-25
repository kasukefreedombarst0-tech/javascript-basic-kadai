const year = new Date("2024-10-12T23:15:30").getFullYear();
const month = new Date("2024-10-12T23:15:30").getMonth() + 1; // Months are zero-based
const day = new Date("2024-10-12T23:15:30").getDate();

console.log(year); // 2024
console.log(month); // 10
console.log(day); // 12