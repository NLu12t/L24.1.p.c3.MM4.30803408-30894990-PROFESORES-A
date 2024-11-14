/**
 * 
 * PROFESORES-A
 * En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente,
 * 3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su cédula, nombre y
 * sexo (F - M).        ++
 * 
 * Considerando que los datos de los profesores se cargan en un array de objetos (Ej.
 * estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) 
 * se requiere una función que
 * retorne otro arreglo de objetos con solamente los profesores de una categoría dada. ++
 * 
 * Función: profesoresCategoria. ++
 * Parámetros: profesores (array de objetos profesor), categoria (un número).  ++
 * Retorno: array de objetos profesor que pertenecen a la categoría indicada.  ++
 */

const profesores = [
    { categoria: 1, nombre: 'Ana', cedula: 1111, sexo: 'F' },
    { categoria: 2, nombre: 'Beto', cedula: 2222,sexo: 'M' },
    { categoria: 1, nombre: 'Catalina', cedula: 3333, sexo: 'F' },
    { categoria: 4, nombre: 'Diego', cedula: 4444, sexo: 'M' },
    { categoria: 2, nombre: 'Eduardo', cedula: 5555, sexo: 'M' }
];

let profesoresCategoria = (profesores, categoria) => {
    return profesores.filter(profesor => profesor.categoria === categoria);
}

let salida = document.getElementById('salida');


const profesoresDado = profesoresCategoria(profesores, 2);

profesoresDado.forEach(profesor => {
    //salida.innerHTML += `<p>${profesor.categoria} - ${profesor.nombre} - ${profesor.sexo}</p>`;
    salida.innerHTML += `Profesor: ${profesor.cedula} - ${profesor.nombre} - ${profesor.sexo} <br><br> `;
})