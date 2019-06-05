//create secret number
var secretNumber = 4;

//ask user for guess 
var guess = Number(prompt("guess a number"));
alert("you choose the number " + guess);

//check guess
if(Number(guess) < secretNumber){
    alert("O numero escolhido é menor do que o numero secreto");
}else if(Number(guess) > secretNumber){
    alert("o numero escolhido eh maior que o numero secreto");
}else{
    alert("voce acertou o numero");
}