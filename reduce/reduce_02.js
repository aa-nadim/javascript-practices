const friends = [
    {name: 'nadim', money: 12},
    {name: 'rakib', money: 132},
    {name: 'akib', money: 132},
    {name: 'asif', money: 912},
    {name: 'noman', money: 192},
];


const total = friends.reduce( (sum, friend) => {
    console.log(sum, friend);
    return sum + friend.money;
}, 0)
console.log(total);