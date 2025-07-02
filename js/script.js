// Definisco l'intervallo di numeri per far partire il gioco utilizzando il ciclo For 

for (let i = 1; i <= 100; i++) {


  // Stabilisco che per ogni numero divisibile sia per 3 che per 5 restituisci come resto 0 esce la parola FizzBuzz

  if (i % 5 === 0 && i % 3 === 0) {
    console.log(`FizzBuzz`)
  }

  // Stabilisco che per ogni numero divisibile sia per 3 e restituisce come resto 0 esce la parola Fizz

  else if (i % 3 === 0) {
    console.log(`Fizz`)
  }

}

