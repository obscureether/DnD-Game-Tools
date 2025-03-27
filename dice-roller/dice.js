function rollDice(sides) {
    let result = Math.floor(Math.random() * sides) + 1;
    document.getElementById("result").innerText = `You rolled a d${sides}: ${result}`;
}
