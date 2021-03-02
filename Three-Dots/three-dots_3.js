function myFunc(x, y, ...params) { // used rest operator here
  console.log(x);
  console.log(y);
  console.log(params);
}

var inputs = ["a", "b", "c", "d", "e", "f"];
myFunc(...inputs); // used spread operator here
// "a"
// "b"
// ["c", "d", "e", "f"]