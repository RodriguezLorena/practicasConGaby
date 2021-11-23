// let persona    = "BART SIMPSON";
// let domicilio  = "742 EVERGREEN";
// let pais       = "USA";
// let nacimiento = "02-11-70";
// const codigo   = "B47U89RE243";
// let carnet = "Codigo: "+codigo+" "+
//              "Nombre: "+persona+" "+
//              "Pais: "+pais+" "+
//              "Nacimiento: "+nacimiento+" "+
//              "Domicilio: "+domicilio;
// console.log(carnet);



// let nombre="Hernan Bravo";
// let domicilio="Av. Lavalle 2371";
// let ciudad="Virasoro";
// let pais="Argentina";
// const DNI="31445245";
// let cliente="El cliente " + nombre + " con domicilio en " + domicilio + " de la ciudad de " + ciudad + " con número de DNI: " + DNI;

// console.log(cliente);

// let integrante1 = prompt('INGRESAR 1er INTREGANTE');
// let integrante2 = prompt('INGRESAR 2do INTREGANTE');
// let integrante3 = prompt('INGRESAR 3er INTREGANTE');
// let integrante4 = prompt('INGRESAR 4to INTREGANTE');
// let integrante5 = prompt('INGRESAR 5to INTREGANTE');
// let familia =   "1) "+integrante1+" "+
//                 "2) "+integrante2+" "+
//                 "3) "+integrante3+" "+
//                 "4) "+integrante4+" "+
//                 "5) "+integrante5;
// console.log(familia);


// let integranteUno = prompt("Ingresar numero cliente");
// let integranteDos= prompt("Ingrese numero de cliente");
// let integranteTres = prompt("ingresar numero de cliente");

// let cliente = "estan presentes los clientes numero " + integranteUno + " " + integranteDos + " " + integranteTres;
// alert(cliente);

// let precio = parseFloat(prompt('INGRESAR PRECIO'));
// let descuento20 = precio - (precio  * 0.2);
// let descuento30 = precio - (precio  * 0.3);
// console.log(descuento20);
// console.log(descuento30);


// let precio = Number(prompt("ingresar precio"));
// let descuento50 = precio - (precio * 0.5);
// let descuento25 = precio - (precio * 0.25)

// alert(descuento50);
// alert(descuento25);

//  let nombreIngresado= prompt("ingrese nombre")

// if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))){
//     alert("hola Ema SEPARADA");
// }else{
//     alert("no ingresaste");
// }


//     if(((nombreIngresado !="") && (nombreIngresado == "EMA")) || (nombreIngresado =="PATRICIA")){
//         alert("hola CHICA junta")
//     }else{
//         alert("incorrecto");
//     }


//     let nombre=prompt("ingresar un nombre");
//     let menganito= "bart";
//     if(nombre == menganito){
//         alert("fui yo" );
//     }else{
//         alert("yo no fui");
//     }

//     let solicitar = prompt("ingrese una tecla");
//     if(solicitar ===  "y" || solicitar === "Y"){
//         alert("correcto")
//     }else{
//         alert("incorrecto");
//     }

//     let numero = 1;

//     while(numero !== 0){
//         numero=Number(prompt("colocar un numero"))
//         switch(numero){
//             case 1: 
//             alert("elegiste a Homero");
//             break;
//             case 2: 
//             alert ("elegiste a Marge");
//             break;
//             case 3: 
//             alert("elegiste a lisa");
//             break;
//             case 4: 
//             alert ("alegiste Bart");
//             break;
//             default:
//                 alert("Error")
//             break;
//         }
//     }


    // let numero= Number(prompt("ingresa un numero"));

    // if(numero >= 0 && numero <= 1000 ){
    //     alert("presupuesto bajo")

    // }else if(numero <= 1001 && numero >= 3000 ){
    //     alert("presupuesto medio")
    // }else if(numero > 3000){
    //     alert("presupuesto alto")
    // }else{
    //     alert("error");
    // }


    // let productosUno = prompt("ingrese producto 1");
    // let productosDos = prompt("ingrese producto 2");
    // let productosTres=prompt("ingrese producto 3");
    // let productosCuatro = prompt("ingrese producto 4");

    // if(productosUno !== " " && productosDos !== " " && productosTres !== " " && productosCuatro !== " " ){
    //   alert("listado de productos" + productosUno + productosDos + productosTres + productosCuatro);
    // }else{
    //     alert("arror, no ingresaste productos");
    // }



    // let numero = parseInt(prompt("ingrese un numero"));
    // let texto = prompt("ingrese un texto");

    // for(let i = 1; i <= numero; i ++){

    //     console.log(texto);

    // }

    // let numero= parseInt(prompt("ingrese un numero"));

    // for(let i= 0; i <= numero; i++){
    //     if(i === 4){
    //        break;
    //     }
    //     console.log("lado");
    // }

   
    // let alumno = "";
    // for(let i = 1; i <= 10; i++){
    //    alumno += prompt("ingrese nombre");
    // }
    // alert(alumno);


    // let nombre = prompt("ingrese un nombre");
    // let nombresIngresados= " ";
    // while(nombre !== "VOLDEMORT"){
    //   nombresIngresados += nombre;
    //   nombre = prompt("ingrese un nombre");
    // }
    // alert(nombresIngresados); // RE LEER, ME COSTO HACERLO.
    
    

//   let entrada= prompt("ingrese un numero del 1 al 4");
//   const productoUno = "tomate";
//   const productoDos = "papa";
//   const productosTres = "carne";
//   const productoCuatro = "pollo";

//   while(entrada !== "ESC"){
//       switch(entrada){
//           case "1":
//               alert(productoUno);
//               break
//           case "2":   
//             alert(productoDos); 
//               break  
//           case "3":
//               alert(productoTres);
//               break
//           case "4":
//               alert(productoCuatro);
//               break
//               default:
//                   alert("error");
//                 break          

//       }
//       entrada= prompt("ingrese un numero del 1 al 4");
//   }



    // function obtenerDato(){
    //     let datosQueIngresa=prompt("ingrese un numero");
    //     if(datosQueIngresa === "ESC"){
    //         return datosQueIngresa
    //     }
    //     if(parseInt(datosQueIngresa) < Infinity){
    //         console.log(typeof parseInt(datosQueIngresa))
    //         return parseInt(datosQueIngresa)
    //     }
    // }
    // let datosQueIngresa= obtenerDato();
    // const productoUno= "tomate";
    // const productoDos = "papa";
    // const productoTres = "carne";
    // const productoCuatro = "pollo";

    // while(datosQueIngresa !== "ESC"){
    //     switch (datosQueIngresa) {
    //         case 1:
    //             alert(productoUno);
    //             break;

    //         case 2:
    //             alert(productoDos);
    //             break;
    //         case 3:
    //             alert(productoTres);
    //             break

    //         case 4: 
    //             alert(productoCuatro);
    //             break

    //         default:
    //             alert("Debes colocar un numero valido o ESC");
    //             break;
    //     }
    //    datosQueIngresa = obtenerDato();
    // }


    // function calculadora(primerNumero, operacion,  segundoNumero) {
    //     switch (operacion) {
    //         case "+":
    //             return primerNumero + segundoNumero;
    //             break;
    //         case "-":
    //             return primerNumero - segundoNumero;
    //             break;
    //         case "*":
    //             return primerNumero * segundoNumero;
    //             break;
    //         case "/":
    //             return primerNumero / segundoNumero;
    //             break;
    //         default:
    //             return 0;
    //             break;
    //     }
    // }
    // console.log(calculadora(10, "*", 5));
    // alert(calculadora(10, "*", 5));

    // function entrada(){
    //     let ingresarDatos = prompt("ingrese dato");
    //     return ingresarDatos
    // }
    // alert(entrada());

    // function procesamiento(valor){
    //     let entrada=Number(prompt("ingrese un numero"))
    //     return entrada * valor;
    // }

    // alert(procesamiento(4));

    // function entrada(){
    //     return prompt("INGRESAR DATO");
    // }
    
    // function procesamiento(valor){
    //     return "LA ENTRADA ES "+valor
    // }
    
    // function salida(valor){
    //     alert(valor);
    // }
  
    // salida(procesamiento(entrada())); //verlo, me cuesta entender.


    // function redondeo(valor){
    //     return Math.round(valor)
    // }
   
   
    // for (let i = 0; i < 5; i++) {
    //     let entrada = prompt("INGRESAR NUMERO DECIMAL");
    //     alert(redondeo(entrada));
    // }

   
   
    // function impuesto(precio, porcentaje){
    //  let impuesto =(precio * porcentaje) / 100;
    //  return precio + impuesto;
    // }
    
    // for(let i = 1; i <=5; i++){
    //     let adquirirPrecio= Number(prompt("ingrese precio"));
    //     let adquirirPorcentaje = Number(prompt("ingrese porcentaje"))
    //     alert(impuesto(adquirirPrecio,adquirirPorcentaje));
    // }

    // function impuesto(precio, porcentaje){
    //     return precio + ((precio * porcentaje)/100)
    // }
     
    // for (let index = 0; index < 5; index++) {
    //     let resultado = impuesto(parseFloat(prompt("INGRESAR PRECIO")),parseFloat(prompt("INGRESAR %")));
    //     alert(resultado);
    // }
   

    

//     function cotizarDolar(pesos){
//         const DOLAROFICIAL= 100.45;
//         return pesos / DOLAROFICIAL;
//     }

//    console.log(cotizarDolar(500));

//    function cotizarPesos(dolar){
//        const PESOOFICIAL = 0.00995520159;
//        return dolar/PESOOFICIAL;
//    }

//    console.log(cotizarPesos(1));




// const COTIZACION_DOLAR = 100.45;
// const cotizarDolar = (pesos) => pesos / COTIZACION_DOLAR;
// const cotizarPesos = (dolar) => dolar * COTIZACION_DOLAR;
// let seleccion = prompt("SELECCIONAR COTIZACION \n 1 - DOLARES A PESOS \n 2 -  PESOS A DOLAR ");
// let valor = prompt("VALOR");
// switch (seleccion) {
//     case "1":
//         alert(cotizarPesos(valor));
//         break;
//     case "2":
//         alert(cotizarDolar(valor));
//         break;
//     default:
//         break;
// }


// function validacion(cadena){
//     if(cadena !== ""){
//         return true;
//     }
//     return false;
// }



// let datoIngresado = prompt("ingrese una cadena de texto");
// while(datoIngresado !== "ESC"){
   
//     alert(validacion(datoIngresado));
//     datoIngresado = prompt("ingrese una cadena de texto");
   
// }

// const months = ['Jan', 'March', 'April', "JSJSJS"];
// months.splice(1, 1);
// // replaces 1 element at index 4
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "May"]


// class Producto {
//     constructor(nombre, precio) {
//         this.nombre  = nombre.toUpperCase();
//         this.precio  = parseFloat(precio);
//         this.vendido = false;
//     }
//     sumaIva() {
//         this.precio = this.precio * 1.21;
//     }
// }
//Declaramos un array de productos para almacenar objetos
// const productos = [];
// productos.push(new Producto("arroz", "125"));
// productos.push(new Producto("fideo", "70"));
// productos.push(new Producto("pan", "50"));
// //Iteramos el array con for...of para modificarlos a todos
// for (const producto of productos)
//     producto.sumaIva();


//     class Tienda{
//         constructor(nombre, direccion, propietario, rubro){
//             this.nombre = nombre;
//             this.direccion = direccion;
//             this.propietario = propietario;
//             this.rubro = rubro;
//         }
//         estaAbierto(hora){
//             if((hora >= 8 && hora <= 12)|| (hora >= 15 && hora <= 19)){
//                 return true;
//             }
//             return false;
//         }   
//         esPropieatrio(nombre){
//             if(nombre === this.propietario){
//                return true
//             }
//             return false
//         }
        
//     }

//     const MORENA = new Tienda("Morena", "Lavalle 2371", "HERNAN", "deportiva");
//     const AFRODITA= new Tienda("Afrodita", "Lavalle 2370", "OFELIA", "Lenceria");
//     const ANABENDITA= new Tienda("Ana Bendita", "Cocomarola", "ADRIANA", "boutique");

//     console.log(MORENA);
//     console.log(AFRODITA);
//     console.log(ANABENDITA);


   
//     // let tiendasIngresadas= "";

//     // for(let i = 1; i <= 5; i++){
//     //     const TIENDADEUSUARIO= new Tienda(prompt("ingrese nombre de la tiena"), 
//     //                                       prompt("ingrese direccion"), 
//     //                                       prompt("ingrese el nombre del propietario"),
//     //                                       prompt("ingrese el rubro"));
//     //         tiendasIngresadas+= "Tienda: "+TIENDADEUSUARIO.nombre+" "+ "Direccion: "+TIENDADEUSUARIO.direccion+" "+"Propitario: "+TIENDADEUSUARIO.propietario+" "+"rubro: "+TIENDADEUSUARIO.rubro+"\n";

//     // }
//     // alert(tiendasIngresadas);


  
//     // const TIENDANUEVA= new Tienda("PELUCHIN", "ARTURO NAVAJAS", "PATRICIA", "LIMPIEZA");

//     // for(let i =1; i <= 3; i++){
//     //     const horaDeUsuario = Number(prompt("ingrese una hora"));
//     //         if(TIENDANUEVA.estaAbierto(horaDeUsuario)){
//     //             alert("LA TIENDA ESTA ABIERTA A LAS "+ horaDeUsuario)
//     //         }else{
//     //             alert("LA TIENDA ESTA CERRADA A LAS "+ horaDeUsuario)
//     //         }
        
//     // }

//    for(let i = 0; i < 5; i++){
//        let nombreIngresadoPorUsuario= prompt("ingrese el nombre del propietario").toUpperCase()
//        if((MORENA.esPropieatrio(nombreIngresadoPorUsuario)) || (AFRODITA.esPropieatrio(nombreIngresadoPorUsuario)) || (ANABENDITA.esPropieatrio(nombreIngresadoPorUsuario))){
//            alert(nombreIngresadoPorUsuario + " es propietario de la tienda");
//        }else{
//            alert(nombreIngresadoPorUsuario + " no es propietario de la tienda");
//        }       
//    }


    class Cliente{
        constructor(nombre, presupuesto, tarjeta, telefono){
            this.nombre = nombre;
            this.presupuesto = parseFloat(presupuesto);
            this.nombre = tarjeta;
            this.telefono = telefono;
        }
        transferirDinero(valor){
            if((this.presupuesto > 0) && (valor < this.presupuesto)){
                this.presupuesto -= valor;
                return valor;
            }else{
                return 0;
            }  
        }   
    }

    const CLIENTEUNO = new Cliente("Aguirre Feliza", 10000, true, "47839393");
    const CLIENTEDOS = new Cliente("Lindolfo Ayala", 5000, true, "7484573");
    const CLIENTETRES= new Cliente("Ayala Maximiliano", 4000, false, "29448382");

    for(let i =0; i < 5; i++){
        let valorAIngresar= parseInt(prompt("ingresa un valor"));
        if(CLIENTEUNO.transferirDinero(valorAIngresar)){
            alert("le alcanza el presupuesto de " + valorAIngresar);
        }
        alert("no te alcanza, pobre!!!")
      
    }
    
