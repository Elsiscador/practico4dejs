/*Gestión de proyectos en una empresa: Tienes dos arrays, uno para los nombres de proyectos
 y otro para los estados de los proyectos. 
Debes crear funciones que permitan agregar nuevos proyectos, cambiar el estado de un proyecto,
 asignar un responsable y generar un resumen de proyectos en curso
*/
let nombresDeProyectos = ["preguntale","salvaje","noce"];
let estadosDeProyectos = ["En curso","finalizado","En curso",];

let opcion = 0;

while (opcion != 5) {
  opcion = parseInt(
    prompt(
      `1,agregar proyectos\n 2-cambiar estado del proyecto\n 3- asignar un responsable al proyecto \n 4 -resumen de proyectos\n 5-salir`
    )
  );
  switch (opcion) {
    case 1:
        let nombreProyecto=prompt("ingrese el nombre")
        agregarProyecto(nombreProyecto)
      break;
    case 2:
        let proyectoModificado= prompt("indetifica tu proyecto")
        let nuevoEstado= prompt("ingresa el estado del proyecto")
        cambiarEstado(proyectoModificado,nuevoEstado)
      break;
    case 3:
        let proyectoReponsable = prompt("ingresa el nombre del proyecto")
        let responsable =prompt("ingresa el nombre del responsable")
        asignarResponsable(proyectoReponsable,responsable);
      break;
    case 4:
        resumenDeProyecto()
      break;
    default:
      break;
  }
}

function agregarProyecto(nombre,estado="En curso"){
    nombresDeProyectos.push(nombre)
    estadosDeProyectos.push(estado)
    alert(`${nombre} se agregado ala lista de proyectos \n estado del proyecto :${estado}`)
    
}

function cambiarEstado (nombre,nuevoEstado){
    let index=nombresDeProyectos.indexOf(nombre)
    if(index !== -1){
        estadosDeProyectos[index] =nuevoEstado
        alert(`${nombre} tiene el estado :${nuevoEstado}`)
    }else{
        alert("proyecto no econtrado")
    }
}

function asignarResponsable (nombre,responsable){
    let index=nombresDeProyectos.indexOf(nombre)
    if(index !== -1){
        alert(`${responsable} responsable del proyecto : :${nombre}`)
    }else{
        alert("proyecto no econtrado")
    }
}
function resumenDeProyecto(){
    let resumen = nombresDeProyectos.filter((nombre,index)=> estadosDeProyectos[index]==="En curso")
    if(resumen.length > 0){
        alert(`proyectos en curso : ${resumen}`)

    }else{
        alert("no hay proyectos")

    }

}