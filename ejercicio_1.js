

function Euro_dolar(){
    //var doc = document.getElementById("test").innerHTML="Texto cambiado"
    let euros = parseFloat(prompt("Ingrese la cantrtidad de euros a convertir: "))
    let dolares = 1.0861

    convercion = euros * dolares
    //document.getElementById("test").innerHTML= euros+" son igual a: "+convercion.toFixed(2)
    alert("€"+euros+" son igual a: $"+convercion.toFixed(2))
    
}

function grados(){
    let c = parseFloat(prompt("Ingrese los grados celsius a convertir: "))

    let conver = (c * 9/5)+32
    alert(c+"°C son igual  a: "+conver.toFixed(2) +"°F")
}

function change_color(){
    var doc = document.getElementById("caja")
    doc.style.background = "red"
    doc.style.color = "white"
}

function send_box(){
    let cliente = prompt("Ingrese su nombre: ")
    let tamanio = Number(prompt("Ingrese el numero de la opcion deseada: 1-(S)pequeña, 2- (M)mediana, 3-(L)Grande: "))
    let mensaje = prompt("Ingrse un mensaje: ")

    switch (tamanio){
        case 1:
            alert("Cliente: "+cliente+" tamaño de la caja: pequeña, mensaje: "+mensaje)
            break
        case 2:
            alert("Cliente: "+cliente+" tamaño de la caja: mediana, mensaje: "+mensaje)
            break
        case 3:
            alert("Cliente: "+cliente+" tamaño de la caja: grande, mensaje: "+mensaje)
            break
        default:
            alert("El tamaño no es reconocido.")
            
    }
    
        



    
}