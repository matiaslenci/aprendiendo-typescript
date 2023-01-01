import { type } from "os";

//Variables de tipado fuerte
let nombre: string = "Matias";
const PI: number = 3.1416;
let error: boolean = false;

//Instanciacion multiple de variables

let a: string, b: number, c: boolean;

a = "TypeScript";
b = 26;
c = true;

//Tipos mas complejos
//let listaTareas: string[] = ["Tarea 1", "Tarea 2"];
let listaNumeros: number[] = [2, 3, 4];

//Podemos combinar tipos en listas
let valores: (string | number | boolean)[] = [false, "Hola", true, 56];

//Enumerados

enum Estados {
  "Completado" = "C",
  "Incompleto" = "I",
  "Pendiente" = "P",
}

let estadosTarea: Estados = Estados.Completado; // C

enum PuestoCarrera {
  "Primero" = 1,
  //Los siguientes continuan el numerado implicitamente
  "Segundo", // 2
  "Tercero", // 3
}

let miPuesto: PuestoCarrera = PuestoCarrera.Segundo; // 2
const ganador: PuestoCarrera = PuestoCarrera.Primero; // 1

//Interface

interface Tarea {
  nombre: string;
  estado: Estados;
  urgencia: number;
}

let tarea1: Tarea = {
  nombre: "Tarea 1",
  estado: Estados.Pendiente,
  urgencia: 3,
};

let { estado, urgencia } = tarea1;

//Types en TypeScript
type Producto = {
  nombre: string;
  precio: number;
  anio: number;
};

//Ejemplo de type
let auto: Producto = {
  nombre: "Audi",
  precio: 45000,
  anio: 2021,
};

//Operadores ternarios en TS
console.log(
  auto.anio < 2020
    ? `El auto de marca ${auto.nombre} es viejo`
    : `El auto es nuevo`
);

//Switch

switch (tarea1.estado) {
  case Estados.Completado:
    console.log("La tarea ya se completo");
    break;
  case Estados.Pendiente:
    console.log("La tarea aun esta pendiente");
    break;
  case Estados.Incompleto:
    console.log("La tarea esta incompleta");
    break;
  default:
    console.log("No se conoce el estado de la tarea");

    break;
}

// ** Bucles

while (tarea1.estado !== Estados.Completado) {
  if (tarea1.urgencia >= 15) {
    tarea1.estado = Estados.Completado;
  } else {
    tarea1.urgencia++;
  }
}

let listaTareas: Tarea[] = [
  {
    nombre: "Tarea 1",
    estado: Estados.Incompleto,
    urgencia: 3,
  },
  {
    nombre: "Tarea 2",
    estado: Estados.Pendiente,
    urgencia: 0,
  },
  {
    nombre: "Tarea 3",
    estado: Estados.Completado,
    urgencia: 15,
  },
];

listaTareas.forEach((tarea: Tarea, index: number) => {
  console.log(`${index} - ${tarea.nombre}`);
});

type StringONumber = string | number;

let ejemplo: StringONumber = "3";
let OtroEjemplo: StringONumber = 3;

/* Funciones y gestion de errores */

type Operacion = "multiplicar" | "dividir" | "restar" | "sumar";
type Resultado = number;

function calculadora(a: number, b: number, op: Operacion) {
  if (op === "multiplicar") {
    return a * b;
  }
  if (op === "dividir" || 0) {
    return a / b;
  } else {
    return console.log("No se puede dividir por 0.");
    if (op === "restar") {
      return a - b;
    }
    if (op === "sumar") {
      return a + b;
    }
  }
}

