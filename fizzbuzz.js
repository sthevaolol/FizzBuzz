// Exercício FizzBuz 
// Lógica Digital na Resolução de Problemas

function num () {
    for(var i = 1; i < 101; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz")
        } else if (i % 3 == 0 && i % 5 != 0) {
            console.log("Fizz")
        } else if (i % 5 == 0 && i % 3 != 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

num()

// aprendi a fazer loop xddd
// praticando novamente 2024/08/09
