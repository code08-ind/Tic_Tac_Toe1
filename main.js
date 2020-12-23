let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let result = document.querySelector(".result");

loadEventListener();

function loadEventListener() {
    document.querySelectorAll(".box").forEach((item) => {
        item.addEventListener("keyup", (e) => {
            if (one.value == "X" && two.value == "X" && three.value == "X") {
                messages("Player X Won ! Game Over", "#21EE13", "5px 8px");
            }
            else if (one.value == "O" && two.value == "O" && three.value == "O") {
                messages("Player O Won ! Game Over", "#133DEE", "5px 8px");
            }
            else if (four.value == "X" && five.value == "X" && six.value == "X") {
                messages("Player X Won ! Game Over", "#21EE13", "5px 8px");
            }
            else if (four.value == "O" && five.value == "O" && six.value == "O") {
                messages("Player O Won ! Game Over", "#133DEE", "5px 8px");
            }
            else if (seven.value == "X" && eight.value == "X" && nine.value == "X") {
                messages("Player X Won ! Game Over", "#21EE13", "5px 8px");
            }
            else if (seven.value == "O" && eight.value == "O" && nine.value == "O") {
                messages("Player O Won ! Game Over", "#133DEE", "5px 8px");
            }
            else if (one.value == "X" && four.value == "X" && seven.value == "X") {
                messages("Player X Won ! Game Over", "#21EE13", "5px 8px");
            }
            else if (one.value == "O" && four.value == "O" && seven.value == "O") {
                messages("Player O Won ! Game Over", "#133DEE", "5px 8px");
            }
            else if (two.value == "X" && five.value == "X" && eight.value == "X") {
                messages("Player X Won ! Game Over", "#21EE13", "5px 8px");
            }
            else if (two.value == "O" && five.value == "O" && eight.value == "O") {
                messages("Player O Won ! Game Over", "#133DEE", "5px 8px");
            }
            else if (three.value == "X" && six.value == "X" && nine.value == "X") {
                messages("Player X Won ! Game Over", "#21EE13", "5px 8px");
            }
            else if (three.value == "O" && six.value == "O" && nine.value == "O") {
                messages("Player O Won ! Game Over", "#133DEE", "5px 8px");
            }
            else if (one.value == "X" && five.value == "X" && nine.value == "X") {
                messages("Player X Won ! Game Over", "#21EE13", "5px 8px");
            }
            else if (one.value == "O" && five.value == "O" && nine.value == "O") {
                messages("Player O Won ! Game Over", "#133DEE", "5px 8px");
            }
            else if (three.value == "X" && five.value == "X" && seven.value == "X") {
                messages("Player X Won ! Game Over", "#21EE13", "5px 8px");
            }
            else if (three.value == "O" && five.value == "O" && nine.value == "O") {
                messages("Player O Won ! Game Over", "#133DEE", "5px 8px");
            }
            else {
                drawn();
            }
            e.preventDefault();
        });
    });
}

function messages(message, color, padding) {
    result.innerHTML = message;
    result.style.color = color;
    result.style.padding = padding;
    disable();
}

function disabled() {
    document.querySelectorAll(".box").forEach((item) => {
        item.disabled = true;
    });
}

function drawn() {
    let count = 0;
    document.querySelectorAll(".box").forEach((item) => {
        if (item.value !== "") {
            count++;
        }
        if (count === 9) {
            messages("Match Drawn ! Game Over", "Red");
        }
    });
}


