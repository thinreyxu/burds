// raf
!function () {
  var prefixes = ['webkit', 'ms', 'moz', 'o'];
  var lastCall = 0, i = 0;
  while(typeof window.requestAnimationFrame !== 'function' && i < prefixes.length) {
    window.requestAnimationFrame = window[prefixes[i] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[prefixes[i] + 'CancelAnimationFrame'] ||
                                  window[prefixes[i] + 'CancelRequestAnimationFrame'];
    i++;
  }
  
  if (typeof window.requestAnimationFrame !== 'function') {
    window.requestAnimationFrame = function (fn) {
      var now = new Date().getTime();
      var nextTimeToCall = Math.max(0, 16 - now + lastCall);
      var id = setTimeout(function () { fn(new Date().getTime()); }, nextTimeToCall);
      lastCall = now + nextTimeToCall;
      return id;
    };
  }

  if (typeof window.cancelAnimationFrame !== 'function') {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
}()

!function () {
  window.anime = anime;
  function anime (obj, props, ontick, onfinish) {
    if (isAnimating(obj)) stopAnime(obj);
    startAnime(obj, props, ontick, onfinish);
  }

  function isAnimating (obj) {
    return !!obj.animating;
  }

  function stopAnime (obj) {
    cancelAnimationFrame(obj.animeTimer);
    obj.animating = false;
  }

  function startAnime (obj, props, ontick, onfinish) {

    var s = {
      duration: 1000,
      easing: 'linear'
    };

    for (var item in s) {
      if (props.hasOwnProperty(item)) {
        s[item] = props[item];
        delete props[item];
      }
    }


    var current = {};
    for (var item in props) {
      current[item] = props[item].from || (props[item].from = 0);
    }

    var startTime = new Date().getTime();

    obj.animeTimer = requestAnimationFrame(function update () {
      var now = new Date().getTime();

      var ratio = (now - startTime) / s.duration;
      
      if (ratio < 0) return;


      if (!obj.animating) {
        obj.animating = true;
        ontick && ontick.call(obj, current);
      }

      var r = easing[s.easing](Math.min(ratio, 1));
      for (var item in props) {
        var prop = props[item];
        current[item] = prop.from + (prop.to - prop.from) * r;
      }
      ontick && ontick.call(obj, current);

      if (ratio >= 1) {
        obj.animating = false;
        onfinish && onfinish.call(obj, current);
      }
      else {
        requestAnimationFrame(update);
      }
    });
  }

  var easing = {
    linear: function (r) {
      return r;
    }
  }
}();