// Definisco l'intervallo di numeri per far partire il gioco utilizzando il ciclo For 

// for (let i = 1; i <= 100; i++) {


//   // Stabilisco che per ogni numero divisibile sia per 3 che per 5 restituisci come resto 0 esce la parola FizzBuzz

//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log(`FizzBuzz`)
//   }

//   // Stabilisco che per ogni numero divisibile sia per 3 e restituisce come resto 0 esce la parola Fizz

//   else if (i % 3 === 0) {
//     console.log(`Fizz`)
//   }
//   // Stabilisco che per ogni numero divisibile sia per 5 e restituisce come resto 0 esce la parola Buzz
//   else if (i % 5 === 0) {
//     console.log(`Buzz`)
//   }

//   // il resto dei numeri che non soddisfano i requisiti sopra riportati vengono mostrate cosi come sono

//   else {
//     console.log(`${i}`)
//   }
// }

//Metodo 2 

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    let i = ("FizzBuzz")
    console.log(i)
  }

  else if (i % 3 === 0) {
    let i = ("Fizz")
    console.log(i)
  }
  else if (i % 5 === 0) {
    let i = ("Buzz")
    console.log(i)
  }
  else {
    console.log(i)
  }
}