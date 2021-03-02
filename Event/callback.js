function explain_callback(name,age,task){
    console.log('Hello ', name);
    console.log('your age ', age);
    task();
}
function washHand(){
    console.log('wash hand with soap')
}
function takeShower(){
    console.log('Take shower');
}

explain_callback('nadim',33,washHand);
explain_callback('rakib',33,takeShower);