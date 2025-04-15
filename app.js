
// Get elements
const car = document.getElementById('car');
const redLight = document.getElementById('red');
const yellowLight = document.getElementById('yellow');
const greenLight = document.getElementById('green');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

let isMoving = false;
let carPosition = 0;

// Start button
startBtn.addEventListener('click', () => {
  isMoving = true;
  redLight.style.background = "grey";
  yellowLight.style.background = "grey";
  greenLight.style.background = "green";
});

// Stop button
stopBtn.addEventListener('click', () => {
  isMoving = false;
  redLight.style.background = "red";
  yellowLight.style.background = "grey";
  greenLight.style.background = "grey";
});

// Move the car
function moveCar() {
  if (isMoving) {
    carPosition += 3;
    if (carPosition > window.innerWidth) {
      carPosition = -150; // reset from left side
    }
    car.style.left = carPosition + 'px';
  }
  requestAnimationFrame(moveCar);
}

// Start animation
moveCar();