let valor = Number(prompt('Insira o valor da conta: '));

let clientes = Number(prompt('Insira a quantidade de clientes: '));

let valorCliente = valor / clientes;

console.log(`O valor a ser pago por cliente é ${valorCliente.toFixed(2)}`);
