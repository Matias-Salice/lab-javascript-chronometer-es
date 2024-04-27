const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  minUniElement.textContent = chronometer
    .computeTwoDigitNumber(chronometer.getMinutes())
    .charAt(1);
  minDecElement.textContent = chronometer
    .computeTwoDigitNumber(chronometer.getMinutes())
    .charAt(0);
}

function printSeconds() {
  secUniElement.textContent = chronometer
    .computeTwoDigitNumber(chronometer.getSeconds())
    .charAt(1);
  secDecElement.textContent = chronometer
    .computeTwoDigitNumber(chronometer.getSeconds())
    .charAt(0);
}


// ==> BONUS
function printMilliseconds() {
  secUniElement.textContent = chronometer
    .computeTwoDigitNumber(chronometer.getMilliseconds())
    .charAt(1);
    milDecElement.textContent = chronometer
    .computeTwoDigitNumber(chronometer.getMilliseconds())
    .charAt(0);
}

function printSplit() {
  splitsElement.innerHTML += `<li>${minDecElement.textContent}${minUniElement.textContent}:${secDecElement.textContent}${secUniElement.textContent}`;
}

function clearSplits() {
  splitsElement.innerHTML="";
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP';
  btnLeftElement.className = 'btn stop';
}

function setSplitBtn() {
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.className = 'btn split';
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === 'START') {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === 'SPLIT') {
    printSplit();
  } else {
    chronometer.reset();
    clearSplits();
    setResetBtn();
  }
});
