
let result = document.getElementById("result");
let scientificMode = false;
let unitConversionMode = false;
let currencyConversionMode = false;

function appendChar(char) {
  result.value += char;
}


function clearResult() {
  result.value = "";
}

function deleteLastChar() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  let expression = result.value;
  let answer = eval(expression);
  result.value = answer;
}

function toggleSubMenu() {
  let subMenu = document.querySelector(".sub-menu");
  subMenu.style.display = subMenu.style.display === "none" ? "block" : "none";
}

function toggleScientificMode() {
  scientificMode = !scientificMode;

  let buttons = document.querySelectorAll(".buttons button");
  buttons.forEach(function(button) {
    button.style.display = scientificMode ? "inline-block" : "grid";
  });

  if (scientificMode) {
    let sqrtButton = document.createElement("button");
    sqrtButton.innerHTML = "&radic;";
    sqrtButton.onclick = function() {
      result.value = Math.sqrt(eval(result.value));
    };
    sqrtButton.className = "additional-button";
    document.querySelector(".buttons").appendChild(sqrtButton);

    let powerButton = document.createElement("button");
    powerButton.innerHTML = "^";
    powerButton.onclick = function() {
      result.value += "^";
    };
    powerButton.className = "additional-button";
    document.querySelector(".buttons").appendChild(powerButton);
  } else {
    let additionalButtons = document.querySelectorAll(".additional-button");
    additionalButtons.forEach(function(button) {
      button.remove();
    });
  }

  alert("Scientific Mode " + (scientificMode ? "Enabled" : "Disabled"));
}

function toggleUnitConversion() {
  unitConversionMode = !unitConversionMode;
  alert("Unit Conversion " + (unitConversionMode ? "Enabled" : "Disabled"));
}

function toggleCurrencyConversion() {
  currencyConversionMode = !currencyConversionMode;
  alert("Currency Conversion " + (currencyConversionMode ? "Enabled" : "Disabled"));
}
