let btn = document.getElementById('btn')
btn.onclick()


let val = document.getElementById('input').value
console.log(val)
let flag = false;

for(let a =0;a<=val.length-1;a++){
    if(val.charAt(a)=='@'){
        flag= true;
    }
}
if(flag==false){
    console.log('enter correct mail')
}
else{
    console.log('correct value');
}