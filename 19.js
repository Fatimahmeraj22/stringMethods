// matchAll


let str = "The quick brown fox jumps over the lazy dog";
let regex = /\b\w{3}\b/g;
console.log([...str.matchAll(regex)]); // [["The"], ["fox"], ["the"]]
