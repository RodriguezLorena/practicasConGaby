let persona    = "BART SIMPSON";
let domicilio  = "742 EVERGREEN";
let pais       = "USA";
let nacimiento = "02-11-70";
const codigo   = "B47U89RE243";
let carnet = "Codigo: "+codigo+" "+
             "Nombre: "+persona+" "+
             "Pais: "+pais+" "+
             "Nacimiento: "+nacimiento+" "+
             "Domicilio: "+domicilio;
console.log(carnet);



let nombre="Hernan Bravo";
let domicilio="Av. Lavalle 2371";
let ciudad="Virasoro";
let pais="Argentina";
const DNI="31445245";
let cliente="El cliente " + nombre + " con domicilio en " + domicilio + " de la ciudad de " + ciudad + " con número de DNI: " + DNI;

console.log(cliente);

let integrante1 = prompt('INGRESAR 1er INTREGANTE');
let integrante2 = prompt('INGRESAR 2do INTREGANTE');
let integrante3 = prompt('INGRESAR 3er INTREGANTE');
let integrante4 = prompt('INGRESAR 4to INTREGANTE');
let integrante5 = prompt('INGRESAR 5to INTREGANTE');
let familia =   "1) "+integrante1+" "+
                "2) "+integrante2+" "+
                "3) "+integrante3+" "+
                "4) "+integrante4+" "+
                "5) "+integrante5;
console.log(familia);


let integranteUno = prompt("Ingresar numero cliente");
let integranteDos= prompt("Ingrese numero de cliente");
let integranteTres = prompt("ingresar numero de cliente");

let cliente = "estan presentes los clientes numero " + integranteUno + " " + integranteDos + " " + integranteTres;
alert(cliente);

let precio = parseFloat(prompt('INGRESAR PRECIO'));
let descuento20 = precio - (precio  * 0.2);
let descuento30 = precio - (precio  * 0.3);
console.log(descuento20);
console.log(descuento30);


let precio = Number(prompt("ingresar precio"));
let descuento50 = precio - (precio * 0.5);
let descuento25 = precio - (precio * 0.25)

alert(descuento50);
alert(descuento25);

 let nombreIngresado= prompt("ingrese nombre")

if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))){
    alert("hola Ema SEPARADA");
}else{
    alert("no ingresaste");
}


    if(((nombreIngresado !="") && (nombreIngresado == "EMA")) || (nombreIngresado =="PATRICIA")){
        alert("hola CHICA junta")
    }else{
        alert("incorrecto");
    }


    let nombre=prompt("ingresar un nombre");
    let menganito= "bart";
    if(nombre == menganito){
        alert("fui yo" );
    }else{
        alert("yo no fui");
    }

    let solicitar = prompt("ingrese una tecla");
    if(solicitar ===  "y" || solicitar === "Y"){
        alert("correcto")
    }else{
        alert("incorrecto");
    }

    let numero = 1;

    while(numero !== 0){
        numero=Number(prompt("colocar un numero"))
        switch(numero){
            case 1: 
            alert("elegiste a Homero");
            break;
            case 2: 
            alert ("elegiste a Marge");
            break;
            case 3: 
            alert("elegiste a lisa");
            break;
            case 4: 
            alert ("alegiste Bart");
            break;
            default:
                alert("Error")
            break;
        }
    }


    let numero= Number(prompt("ingresa un numero"));

    if(numero >= 0 && numero <= 1000 ){
        alert("presupuesto bajo")

    }else if(numero <= 1001 && numero >= 3000 ){
        alert("presupuesto medio")
    }else if(numero > 3000){
        alert("presupuesto alto")
    }else{
        alert("error");
    }


    let productosUno = prompt("ingrese producto 1");
    let productosDos = prompt("ingrese producto 2");
    let productosTres=prompt("ingrese producto 3");
    let productosCuatro = prompt("ingrese producto 4");

    if(productosUno !== " " && productosDos !== " " && productosTres !== " " && productosCuatro !== " " ){
      alert("listado de productos" + productosUno + productosDos + productosTres + productosCuatro);
    }else{
        alert("arror, no ingresaste productos");
    }