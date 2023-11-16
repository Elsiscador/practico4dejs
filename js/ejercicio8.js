/*
Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código,
 nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos
 instanciados.

*/

class Producto {
    constructor(codigo,nombre,precio){
        this.codigo=codigo
        this.nombre=nombre
        this.precio=precio
    }

    imprimirDatos(){
        console.log(`el codigo es ${this.codigo},el nombre es ${this.nombre}, el precio es ${this.precio} `)


    }
    
}

const producto1 = new Producto (109,"nene",100);
const producto2 = new Producto (10,"rodrigo",500);
const producto3 = new Producto (20,"fafita",300);

const losProductos = [producto1,producto2,producto3];


losProductos.forEach(producto =>{
    producto.imprimirDatos();
});