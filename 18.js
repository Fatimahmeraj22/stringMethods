// match



let str = "The quick brown fox";
console.log(str.match(/\b\w{5}\b/g)); // ["quick", "brown"]


console.log("abc123".match(/\d+/)); // ["123"]


console.log("hello".match(/[a-z]+/)); // ["hello"]
