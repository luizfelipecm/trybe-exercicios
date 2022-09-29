document.getElementById("header-container").style.backgroundColor= "green";

let lista = document.getElementsByClassName("urgent");
for(let i = 0; i<lista.length; i++){
    lista[i].style.backgroundColor = "purple";
}

let lista2 = document.getElementsByClassName("emergency-tasks");
for(let i=0; i<lista2.length; i++){
    lista2[i].style.backgroundColor = "pink";
}

let lista3 = document.getElementsByClassName("non-urgent");
for(let i=0; i<lista3.length; i++){
    lista3[i].style.backgroundColor = "black"
}

let lista4 = document.getElementsByClassName("no-emergency-tasks");
for(let i=0; i<lista4.length; i++){
    lista4[i].style.backgroundColor = "yellow";
}

document.getElementsByTagName("footer")[0].style.backgroundColor="darkgreen"