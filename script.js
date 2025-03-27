// 🎲 Dice Rolling System
function rollDice(sides) {
    const result = Math.floor(Math.random() * sides) + 1;
    document.getElementById("dice-log").innerHTML += `<p>🎲 d${sides}: <strong>${result}</strong></p>`;
    
    // Play sound effect
    let diceSound = new Audio("assets/dice.mp3");
    diceSound.play();
}

// 🎭 Map System - Drag & Drop Tokens
function addToken() {
    let token = document.createElement("div");
    token.className = "token";
    token.style.left = `${Math.random() * 90}%`;
    token.style.top = `${Math.random() * 90}%`;
    
    document.getElementById("map").appendChild(token);

    // Make token draggable
    token.onmousedown = function(event) {
        let shiftX = event.clientX - token.getBoundingClientRect().left;
        let shiftY = event.clientY - token.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
            token.style.left = pageX - shiftX + "px";
            token.style.top = pageY - shiftY + "px";
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener("mousemove", onMouseMove);

        token.onmouseup = function() {
            document.removeEventListener("mousemove", onMouseMove);
            token.onmouseup = null;
        };
    };

    token.ondragstart = () => false; // Prevents default drag behavior
}
