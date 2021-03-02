const num = [5, 10, 15, 20, 25, 30, 35, 100];

// 1
// const total = num.reduce( (sum, num) => sum + num, 0)
// console.log(total);

const total = num.reduce( (sum, num) => {
    console.log(sum, num);
    return sum + num
}, 0)
console.log(total);