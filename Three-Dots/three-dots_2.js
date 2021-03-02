function myFunc(...[x, y, z]) {
    return x * y* z;
  }
  
console.log(myFunc(1));// NaN          
console.log(myFunc(1, 2)); // NaN
console.log(myFunc(1, 2, 3));    // 6
console.log(myFunc(1, 2, 3, 4)) ;  // 6 (fourth parameter is not destructured)