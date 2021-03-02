var name = [3,6,7,6,7,8,9,4,2,3,4,6,8,1,3,5,6,3,2,6];
var uniqueName = [];

for(var i=0;i<name.length;i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index==-1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);