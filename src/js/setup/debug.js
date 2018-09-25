/* eslint-disable */
//
// debug overlays
//

if (process.env.NODE_ENV == 'development') {

  const body = document.body;

  const config = JSON.parse(localStorage.getItem('homework')) || { debug: false };

  function update() {
    localStorage.setItem('homework', JSON.stringify(config));
    body.classList.toggle('debug', config.debug);
  }

  body.addEventListener('keyup', function(event) {
    if (event.shiftKey == true && event.altKey == true && event.keyCode == 68) {
      config.debug = !config.debug;
      update();
    }
  });

  update();
}

// localStorage.setItem('homework', JSON.stringify({ ... }))
