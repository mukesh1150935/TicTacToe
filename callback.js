const mut = function(me,you,callback){
console.log(me)
console.log(you)
callback(you)


}

const reh=function(e){
    console.log(`madharchod ${e}`);
}

mut('Rehan','Mukesh',reh);