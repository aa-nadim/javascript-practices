var speech="I am a good person. akjlka lkagkj askjgksal sdfl";

var count=0;
for(var i=0 ;i<speech.length;i++){
    var char = speech[i];
    //console.log(speech[i]);
    if(char == " " && speech[i-1] != " "){
        count++;
    }
}
count++;
console.log("length = ",count);