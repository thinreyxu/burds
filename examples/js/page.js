window.onload = function () {
  var original = document.getElementById('original'),
      tuned = document.getElementById('tuned'),
      container = document.getElementById('container');

  var i = 0, ends = [0, 100], current = 100,
      duration = 500, 
      resumeDelay = 5000, resumeTimer;

  container.ondblclick = toggleOpacity;

  function toggleOpacity () {
    i++ % 2 == 0 ?
    animeOpacity(ends[0], function () {
      resumeTimer = setTimeout(toggleOpacity, resumeDelay);
    }) : 
    animeOpacity(ends[1]);
  }

  function animeOpacity (end, onfinish) {
    clearTimeout(resumeTimer);
    anime(tuned, {
      opacity: { from: current, to: end },
      duration: duration
    }, ontick, onfinish);
  }

  function ontick (props) {
    var opacity = current = Math.round(props.opacity);
    this.style.opacity = opacity / 100;
    this.style.filter = 'alpha(opacity=' + opacity + ')';
  }
};