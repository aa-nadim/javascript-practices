const students = [
    {id: 21, name: "nadim"},
    {id: 33, name: "dorjoy"},
    {id: 35, name: "rakib"},
    {id: 11, name: "sakib"}
];

const names = students.map( s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter( s => s.id > 30);
const big = students.find( s => s.id > 10);
console.log(bigger);
console.log(ids);
console.log(names);
console.log(big);