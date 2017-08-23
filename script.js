function run(num){
    document.form.result.value+=num;
}

function runClear(){
    document.form.result.value="";
}

function runEquals(){
    var evaluate = eval(document.form.result.value)
    document.form.result.value=evaluate;
}

/*function numbers(event){
    event.preventDefault();


var x = parseInt(document.getElementById("number1").value);
var y= parseInt(document.getElementById("number2").value);

if(!isNaN(parseInt(x)) && !isNaN(parseInt(y))){
//var z=x+y;
    var z;
    switch(event.target.id){
        case "buttonAdd":
            z=x+y;
            break;
        case "buttonSub":
            z=x-y;
            break;
        case "buttonMul":
            z=x*y;
            break;
        case "buttonDiv":
            z=x/y;
            break;
    }
    document.getElementById("answer").innerHTML = z;
}else{
    document.getElementById("number1").innerHTML = document.getElementById("number2").innerHTML = "";
    document.getElementById("answer").innerHTML = "insert a number";
}
}
document.getElementById("buttons").addEventListener("click",numbers)
document.getElementById("form").addEventListener("submit",numbers)


*/
