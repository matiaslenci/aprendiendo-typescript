/**
 * Saluda una persona
 * @param nombre el nombre
 */
function saludar(nombre: string) {
  console.log("Hola " + nombre);
}

saludar("matias");

/**
 * Despide a una persona por consola
 * @param nombre persona a la que despide, si no se le pasa un nombre despide a Matias por defecto
 */
function despedir(nombre: string = "Matias") {
  console.log("Chau " + nombre);
}

despedir("Marcos"); // Chau Marcos
despedir(); // Chau Matias

/**
 * Despide a una persona
 * @param nombre (opcional) si le pasan un nombre despide con el mismo sino solo despide
 */
function despedidaOpcional(nombre?: string) {
  if (nombre) {
    console.log("Chau," + nombre);
  } else {
    console.log("Chau👋");
  }
}

despedidaOpcional("Matias"); // Chau Matias
despedidaOpcional(); //Chau👋

function variosParametros(
  nombre: string,
  apellido?: string,
  edad: number = 18
) {
  if (apellido) {
    console.log(`${nombre} ${apellido}, tiene ${edad} años`);
  } else console.log(`${nombre} , tiene ${edad} años`);
}

variosParametros("matias", "lenci", 20);
variosParametros("marcos");

// Que solo pueda devolver un number o un string
function returnObligatorio(nombre: string): string | number {
  return 3;
}

//Que pueda pasar opcionalmete varios parametros
//El numero de parametros no esta contabilizado no sabemos si son 1 o +

/**
 * Lee el/los nombres pasados por parametro y lo muestra en consola
 * @param nombres es una lista de nombres de texto
 */
function multiParametros(...nombres: string[]) {
  nombres.forEach((nombre) => {
    console.log(nombre);
  });
}

multiParametros("Matias", "Marcos", "Emi");
multiParametros("Matias");
