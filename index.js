/*
     _      _
    | |    | |
  __| | ___| |__  _   _  __ _
 / _` |/ _ \ '_ \| | | |/ _` |
| (_| |  __/ |_) | |_| | (_| |
 \__,_|\___|_.__/ \__,_|\__, |
                         __/ |
                        |___/
*/

const body = document.body;

const config = JSON.parse(localStorage.getItem('homework')) || { debug: false };

function update() {
  localStorage.setItem('homework', JSON.stringify(config));
  body.classList.toggle('debug', config.debug);
}

if (process.env.NODE_ENV == 'development') {


  body.addEventListener('keyup', function(event) {
    if (event.shiftKey == true && event.altKey == true && event.keyCode == 68) {
      config.debug = !config.debug;
      update();
    }
  });

  update();
}
