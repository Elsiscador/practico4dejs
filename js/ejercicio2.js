/*
Registro de notas de estudiantes: Tienes dos arrays, uno con nombres de estudiantes y
 otro con sus respectivas notas en un curso.
 Debes crear funciones que calculen el promedio de notas por estudiante y
 muestren un resumen con los nombres de los estudiantes que aprobaron y reprobaron el curso.
*/

const estudiantes = [`Pedro`,`sol`,`alex`];

const notasPromedios = [[3,5,9,10],[4,7,4,6],[5,7,3,6]];

function calcularPromedio(notas){

  let suma = 0
  for(let i = 0 ; i < notas.length ; i++){
    suma += notas[i];
  } 
  return suma / notas.length
}
for( let i = 0; i < estudiantes.length;i++){
  
  let promedio= calcularPromedio(notasPromedios[i]);
 console.log(`El alumno  ${estudiantes[i]} - tiene un  promedio de :  ${Math.round (promedio)}`)
  if(promedio > 6){
    console.log(`El alumno ${estudiantes[i]}- esta Aprobado`);
  } else{
    console.log(` El Alumno ${estudiantes[i]}- esta Desaprobado`);
  }
}

