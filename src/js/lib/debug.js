//
// debug overlays
//

if (process.env.NODE_ENV == 'development') {
  const body = document.body;
  body.addEventListener('keyup', function(event) {
    if (event.shiftKey == true && event.altKey == true && event.keyCode == 68) {
      body.classList.toggle('debug');
    }
  });
}
