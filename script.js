// creating Elements using DOM

var main=document.createElement("main")
main.setAttribute("class","container")
main.innerHTML="<h1 id='title'><p id='description'>Calculator</p></h1>"
var table=document.createElement("table")
table.setAttribute("class","table")
table.setAttribute("id","calcu");
main.append(table)

var tr1=document.createElement("tr")
tr1.innerHTML="<td colspan=4><input type=text name=result id=result></td>"
table.append(tr1);

var tr2=document.createElement("tr");
tr2.innerHTML="  <td><button type=button onclick=clr() id='clear'>C</button></td>     <td><button type=button onclick=display('/') onkeydown=myFunction(event) id='divide'>/</button></td>         <td><button type=button onclick=display('*') onkeydown=myFunction(event) id='multiplication'>*</button></td>        <td><button type=button onclick=back() id='back'>&lt</button></td>"
table.append(tr2);

var tr3=document.createElement("tr");
tr3.innerHTML=" <td><button type=button onclick=display('7') onkeydown=myFunction(event) id='7'>7</button></td>   <td><button type=button onclick=display('8') onkeydown=myFunction(event) id='8'>8</button></td>   <td><button type=button onclick=display('9') onkeydown=myFunction(event) id='9'>9</button></td>   <td><button type=button onclick=display('-') onkeydown=myFunction(event) id='subtract'>-</button></td>"
table.append(tr3);

var tr4=document.createElement("tr");
tr4.innerHTML=" <td><button type=button onclick=display('4') onkeydown=myFunction(event) id='4'>4</button></td>   <td><button type=button onclick=display('5') onkeydown=myFunction(event) id='5'>5</button></td>   <td><button type=button onclick=display('6') onkeydown=myFunction(event) id='6'>6</button></td>   <td><button type=button onclick=display('+') onkeydown=myFunction(event) id='add'>+</button></td>"
table.append(tr4);

var tr5=document.createElement("tr");
tr5.innerHTML="<td><button type=button onclick=display('1') onkeydown=myFunction(event) id='1'>1</button></td>    <td><button type=button onclick=display('2') onkeydown=myFunction(event) id='2'>2</button></td>   <td><button type=button onclick=display('3') onkeydown=myFunction(event) id='3'>3</button></td>   <td><button type=button  onclick=display('.') onkeydown=myFunction(event) id='dot'>.</button></td>"
table.append(tr5);

var tr6=document.createElement("tr");
tr6.innerHTML="<td><button type=button onclick=display('%') onkeydown=myFunction(event) id='modulas'>%</button></td> <td><button type=button onclick=display('0') onkeydown=myFunction(event) id='0'>0</button></td>   <td><button type=button style=width: 90px; onclick=display('00') onkeydown=myFunction(event) id='00'>00</button></td> <td><button type=button onclick=solve() id='equal'>=</button></td>"
table.append(tr6);

document.body.append(main)


// ================================================================================

//This Function that display result
function display(value){
    document.getElementById("result").value+=value
}

function myFunction(event){
    if(event.key=='0' || event.key == '1' 
    || event.key == '2' || event.key == '3' 
    || event.key == '4' || event.key == '5' 
    || event.key == '6' || event.key == '7' 
    || event.key == '8' || event.key == '9' 
    || event.key == '+' || event.key == '-' 
    || event.key == '*' || event.key == '/') 
        document.getElementById("result").value+=event.key;
    }

var cal=document.getElementById("calcu");
cal.onkeyup=function(event){
    if(event.keyCode===13){
        console.log("Enter");
        let x=document.getElementById("result").value
        console.log(x);
        solve();
    }
}

// Function that evaluates the digit and return result
function solve(){
    let x=document.getElementById("result").value
    let y=eval(x)
    document.getElementById("result").value=y
}

// Function that clear the display 
function clr(){
    document.getElementById("result").value=""
}

//Function that clear last input
function back() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
  }
