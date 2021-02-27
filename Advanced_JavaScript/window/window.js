///................................Nadim.................................///
///..............Noakhali Science and Technology University..............///
///........Department of Information and Communication Engineering.......///


var name = "nadim";
function add(num1, num2){
    window.result = num1 + num2; // eita kora ochit na..
    console.log("result inside",result);
    console.log("name inside ", name);
    function double(num){
        return num*2;
    }
    var total = double(result);
    return total;
}
console.log("name outside ", name);
var sum = add(13,21);
console.log(sum);
console.log("result outside",result);



