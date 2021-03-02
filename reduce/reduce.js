const value = 0;

const numbers = [5, 10, 15];


/* reducer method that takes in the accumulator and next item */
let sum=0;
const reducer = (accumulator, item) => {
    return accumulator + item;
};
/* we give the reduce method our reducer function
  and our initial value */
const total = numbers.reduce(reducer, value)

console.log(total);