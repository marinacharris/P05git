//crear arreglo de palabras
let palabras = ["computador", "software", "identacion", "objetos"];
document.write(Math.floor(Math.random()*palabras.length));

//se escoje una palabra al azar
let palabraincognita = palabras[Math.floor(Math.random()*palabras.length)];

//llenando lestrasincognitas con "_";
let letrasincognitas = [];
for (i=0; i<palabraincognita.length; i++){
    letrasincognitas[i]="_";
}
//ciclo del juego
let intentos = 0;
let cantidadletras = palabraincognita.length;
while(cantidadletras>0 && intentos<6){
    //Mostrar progreso del juego
    alert(letrasincognitas.join(" "));
    let letraingresada= prompt("Adivina una letra o haz click en cancelar para finalizar");
    if (letraingresada ==null){
        //el juego termina     
        // 1 === "1" // false    1 !== "1"  // true
        //1 == "1" // true    1 != "1"  // false
        break
    }else if(letraingresada.length !== 1){
        alert("Solo introduzca una letra");
    }else{
        //actualiza el estado del juego conla letra ingresada
        for(i=0; i<=palabraincognita.length; i++){
            if(palabraincognita[i] == letraingresada){
                letrasincognitas[i]= letraingresada;
                cantidadletras--;
            }
        }
    }
    intentos++;
}
if(cantidadletras ==0){
    alert(letrasincognitas.join(" "));
    alert("Ganaste");
}else{
    alert("Te esperamos en otra ocasión");
}

