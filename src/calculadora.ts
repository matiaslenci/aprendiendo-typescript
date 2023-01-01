 type Operacion = "multiplicar" | "dividir" | "restar" | "sumar";
type Resultado = number;

function calculadora(a: number, b: number, op: Operacion) {
  if (op === "restar") {
    return a - b;
  }
  if (op === "sumar") {
    return a + b;
  }
  if (op === "multiplicar") {
    return a * b;
  }
  if (op === "dividir") {
    if (b === 0) {
      throw new Error("No se puede dividir por 0");
    } else {
      return a / b;
    }
  }

  throw new Error("Operacion no valida");
}

console.log(calculadora(2, 0, "dividir"));


