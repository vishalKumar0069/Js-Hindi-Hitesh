// const clock = document.querySelector('#clock');
const clock = document.getElementById('clock');

function timeUpdate() {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}

setInterval(timeUpdate, 1000);

// --------------------------------------------------------------
// 2nd method
// --------------------------------------------------------------

// const clock = document.querySelector('#clock');
// -------------------or--------------------------
// const clock = document.getElementById('clock');

// setInterval(function () {
//   let date = new Date();
//   clock.innerHTML = date.toLocaleTimeString();
// },1000);
