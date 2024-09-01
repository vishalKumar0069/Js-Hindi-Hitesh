const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  // console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    // --------this can also solve though-> IF ELSE STATEMENT-----------
    // if (e.target.id === 'grey') {
    //   // body.style.background = 'grey';
    //   body.style.background = e.target.id;
    // }

    // --------this can also solve though-> IF SWITCH STATEMENT---------
    switch (e.target.id) {
      case 'grey':
        body.style.background = e.target.id;
        break;
      case 'white':
        body.style.background = e.target.id;
        break;
      case 'blue':
        body.style.background = e.target.id;
      case 'yellow':
        body.style.background = e.target.id;
      case 'purple':
        body.style.background = e.target.id;
      case 'violet':
        body.style.background = e.target.id;
    }
  });
});
