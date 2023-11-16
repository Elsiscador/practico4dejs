/*
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad.
 Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro {
    constructor(ISBN, titulo, autor, numPaginas) {
      this._ISBN = ISBN;
      this._titulo = titulo;
      this._autor = autor;
      this._numPaginas = numPaginas;
    }
  
    
    get ISBN() {
      return this._ISBN;
    }
  
    set ISBN(ISBN) {
      this._ISBN = ISBN;
    }
  
    get titulo() {
      return this._titulo;
    }
  
    set titulo(titulo) {
      this._titulo = titulo;
    }
  
    get autor() {
      return this._autor;
    }
  
    set autor(autor) {
      this._autor = autor;
    }
  
    get numPaginas() {
      return this._numPaginas;
    }
  
    set numPaginas(numPaginas) {
      this._numPaginas = numPaginas;
    }
  
    mostrarLibro() {
      console.log(`El libro ${this.titulo} con el  ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas.`);
    }
  }
  
  const libro1 = new Libro("2000", "La Fuga del Invalido", "M.A.G. de RollingCode", 1000);
  const libro2 = new Libro("300", "El Misterio De La silla Invisible", " Satoru Goyo", 500);
  
 
  libro1.mostrarLibro();
  libro2.mostrarLibro();
  
 
  if (libro1.numPaginas > libro2.numPaginas) {
    console.log(`${libro1.titulo} Tiene más páginas.`);
  } else if (libro1.numPaginas < libro2.numPaginas) {
    console.log(`${libro2.titulo} Tiene más páginas.`);
  } else {
    console.log("Ambos libros tienen la misma cantidad de páginas.");
  }
  