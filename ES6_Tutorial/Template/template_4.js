var user = {name: 'Caitlin Potter'};
console.log(`Thanks for getting this into V8, ${user.name.toUpperCase()}.`);

// => "Thanks for getting this into V8, CAITLIN POTTER";

// And another example
var thing = 'template strings';
console.log(`Say hello to ${thing}.`);

// => Say hello to template strings