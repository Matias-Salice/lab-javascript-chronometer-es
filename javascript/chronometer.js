class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) callback();
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  getMilliseconds() {
    return this.currentTime * 1000 + this.currentMilliseconds;
  }

  computeTwoDigitNumber(value) {
    let valueString = String(value);
    if (valueString.length === 1) {
      valueString = '0' + valueString;
      // console.log(valueString);
      return valueString;
    } else {
      // console.log(valueString);
      return valueString;
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    // console.log(this.currentTime);
    this.currentTime = 0;
    // console.log(this.currentTime);
    const minDec = document.querySelector('#minDec');
    const minUni = document.querySelector('#minUni');
    const secDec = document.querySelector('#secDec');
    const secUni = document.querySelector('#secUni');
    const milDec = document.querySelector('#milDec');
    const milUni = document.querySelector('#milUni');
    minDec.innerHTML = '0';
    minUni.innerHTML = '0';
    secDec.innerHTML = '0';
    secUni.innerHTML = '0';
    milDec.innerHTML = '0';
    milUni.innerHTML = '0';
  }

  split() {
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();

    return `${this.computeTwoDigitNumber(minutes)}:${this.computeTwoDigitNumber(seconds)}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
