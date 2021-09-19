let arr = [1,2,3,4,4,5,6,7,7,8,9,10]

let uniq = arr.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
  },[]);

console.log(uniq, arr) // [ 1,2,3,4,5,6,7,8,9,10]

// one liner
return arr.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);