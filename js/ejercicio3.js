/*Catálogo de biblioteca: Tienes un array que almacena títulos de libros en una biblioteca.
 Debes crear funciones que permitan a los usuarios buscar libros por título, 
verificar si un libro específico está disponible para préstamo 
y llevar un registro de la disponibilidad de los libros
*/

let biblioteca =[
    {titulo:"El señor de los anillos", disponible: true},
    {titulo:"harry potter ", disponible:false},
    {titulo:"el rincon de la casa redonda", disponible:true},
    {titulo:"La bala que doblo en la esquina",disponible:false},
    {titulo:"La mirada de un ciego",disponible:true}

 ]

 function verificarDisponibilidad(libro){

    let libroEncontrado = biblioteca.find((libroEnBiblioteca)=> libroEnBiblioteca.titulo.toLowerCase()=== libro.toLowerCase())

    if(libroEncontrado){
        return libroEncontrado.disponible?
        `${libro},Se encuentra Disponible`:`${libro}, No se encuentra Disponible`
    }else{
        return "Libro no encontrado"
    }
 }

function regitrosDeLibros(){
    let librosDisponibles = biblioteca.filter((libro)=> libro.disponible)

    if(librosDisponibles.length > 0){
        return librosDisponibles.map((libro)=> libro.titulo)
    }else{
        return " no hay libros disponibles"
    }
}
console.log(verificarDisponibilidad("la mirada de un ciego"))
console.log(` Los libros disponibles son los siguientes: ${regitrosDeLibros()}`)
