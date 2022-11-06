

function vaidarNumUnicos() {

    var checkbox = document.getElementById('cbox1');
    if (checkbox.checked) {


        var intro = document.getElementById('num3');
        var min = parseInt(document.getElementById("num1").value);
        var max = parseInt(document.getElementById("num2").value);
        var cantidad = parseInt(document.getElementById("num3").value);

        //alert("cantidad superior cantidad = " + cantidad + " maximo =" + (max - min +1));

        if (cantidad > (max - min + 1)) {
            var result = document.getElementById("result");

            intro.value = (max - min + 1);
            intro.style.color = '#000';
            //   intro.style.backgroundColor = "#F3FF00";//amarillo
            intro.style.backgroundColor = "#fff";//amarillo
            //alert("cantidad superior cantidad = " + cantidad + " maximo = " + (max - min +1));
            result.value = "cantidad " + cantidad + " cantidad maxima " + (max - min + 1);
            alert("cantidad " + cantidad + " cantidad maxima " + (max - min + 1));

        }
        else {

            intro.style.color = '#000';
            intro.style.backgroundColor = "#FFF";
        }


    }
    else {
        if (!checkbox.checked && cantidad > 1000) {
            //no se debe superar los 1000 digitos
            var intro = document.getElementById('num3');
            intro.style.color = '#000';
            intro.style.backgroundColor = "#D0412A";//rojo


        }
        else if (!checkbox.checked && cantidad <= 1000) {
            //si el checbox no esta activado y  la cantidad es menor o igual a 1000
            var intro = document.getElementById('num3');
            intro.style.color = '#000';
            intro.style.backgroundColor = "#FFF";

        }



    }
}


function cambioCantidad() {


    // var cantidad = parseInt(document.getElementById("num3").value);
    var intro = document.getElementById('num3');



    intro.oninput = function () {
        // num3.innerHTML = input.value;

        var min = parseInt(document.getElementById("num1").value);
        var max = parseInt(document.getElementById("num2").value);


        var cantidad = parseInt(document.getElementById("num3").value);
        var intro = document.getElementById('num3');
        var checkbox = document.getElementById('cbox1');

        if (cantidad > 1000) {
            //si la cantidad es mayor amil debe haber una alerta

            intro.style.color = '#Fff';
            intro.style.backgroundColor = "#000";//negro


        }

        else if (checkbox.checked && cantidad > (max - min + 1)) {


            //si son numeros unicos y la cantdad supera los numeros maximos

            intro.style.color = '#Fff';
            intro.style.backgroundColor = "#E5F00F";
        }

        else if (!checkbox.checked && cantidad < 1000) {


            //si son numeros unicos y la cantdad supera los numeros maximos

            intro.style.color = '#000';
            intro.style.backgroundColor = "#FFF";
            // alert("deberia esta en fondo blanco");
        }

        else {

            intro.style.color = '#000';
            intro.style.backgroundColor = "#FFF";
        }
    };



}

function cambioNumMax() {

    num2.oninput = function () {
        // num3.innerHTML = input.value;
        var m = parseInt(document.getElementById("num2").value);
        var intro = document.getElementById('num2');
        if (m > 1000000) {

            intro.style.color = '#Fff';
            intro.style.backgroundColor = "#EA1414";//rojo

            //alert("numero mayor");
        }
        else {

            intro.style.color = '#000';
            intro.style.backgroundColor = "#FFF";
        }
    };

}
function numAleatorico() {
    //funcion principal
    var min = parseInt(document.getElementById("num1").value);
    var max = parseInt(document.getElementById("num2").value);
    var cantidad = parseInt(document.getElementById("num3").value);
    var checkbox = document.getElementById('cbox1');

    //validar que los campos no esten vacios
    if (validar()) {
        //validar que num minimo no sea mayor que num maximo
        if (numMinMax(min, max)) {
            //cantidad de numeros a imprimir
            //var cantidad=(document.getElementById("num3").length);
            if (cantidad > 0) {
                var estado = (checkbox.checked) ? true : false;
                //  alert(generarNumeros(min, max + 1, cantidad, estado));
                addEtiqueta(min, max + 1, cantidad, estado);

            } else {


              //  alert("la cantidad debe ser mayor a 0");

                Swal.fire({
                    title: 'la cantidad debe ser mayor a 0',
                 
                    icon: 'info',
                    confirmButtonText: 'OK'
                  })
            }



        } else {
           // alert("el numero minimo no puede superara el numero maximo");
            Swal.fire({
                title: 'el numero minimo no puede superara el numero maximo',
             
                icon: 'info',
                confirmButtonText: 'OK'
              })


        }
    }


    //validar que los numeros se generen
    // alert("I am an alert box!");
    // document.getElementById("name").value = "Enviar los datos";
    // document.getElementById("result").innerHTML = Math.random() * (max - min) + min;
    //$("#result").text(" is valid :)");
    // return   Math.random() * (max - min) + min;
}

function numAleatorico2() {

   // alert("I am an alert box!");

}

function resetStyle() {
    elem = document.getElementById(elemId);
    elem.style.background = '#000';
}


function validar() {

    //en este apartado se valida que los campos esten llenos y que no superen los valores correspondentes
    //en caso de los no ser asi se procedera a pedir al usuario que llene todos los campos
    var min = (document.getElementById("num1").value);
    var max = (document.getElementById("num2").value);
    var cantidad = (document.getElementById("num3").value);
    var checkbox = document.getElementById('cbox1');

    if (min.length > 0 && max.length > 0 && cantidad.length > 0) {
        //osea que ingreso los valores procedo a obtener los valores
        min = parseInt(document.getElementById("num1").value);
        max = parseInt(document.getElementById("num2").value);
        cantidad = parseInt(document.getElementById("num3").value);
        checkbox=document.getElementById("cbox1").value;
      
        //document.getElementById("result").innerHTML = "los campos estan llenos";

        if (cantidad > (max - min)  && checkbox==true) {
            document.getElementById("num3").value = (max - min + 1);

        }
        if (max > 1000000) {
           // alert("el maximo puede ser de 1000000");

           Swal.fire({
            title: 'el numero maximo no puede ser mayor a 1000000',
         
            icon: 'info',
            confirmButtonText: 'OK'
          })

            return false;
        }
        if (cantidad > 1000) {
           // alert("la cantidad  puede ser de 1000");
           Swal.fire({
            title: 'la cantidad de numeros generados no pueden ser mas de 1000',
         
            icon: 'info',
            confirmButtonText: 'OK'
          })
            return false;
        }

        return true;

    }
    else {
        //document.getElementById("result").innerHTML = "algunos de los campos estan vacios";
       // alert("ingresa todos los valores");
       Swal.fire({
        title: 'Ingresa todos los valores',
     
        icon: 'info',
        confirmButtonText: 'OK'
      })

        return false;

    }




}

function numMinMax(min, max) {

    if (min > max) {


        return false;
    }
    return true;

}

function generarNumeros(min, max, cantidad, numunicos) {


    /*
    funcion que se encarga de generar una lista con los numeros aleatorios */
    
    
    var lista = [];
    if (cantidad == 1) {
//si la cnatidad deseada es 1 solo se devuelve una lista con un elemento

      //  document.getElementById("result").innerHTML = parseInt(Math.random() * (max - min) + min);
        lista.push(parseInt(Math.random() * (max - min) + min));
    }
    else {


        //var num = 0;

        if (numunicos) {


            //return "checkbox true";
            //esta opcion se valida cuando la cantida no es mayor o es igual a la resta de max-min tal cual

            if (cantidad <= ((max - min))) {
             

                //alert("numeros unicos sin cambios cantidad" + cantidad + "  total numeros a generar " + ((max - min)));
                //los numeros a generar seran iguales o menores aal numero max
                //alert("numeros unicos con cambios cantidad " + cantidad + " minimo " + min + " maximo " + max);
                return numUnicos(min, max, cantidad, lista);//me retorna la lista con numeros unicos

            }
            else {
                cantidad = (max - min);
                document.getElementById("num3").value = cantidad;
               // alert("numeros unicos con cambios " + cantidad + " minimo " + min + " maximo " + max);
               
               Swal.fire({
                title: 'La cantidad de números a obtener no puede ser mayor al numero máximo ',
             
                icon: 'info',
                confirmButtonText: 'OK'
              })

                return numUnicos(min, max, cantidad, lista);



            }

        }
        else {
            for (var i = 0; i < cantidad; i++) {
                lista.push(parseInt(Math.random() * (max - min) + min));

            }

        }


    }

    return lista;

}

function numUnicos(min, max, cantidad, lista) {

    let num = 0;
    let numRepetido = false;


    for (var i = 0; i < cantidad; i++) {


        if (lista.length == 0) {
            //es primera vez que  se ingresa un nuemro al areglo
            num = parseInt(Math.random() * (max - min) + min);
            lista.push(num);

        }

        else {

            num = parseInt(Math.random() * (max - min) + min);
            //verificar si ese numero ya se agrego de ser asi se genera otro nuemro de lo contrario se lo agrega
            for (j = 0; j < lista.length; j++) {
                if (num == lista[j]) {

                    numRepetido = true;
                }

            }
            if (numRepetido) {

                i = i - 1;
                numRepetido = false;

            }
            else {
                lista.push(num);
            }
            //lista.push(parseInt(Math.random() * (max - min) + min));

        }
    }


    return lista;
}

var cont=0;
function addEtiqueta(min, max, cantidad, estado) {
/*
esta funcion se encarga de llamar a las funciones y mstarr el resultado
se debe borrar los numeros generados anteriormente para infresa los nuevos se puede buscar informacion
//como Nodo.removeChild()

  if(cont>0){
    var d = document.getElementById("result");
    var d_nested = document.getElementById("num");
    var throwawayNode = d.removeChild(d_nested);

   
}

existe un error que al generar los numeros por primera vez con numeros no repetidos al 
volver a precionar el boton  la cantidad se cambia a lo maximo que se puede generar
const titulo = document.createElement("h2");
  titulo.classList.add("result");
  titulo.textContent = "Numeros generados \n";
  document.querySelector("body").appendChild(titulo);
*/



  div = document.getElementById('n');
  div.style.display = '';

document.getElementById("result").innerHTML="";
//document.getElementById("numobtenido").value = "Numeros generados";
//document.getElementById('numobtenido').innerHTML= 'Numeros generados';


  

  const salto = document.createElement("br");
  salto.classList.add("result");
  document.querySelector(".result").appendChild(salto);


   cont++;
   div = document.getElementById('result');
    div.style.display = '';


    var capa = document.getElementById("result");
    var lista = generarNumeros(min, max, cantidad, estado);

    for (var i = 0; i < lista.length; i++) {
        var border = document.createElement("div");
        var h1 = document.createElement("h1");
        var h3 = document.createElement("h3");
        h3.innerHTML = i + 1;//pos
        h1.innerHTML = lista[i];//num
        h3.classList.add("pos");
        border.classList.add("num");
        border.setAttribute("id","border");
        border.appendChild(h1);
        border.appendChild(h3);
        capa.appendChild(border);


    }



}