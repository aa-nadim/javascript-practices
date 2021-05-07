function nan(x) {
  if (Number.isNaN(x)) {
    return 'Number NaN';
  }
  if (isNaN(x)) {
    return 'NaN';
  }
}
console.log(nan('44F'));
//  "NaN"

console.log(nan(NaN));
//  "Number NaN"