///................................Nadim.................................///
///..............Noakhali Science and Technology University..............///
///........Department of Information and Communication Engineering.......///
const normalPerson = {
    firstName : 'Abdul',
    lastName : 'Awal',
    salary : 15000,
    getFullName : function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill : function(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}
//console.log(normalPerson.firstName);
normalPerson.chargeBill(100);
normalPerson.chargeBill(1000);

console.log(normalPerson.salary);