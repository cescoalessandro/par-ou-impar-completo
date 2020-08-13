let Jogador_A = 0
let resultado = 0
let Jogador_B = 0
let divisão = 0
input.onButtonPressed(Button.A, function () {
    Jogador_A = randint(0, 10)
    basic.showNumber(Jogador_A)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    resultado = Jogador_A + Jogador_B
    basic.showNumber(resultado)
    basic.pause(500)
    basic.clearScreen()
    divisão = resultado % 2
    if (divisão == 0) {
        basic.showString("PAR")
    } else {
        basic.showString("IMPAR")
    }
})
input.onButtonPressed(Button.B, function () {
    Jogador_B = randint(0, 10)
    basic.showNumber(Jogador_B)
    basic.pause(2000)
    basic.clearScreen()
})
