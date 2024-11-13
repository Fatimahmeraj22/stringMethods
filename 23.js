// localeCompare

let str1 = "apple";
let str2 = "banana";
console.log(str1.localeCompare(str2)); // -1 (apple comes before banana)


console.log(str2.localeCompare(str1)); // 1 (banana comes after apple)


console.log("apple".localeCompare("apple")); // 0 (both are equal)
