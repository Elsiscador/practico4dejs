/*1- Crea un objeto llamado auto que tenga algunas características como el color,
 marca, modelo y si está encendido o apagado.
  Crea los métodos necesarios para permitir encender y apagar el auto.

*/

class Auto {
  constructor(color, marca, modelo, encendido) {
    this.color = color;
    this.marca = marca;
    this.modelo = modelo;
    this.encendido = encendido;
  }

  encender() {
    this.encendido = true;
    console.log("El auto esta  encendido");
  }

  apagar() {
    this.encendido = false;
    console.log("El auto esta  apagado");
  }
}

let miAuto = new Auto("rojo", "Toyota", "Corolla", true);


miAuto.encender();

miAuto.apagar()

console.log(miAuto)
