const a1 = [1, 2, 3, 4, 5,6,6,7,8,9];

// For clássico
for (let valor of a1) {
    console.log(valor);
}

// ForEach
let total = 0;
a1.forEach((valor) => total += valor);
console.log(total);
a1.forEach((valor) => console.log(valor));
