/*
 _                                             _           _
| |                                           | |         (_)
| |__   ___  _ __ ___   _____      _____  _ __| | ________ _ ___
| '_ \ / _ \| '_ ` _ \ / _ \ \ /\ / / _ \| '__| |/ /______| / __|
| | | | (_) | | | | | |  __/\ V  V / (_) | |  |   <       | \__ \
|_| |_|\___/|_| |_| |_|\___| \_/\_/ \___/|_|  |_|\_\      | |___/
                                                         _/ |
                                                        |__/
*/

const homeworkConfig = JSON.parse(localStorage.getItem('homework')) || { debug: false };
function setHomeworkConfig() { localStorage.setItem('homework', JSON.stringify(homeworkConfig)); }

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

if (process.env.NODE_ENV == 'development') {
  document.body.classList.toggle('debug', homeworkConfig.debug);
  document.body.addEventListener('keyup', function(event) {
    if (event.shiftKey == true && event.altKey == true && event.keyCode == 68) {
      homeworkConfig.debug = !homeworkConfig.debug;
      document.body.classList.toggle('debug', homeworkConfig.debug);
      setHomeworkConfig();
    }
  });
}
