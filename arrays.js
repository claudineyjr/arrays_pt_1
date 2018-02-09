var array = [1, 2, 3, 4, 5];

console.log('É um array? ' + Array.isArray(array));
array[5] = 19;
array.length = 10;
array[15] = 'banana';
console.log('Array completo: ' + array);

console.log('Elemento de índice 3 do array: ' + array[3]);

console.log('Tamanho do array: ' + array.length);

