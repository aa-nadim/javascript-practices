let str = String.raw`Hi\n${2+3}!`;
// "Hi\n5!"

str.length;
// 6

Array.from(str).join(',');
// "H,i,\,n,5,!"

console.log(str);