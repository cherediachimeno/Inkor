let estudiante1 = "Juan";
let estudiante2 = "Ruth";
let estudiante3 = "Maria";
let estudiante4 = "Marta";
let estudiante5 = "Raquel";
estudiante1 = "Mateo";
let nota = 10;
let booleanos = true;

const listaEstudiantes = ["Juan", "Ruth", "Maria", "Marta", "Raquel"];

listaEstudiantes[0] = "Mateo";

listaEstudiantes.push("Jessica");
listaEstudiantes.push("Mario");

listaEstudiantes.unshift(listaEstudiantes.splice(2, 1)[0]);
console.log(listaEstudiantes);

const personajes = {
  nombre: "Obi Wan",
  saga: "Star Wars",
  notaSerie: 6,
  plataforma: {
    nombre: "Disney +",
    precio: "9.95",
  },
};

console.log(personajes.plataforma.precio);
console.log(personajes["plataforma"]["precio"]);

personajes.anyo = 1979;
console.log(personajes);

personajes.nombre = "Obi Wan Kenobi";
console.log(personajes.nombre);

/*
let usuario = prompt("dime tu nombre");

console.log(
  "los estudiantes son " + estudiante1 + ", " + estudiante2 + " y " + usuario
);

let num1 = 10;
let num2 = Number(prompt("dime un número"));

console.log("la suma de los números es de " + (num1 + num2));

let edad = Number(prompt("dime tu edad"));

if (edad >= 18) console.log("mayor de edad");
else console.log("menor de edad");
*/
