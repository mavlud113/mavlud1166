let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {

        if (button.textContent === "C") {
            display.value = "";

        } else if (button.textContent === "=") {
            display.value = eval(display.value);

        } else {
            display.value += button.textContent;
        }

    });
});

