const productos = [
    {nombre:"fideos", precio:600},
    {nombre:"arroz", precio:850},
    {nombre:"yerba", precio:2000},
    {nombre:"mayonesa", precio:1000},
    {nombre:"galletas", precio:550},
];

let carro = []

let seleccion = prompt("¿Desea conocer nuestras ofertas? Ingrese si o no")

while (seleccion !="si" && seleccion != "no"){
    alert("Debe ingresar si o no")
    seleccion = prompt("Ingrese si o no")

}
if(seleccion == "si"){
   alert("Nuestras ofertas de la semana")
    let listaProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(listaProductos.join("\n"))
    
}else if (seleccion == "no"){
    alert("Gracias por visitarnos!")
}



while(seleccion != "no"){
    let producto = prompt("Agrega un producto al carrito");
    let precio = 0;

    if(producto=="fideos" || producto=="arroz" ||producto=="yerba" ||producto=="mayonesa" ||producto=="galletas" )
        {
        switch(producto){
            case "fideos":
                precio = 600;
            break;
            case "arroz":
                precio = 850;
            break;
            case "yerba":
                precio = 2000;
            break;
            case "mayonesa":
                precio = 1000;
            break;
            case "galletas":
                precio = 550;
            break;
            default:
                break;
        }

        let unidades = parseInt(prompt("Ingrese cantidad"))
        carro.push({producto,unidades,precio})
        console.log(carro)

    }else{
        alert("ese producto no esta en oferta")
    }

    seleccion = prompt("desea seguir comprando?")
    while(seleccion =="no"){
        alert("Muchas gracias por su compra")
        carro.forEach((carroFinal) => {
            console.log(`producto: ${carroFinal.producto},unidades: ${carroFinal.unidades}, total a pagar por producto ${carroFinal.unidades * carroFinal.precio}`)

        });
        break;
    }

}

const total = carro.reduce((acc, el) => acc + el.precio * el.unidades,0)

alert("El monto a pagar es de: $ " + total );
