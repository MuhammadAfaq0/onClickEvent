function Time() {
    let timeElement = document.getElementById("Time");
    if (timeElement) {
      let now = new Date();
      timeElement.textContent = `Time: ${now.toLocaleTimeString()}`;
    }
  }
  function Coordinates(event) {
    let dimensionsElement = document.getElementById("Dimensions");
    if (dimensionsElement) {
      dimensionsElement.textContent = `Dimentions: X: ${event.clientX}, Y: ${event.clientY}`;
      Time(); 
    }
  }
  document.addEventListener("click", Coordinates);
  window.onload = Time;