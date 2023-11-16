/*
 Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

*/

class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, ano_nacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.ano_nacimiento = ano_nacimiento;
    }
  
    mostrarGeneracion() {
      let generacion = "";
      let rasgo_caracteristico = "";
  
      if (this.ano_nacimiento >= 1920 && this.ano_nacimiento <= 1935) {
        generacion = "Vanguardia";
        rasgo_caracteristico = "Vivieron durante los primeros años del siglo XX, presenciando eventos históricos como las guerras mundiales.";
      } else if (this.ano_nacimiento >= 1936 && this.ano_nacimiento <= 1955) {
        generacion = "Silent Generation";
        rasgo_caracteristico = "Experimentaron la posguerra y la reconstrucción de Europa y Japón.";
      } else if (this.ano_nacimiento >= 1956 && this.ano_nacimiento <= 1975) {
        generacion = "Baby Boomer";
        rasgo_caracteristico = "Crecieron en una época de posguerra y auge económico, fueron parte de movimientos sociales importantes.";
      } else if (this.ano_nacimiento >= 1976 && this.ano_nacimiento <= 1995) {
        generacion = "Generación X";
        rasgo_caracteristico = "Experimentaron el auge de la tecnología y el inicio de la globalización, vivieron la Guerra Fría.";
      } else if (this.ano_nacimiento >= 1996 && this.ano_nacimiento <= 2012) {
        generacion = "Millennials";
        rasgo_caracteristico = "Crecieron con el auge de internet y la tecnología de la información, fueron testigos de eventos como el 11 de septiembre.";
      } else if (this.ano_nacimiento >= 2013) {
        generacion = "Generación Alpha";
        rasgo_caracteristico = "Nacidos en la era de la tecnología avanzada y la conectividad global, han crecido con dispositivos digitales desde temprana edad.";
      } else {
        generacion = "Generación Desconocida";
        rasgo_caracteristico = "No se puede determinar la generación.";
      }
  
      console.log(`${this.nombre} pertenece a la generación ${generacion}. Rasgo característico: ${rasgo_caracteristico}`);
  
      console.log(`En España, hay aproximadamente 47 millones de personas de la generación ${generacion}.`);
    }
  }
  
  const personaEjemplo = new Persona("cesar", 30, "273456789", "H", 70, 1.75, 1990);
  personaEjemplo.mostrarGeneracion();
  