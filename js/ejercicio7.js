/*3-Escribe una clase que permita crear distintos objetos “rectángulos”,
 con las propiedades de alto y ancho,
 mas los métodos necesarios para modificar y mostrar sus propiedades,
 calcular el perímetro y el área
*/

class Rectangulo {
    constructor(alto,ancho){
    this.alto=alto
    this.ancho=ancho

}

modificar(nuevoAlto,nuevoAncho){
    this.alto = nuevoAlto
    this.ancho = nuevoAncho

}

propiedades(){
    console.log(` el alto de un rectangulos es ${this.alto} y el ancho ${this.ancho}`)

}

calcularPerimetro(){
    return console.log( ` El perimetro de un rectangulo es : ${2* (this.alto + this.ancho)}`  )
}

calcularArea(){
    return console.log(`El Area del rectangulo es : ${this.alto * this.ancho}`)

}
}

let nuevoRectangulo = new  Rectangulo (20,30)

nuevoRectangulo.propiedades()

nuevoRectangulo.modificar(10,50)

nuevoRectangulo.propiedades()

nuevoRectangulo.calcularPerimetro()
nuevoRectangulo.calcularArea()
