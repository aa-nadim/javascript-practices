function greetObject(who) {
  if (!who) {
    return null;
  }
  return { message: `Hello, ${who}!` };
}

console.log(greetObject('Eric')); // => { message: 'Hello, Eric!' }
console.log(greetObject());       // => null