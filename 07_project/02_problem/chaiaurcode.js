const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height < 0 || height === '' || isNaN(height)) {
    results.innerHTML = `Please give a valid Height ${height}`;
  } else if (weight < 0 || weight === '' || isNaN(weight)) {
    results.innerHTML = `Please give a valid Weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // results.innerHTML = `<span> ${bmi} </span>`;

    const comp = bmi;
    if (comp < 18.6) {
      results.innerHTML = `<span> ${bmi} You are Under Weight </span>`;
    } else if (comp >= 18.6 && comp <= 24.9) {
      results.innerHTML = `<span> ${bmi} You are in Normal Range</span>`;
    } else {
      results.innerHTML = `<span> ${bmi} You are Overweight </span>`;
    }
  }
});
