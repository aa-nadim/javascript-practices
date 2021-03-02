function addNumbers(num1,num2){
    console.log(arguments);
    var sum =0;
    for(let i=0 ;i <arguments.length;i++){
        const num = arguments[i];
        //console.log(num);
        sum += num;
    }
    return sum;
}

var result = addNumbers(3,5,2,5,13);
console.log(result);