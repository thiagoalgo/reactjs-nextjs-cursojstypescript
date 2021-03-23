// Utilizar o tipo any somente em último caso.
// Se usar ele implícito por inferência de tipo vai dar problema.
// Então seu uso deve ser explícito

function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Olá'));
console.log(showMessage(1));
