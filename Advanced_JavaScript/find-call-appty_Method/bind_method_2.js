///................................Nadim.................................///
///..............Noakhali Science and Technology University..............///
///........Department of Information and Communication Engineering.......///
const normalPerson = {
    firstName : 'Abdul',
    lastName : 'Awal',
    salary : 90000,
    getFullName : function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill : function(amount){
        //console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}
const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 2000
}
const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'kalam',
    salary: 8000
}
normalPerson.chargeBill(100);
normalPerson.chargeBill(1000);
console.log(normalPerson.salary);

const heroPersonChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroPersonChargeBill(2000);
heroPersonChargeBill(3000);
console.log(heroPerson.salary);

const friendlyPersonChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyPersonChargeBill(8000);
friendlyPersonChargeBill(8000);
console.log(friendlyPerson.salary);



