function boton8Response()
  {
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+8;
  display.setAttribute("value", newvalue);
  }
    

let boton8=document.getElementById("btn8");
  boton8.addEventListener('click',boton8Response);

function boton7Response()
  {
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+7;
  display.setAttribute("value", newvalue);
  }
    

let boton7=document.getElementById("btn7");
  boton7.addEventListener('click',boton7Response);

function boton9Response()
  {
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+9;
  display.setAttribute("value", newvalue);
  }
    

let boton9=document.getElementById("btn9");
  boton9.addEventListener('click',boton9Response);

function botonMasResponse()
  {
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+"+";
  display.setAttribute("value", newvalue);
  }
    

let botonMas=document.getElementById("btn+");
  botonMas.addEventListener('click',botonMasResponse);

function boton4Response()
  {
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+4;
  display.setAttribute("value", newvalue);
  }
    

let boton4=document.getElementById("btn4");
  boton4.addEventListener('click',boton4Response);

function boton5Response()
  {
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+5;
  display.setAttribute("value", newvalue);
  }
    

let boton5=document.getElementById("btn5");
  boton5.addEventListener('click',boton5Response);

function boton6Response()
  {
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+6;
  display.setAttribute("value", newvalue);
  }
    

let boton6=document.getElementById("btn6");
  boton6.addEventListener('click',boton6Response);

function botonMenosResponse()
  {
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+"-";
  display.setAttribute("value", newvalue);
  }
    

let botonMenos=document.getElementById("btn-");
  botonMenos.addEventListener('click',botonMenosResponse);

function boton3Response()
  {
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+3;
  display.setAttribute("value", newvalue);
  }
    

let boton3=document.getElementById("btn3");
  boton3.addEventListener('click',boton3Response);

function boton2Response()
  {
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+2;
  display.setAttribute("value", newvalue);
  }


let boton2=document.getElementById("btn2");
  boton2.addEventListener('click',boton2Response);

function boton1Response()
  {
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+1;
  display.setAttribute("value", newvalue);
  }


let boton1=document.getElementById("btn1");
  boton1.addEventListener('click',boton1Response);

function botonPorResponse()
  {
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+"*";
  display.setAttribute("value", newvalue);
  }
    

let botonPor=document.getElementById("btn*");
  botonPor.addEventListener('click',botonPorResponse);

function boton0Response()
  {
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+0;
  display.setAttribute("value", newvalue);
  }


let boton0=document.getElementById("btn0");
  boton0.addEventListener('click',boton0Response);


function botonPuntoResponse()
  {
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+".";
  display.setAttribute("value", newvalue);
  }
    

let botonPunto=document.getElementById("btn.");
  botonPunto.addEventListener('click',botonPuntoResponse);

function botonIgualResponse()
  {
  let display=document.getElementById("display");
  let newvalue= eval(display.getAttribute("value"));
  display.setAttribute("value", newvalue);
  }
    

let botonIgual=document.getElementById("btn=");
  botonIgual.addEventListener('click',botonIgualResponse);

function botonDivisonResponse()
  {
  let display=document.getElementById("display");
  let newvalue= display.getAttribute("value")+"/";
  display.setAttribute("value", newvalue);
  }
    

let botonDivison=document.getElementById("btn/");
  botonDivison.addEventListener('click',botonDivisonResponse);


function botonBorrarResponse()
  {
  let display=document.getElementById("display");
  display.setAttribute("value", '');
  }
    

let botonBorrar=document.getElementById("btnBorrar");
  botonBorrar.addEventListener('click',botonBorrarResponse);


