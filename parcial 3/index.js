var estudiantes = [
    { nombre: "Juan david", edad: 32, carrera: "Inn-software", promedio: 8, graduado: true },
    { nombre: "lucia", edad: 19, carrera: "Medicina", promedio: 7.2, graduado: false },
    { nombre: "esteban", edad: 21, carrera: "Derecho", promedio: 6.5, graduado: false },
    { nombre: "carla", edad: 20, carrera: "Administración", promedio: 4.5, graduado: true }
];
estudiantes.forEach(function(estudiante) {
    console.log("Nombre: " + estudiante.nombre);
    console.log("Edad: " + estudiante.edad);
    console.log("Carrera: " + estudiante.carrera);
    console.log("Promedio: " + estudiante.promedio);
    console.log("graduado: " + estudiante.graduado);
});
