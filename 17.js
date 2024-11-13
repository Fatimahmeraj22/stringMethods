// search


let str = "The quick brown fox";
console.log(str.search("quick")); // 4
console.log(str.search("lazy"));  // -1 (not found)
console.log(str.search(/[aeiou]/)); // 1 (the first vowel)
