 
var op; 

function func() {

var result;

var num1 = Number(document.getElementById("num1").value);
var x=1;
if(isNaN(num1)==true){
    result="Некорректная цена товара";
    x=0;
}

var num2 = Number(document.getElementById("num2").value);
if(isNaN(num2)==true){
    result = "Некорректное количество товара";
    x=0;
}

if(x==1){    
    result=num1*num2;
}
document.getElementById("result").innerHTML = result;
}

window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("click");
    b.addEventListener("sss", func);
});
