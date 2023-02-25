document.getElementById("convertBtn").addEventListener("click", function() {
  var inputTemp = document.getElementById("inputTemp").value;
  var tempUnit = document.getElementById("tempUnit").value;
  var outputTemp;
  
  if (tempUnit === "Celsius") {
    outputTemp = (inputTemp * 9/5) + 32;
  } else if (tempUnit === "Fahrenheit") {
    outputTemp = (inputTemp - 32) * 5/9;
  } else if (tempUnit === "Kelvin") {
    outputTemp = inputTemp - 273.15;
  }
  
  document.getElementById("outputTemp").value = outputTemp.toFixed(2);
});
