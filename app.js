// Iniziliazzo il ciclo for //
for (let i = 1; i <= 100; i++) {

    // Calcolo dei multipli di 3 e 5 //
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    // Calcolo dei multipli di 3 //
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    // Calcolo dei multipli di 5 //
    else if (i % 5 === 0) {
        console.log("Buzz");

    }
    console.log(i);
}
