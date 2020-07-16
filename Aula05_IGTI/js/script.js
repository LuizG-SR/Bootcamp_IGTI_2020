window.addEventListener("load", start);

var rangeR = document.querySelector("#rangeR");
var rangeG = document.querySelector("#rangeG");
var rangeB = document.querySelector("#rangeB");
var valueR = document.querySelector("#valueR");
var valueG = document.querySelector("#valueG");
var valueB = document.querySelector("#valueB");

function start() {
  rangeR.addEventListener("change", changeRangeColor);
  rangeG.addEventListener("change", changeRangeColor);
  rangeB.addEventListener("change", changeRangeColor);
  valueR.addEventListener("keyup", changeTextColor);
  valueG.addEventListener("keyup", changeTextColor);
  valueB.addEventListener("keyup", changeTextColor);
}

function changeRangeColor(event) {
  function changeColor() {
    var newColor =
      "rgba(" +
      rangeR.value +
      ", " +
      rangeG.value +
      ", " +
      rangeB.value +
      ", 1)";
    var div = document.querySelector("#actualColor");
    div.style.backgroundColor = newColor;
  }

  var tagetName = "#" + event.target.name;
  var input = document.querySelector(tagetName);
  input.value = event.target.value;
  changeColor();
}

function changeTextColor(event) {
  function changeColor() {
    var newColor =
      "rgba(" +
      rangeR.value +
      ", " +
      rangeG.value +
      ", " +
      rangeB.value +
      ", 1)";
    var div = document.querySelector("#actualColor");
    div.style.backgroundColor = newColor;
  }

  var tagetName = "#" + event.target.name;
  var input = document.querySelector(tagetName);
  if(event.target.value < 255){
    input.value = event.target.value;
  } else {
    input.value = 255;
    event.target.value = 255;
  }
  changeColor();
}
