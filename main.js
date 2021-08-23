
// 1
document.getElementById("btnForm").onclick = function(){
    var obj = {fName:document.getElementById("firstNameForm").value,
    lName:document.getElementById("lastNameForm").value,
    birth:document.getElementById("birthForm").value,
    id:document.getElementById("idForm").value,
    city:document.getElementById("cityForm").value}
    obj.date = new Date();
    for (var i = 0; i < array.length; i++) {
        if(obj.id!=array[i].id ){
            array.push(obj);
            break
        }
        alert("NO!");
            break
    }

    
    
    

}

var array =[{fName:"jhone",
lName:"snow",
birth:"900",
id:1111,
city:"winterfell",
},
{fName:"mark",
lName:"west",
birth:"1900",
id:2222,
city:"sevillia"},
{fName:"thomas",
lName:"edison",
birth:"1800",
id:3333,
citty:"kings landin"}]



for (var i = 0; i < array.length; i++) {
    document.getElementById("printArray").innerHTML+= `${Object.values(array[i])}`
    
}

for (var i = 0; i < array.length; i++) {
    document.getElementById("printColum").innerHTML+= `<p>${Object.values(array[i])}</p>`
    
}

oninput = function (){
    document.getElementById("firstNameForm").value = document.getElementById("firstNameForm").value.toUpperCase();
    document.getElementById("lastNameForm").value = document.getElementById("lastNameForm").value.toUpperCase();
    document.getElementById("birthForm").value = document.getElementById("birthForm").value.toUpperCase();
    document.getElementById("cityForm").value = document.getElementById("cityForm").value.toUpperCase();
}



var aboveTheTable = document.getElementById("aboveTheTable")
var aboveTheTableNegative = document.getElementById("aboveTheTableNegative")
var smaeOrNot = document.getElementById("inptCheckIfSame");
var btnIfSame = document.getElementById("btnCheck");

btnIfSame.onclick = function(){
    for (var i = 0; i < array.length; i++) {
        if(array[i].fName==smaeOrNot.value){
            aboveTheTableNegative.innerHTML =`${Object.values(array[i])}`;
        }
        if(aboveTheTableNegative.innerHTML.length<2 ){
            aboveTheTableNegative.innerHTML = "NOOOO!!!!!"
        }
    }
    
}




var paraEx8 = document.getElementById("paraEx8");
var inptEx8 = document.getElementById("inptEx8");
var btnEx8 = document.getElementById("btnEx8");

btnEx8.onclick = function(){
    for (var i= 0; i < array.length; i++) {
        if(array[i].id==inptEx8.value){
            paraEx8.innerHTML = `${Object.values(array[i])}`; 
        }
        if(paraEx8.innerHTML.length<2){
            paraEx8.innerHTML = "NOOOO"
        }
    }
    
}