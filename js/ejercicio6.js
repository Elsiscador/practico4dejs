/* 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

Rectángulos


*/
class Cuenta {
    constructor(titular, saldo = 0) {
      this.titular = titular;
      this.saldo = saldo;
    }

    ingresar(dinero){
        if(dinero > 0){
            this.saldo += dinero
            alert(`El Dinero ingresado es ${dinero} Dolares`);
        } else{
            alert(`Ingresa un monto valido `)
        }
    }
    extraer(dinero){
        if(dinero > 0 && dinero <= this.saldo){
            this.saldo -= dinero
            alert(`Se ha Retirado de su cuenta ${dinero} dolares`)
        }else{
            alert(`Para extraer dinero la cantidad debe ser mayor a cero`)
        }

    }

    informar(){
        console.log(`El titular de la cuenta es:${this.titular}`);
        console.log(`El saldo alctual de : ${this.titular} es ${this.saldo} dolares`);
    }
}

    let cuentaDeAlex = new Cuenta ("Alex");

    cuentaDeAlex.informar()

    cuentaDeAlex.ingresar(100)
    
    cuentaDeAlex.extraer(20)

    cuentaDeAlex.informar()
