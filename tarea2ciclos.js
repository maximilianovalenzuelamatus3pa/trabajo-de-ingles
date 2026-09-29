var palabras = [
    ["Hello", "Hola", "Saludo"],
    ["Goodbye", "Adiós", "Despedida"],
    ["Please", "Por favor", "Petición"],
    ["Thank you", "Gracias", "Agradecimiento"],
    ["Yes", "Sí", "Afirmación"],
    ["No", "No", "Negación"],
    ["Good morning", "Buenos días", "Saludo de la mañana"],
    ["Good night", "Buenas noches", "Despedida nocturna"],
    ["Friend", "Amigo", "Persona cercana"],
    ["House", "Casa", "Lugar donde vivimos"],
    ["School", "Escuela", "Lugar para estudiar"],
    ["Book", "Libro", "Material para leer"],
    ["Water", "Agua", "Líquido para beber"],
    ["Food", "Comida", "Alimento"],
    ["Family", "Familia", "Personas relacionadas"],
    ["Teacher", "Profesor", "Persona que enseña"],
    ["Student", "Estudiante", "Persona que aprende"],
    ["Work", "Trabajo", "Actividad laboral"],
    ["Computer", "Computadora", "Máquina electrónica"],
    ["Morning", "Mañana", "Parte del día"]
];

var programacion = [
    ["HTML", "Lenguaje de etiquetas", "Crea la estructura de una página"],
    ["CSS", "Hojas de estilo", "Modifica el diseño"],
    ["JavaScript", "Lenguaje de programación", "Agrega acciones"],
    ["Variable", "Variable", "Guarda información"],
    ["Array", "Arreglo", "Guarda varios datos"],
    ["String", "Texto", "Representa palabras"],
    ["Number", "Número", "Representa cantidades"],
    ["Boolean", "Booleano", "Indica verdadero o falso"],
    ["If", "Condición", "Permite tomar decisiones"],
    ["Else", "Si no", "Se ejecuta si no se cumple"],
    ["For", "Ciclo", "Repite instrucciones"],
    ["Function", "Función", "Agrupa instrucciones"],
    ["Button", "Botón", "Permite hacer clic"],
    ["Input", "Entrada", "Recibe información"],
    ["Table", "Tabla", "Organiza información"],
    ["Loop", "Bucle", "Repite un proceso"],
    ["Class", "Clase", "Agrupa elementos"],
    ["Id", "Identificador", "Identifica un elemento"],
    ["Console", "Consola", "Muestra mensajes"],
    ["Event", "Evento", "Representa una acción"]
];

var tablaIngles = document.getElementById("tablaIngles");
var tablaProgramacion = document.getElementById("tablaProgramacion");

for (var i = 0; i < palabras.length; i++) {
    tablaIngles.innerHTML += "<tr>" +
        "<td>" + palabras[i][0] + "</td>" +
        "<td>" + palabras[i][1] + "</td>" +
        "<td>" + palabras[i][2] + "</td>" +
        "</tr>";
}

for (var i = 0; i < programacion.length; i++) {
    tablaProgramacion.innerHTML += "<tr>" +
        "<td>" + programacion[i][0] + "</td>" +
        "<td>" + programacion[i][1] + "</td>" +
        "<td>" + programacion[i][2] + "</td>" +
        "</tr>";
}