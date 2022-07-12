let valor = Number(prompt('Insira o valor da conta: '));

let clientes = Number(prompt('Insira a quantidade de clientes: '));

let valorCliente = valor / clientes;

alert(`O valor a ser pago por cliente é R$${valorCliente.toFixed(2)}`);
