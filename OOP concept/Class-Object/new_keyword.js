class Person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Balam', 20000);
console.log(heroPerson);
const friendlyPerson = new Person('Hero', 'Kalam', 25000);
console.log(friendlyPerson);

// Old System.....
function Person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const oldPerson = new Person1("nadim", "ssda",120000)
console.log(oldPerson);