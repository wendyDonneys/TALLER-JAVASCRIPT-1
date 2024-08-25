function filtrarnumerospares (numeros){
    let numerospares = [];
    for (let i= 0); i < numeros.length; i++){
        if numeros [i]% 2===0){
            numerospares.push(numeros[i]);

        }
    }
    return numerospares;
}
let numeroes = [1,2,3,4,5,6,7,8,9,10];
let numerospares = filtrarnumerospares(numeros);
console.log(numerospares); // muestra [2,4,6,8,10]
