/*Gestión de inventario en una tienda: 
Tienes dos arrays, uno que representa los productos en stock y otro que almacena los precios de los productos.
 Debes crear funciones que permitan agregar nuevos productos al inventario, eliminar productos agotados y calcular el valor total del inventario.
*/
let producto = [];
let precioDeProductos = [];

let opcion = 1;
while (opcion != 4) {
  opcion = parseInt(
    prompt(
      `1,agregar productos\n 2-elimninar productos agotados\n 3- calcular valor del inventario \n 4 -salir`
    )
  );
  switch (opcion) {
    case 1:
      agregarProductos();
      break;
    case 2:
      eliminarProductosAgotados();
      break;
    case 3:
     calcularValorInventario()
     break;

    default:
      break;
  }
}
function agregarProductos() {
  let nombre = prompt(`ingresa un producto`);
  let precio = parseInt(prompt(`ingrese el precio del producto`));

  producto.push(nombre);
  precioDeProductos.push(precio);
}
function eliminarProductosAgotados() {
  let agotado = prompt(`Introduce el producto agotado`);
  let caducado = producto.indexOf(agotado);
  if (caducado !== -1) {
    producto.splice(caducado, 1);
    precioDeProductos.splice(caducado, 1);
  } else {
    alert(`El producto no se encuentra en el inventario`);
  }
}
function calcularValorInventario() {
  let valorTotal = 0;
  for (let i = 0; i < precioDeProductos.length; i++) {
    valorTotal += precioDeProductos[i];
    
}
console.log(producto)
console.log(precioDeProductos)
}
