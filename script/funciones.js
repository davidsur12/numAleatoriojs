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
                var estado=(checkbox.checked)?true : false;
                alert(generarNumeros(min, max + 1, cantidad , estado));


            } else {
               

                alert("la cantidad debe ser mayor a 0");
            }



        } else {
            alert("el numero minimo no puede superara el numero maximo");
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

    alert("I am an alert box!");

}

function validar() {
    var min = (document.getElementById("num1").value);
    var max = (document.getElementById("num2").value);
    var cantidad = (document.getElementById("num3").value);

    if (min.length > 0 && max.length > 0 && cantidad.length > 0) {
        min = parseInt(document.getElementById("num1").value);
        max = parseInt(document.getElementById("num2").value);
        cantidad = parseInt(document.getElementById("num3").value);

        //document.getElementById("result").innerHTML = "los campos estan llenos";
        return true;

    }
    else {
        //document.getElementById("result").innerHTML = "algunos de los campos estan vacios";
        alert("ingresa todos los valores");
        return false;

    }




}

function numMinMax(min, max) {

    if (min > max) {


        return false;
    }
    return true;

}

function generarNumeros(min, max, cantidad , estado) {
    var lista = [];
    if (cantidad == 1) {


        document.getElementById("result").innerHTML = parseInt(Math.random() * (max - min) + min);

    }
    else {


        //var num = 0;

        if(estado){

            //alert("checlbox true");
            return "checkbox true";
            //esta opcion se valida cuando la cantida no es mayor o es igual a la resta de max-min tal cual
        }
        else{
            for (var i = 0; i < cantidad; i++) {
                lista.push(parseInt(Math.random() * (max - min) + min));
    
            }

        }
       

    }

    return lista;

}