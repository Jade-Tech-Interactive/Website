(function() {
    var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;
  
    NUM_CONFETTI = 40;
  
    COLORS = [[255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255], [255, 255, 255]];
  
    PI_2 = 2 * Math.PI;
  
    canvas = document.getElementById("world");
  
    context = canvas.getContext("2d");
  
    window.w = 0;
  
    window.h = 0;
  
    resizeWindow = function() {
      window.w = canvas.width = window.innerWidth;
      return window.h = canvas.height = window.innerHeight;
    };
  
    window.addEventListener('resize', resizeWindow, false);
  
    window.onload = function() {
      return setTimeout(resizeWindow, 0);
    };
  
    range = function(a, b) {
      return (b - a) * Math.random() + a;
    };
  
    drawCircle = function(x, y, r, style) {
      context.beginPath();
      context.arc(x, y, r, 0, PI_2, false);
      context.fillStyle = style;
      return context.fill();
    };
  
    xpos = 0.5;
  
    document.onmousemove = function(e) {
      return xpos = e.pageX / w;
    };
  
    window.requestAnimationFrame = (function() {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
        return window.setTimeout(callback, 1000 / 60);
      };
    })();
  
    Confetti = (function() {
      function Confetti() {
        this.style = COLORS[~~range(0, 5)];
        this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
        this.r = ~~range(2, 6);
        this.r2 = 2 * this.r;
        this.replace();
      }
  
      Confetti.prototype.replace = function() {
        this.opacity = 0;
        this.dop = 0.03 * range(1, 4);
        this.x = range(-this.r2, w - this.r2);
        this.y = range(-this.r2, h - this.r2);
        this.vx = (w / 2 - this.x) / 100;
        return this.vy = (h / 2 - this.y) / 100;
      };
  
      Confetti.prototype.draw = function() {
        this.x += this.vx;
        this.y += this.vy;
        this.opacity += this.dop;
        if (this.opacity > 1) {
          this.opacity = 1;
          this.dop *= -1;
        }
        if (this.opacity < 0 || this.y > h || this.x < 0 || this.x > w) {
          this.replace();
        }
        return drawCircle(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
      };
  
      return Confetti;
  
    })();
  
    confetti = (function() {
      var j, ref, results;
      results = [];
      for (i = j = 1, ref = NUM_CONFETTI; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
        results.push(new Confetti);
      }
      return results;
    })();
  
    window.step = function() {
      var c, j, len, results;
      requestAnimationFrame(step);
      context.clearRect(0, 0, w, h);
      results = [];
      for (j = 0, len = confetti.length; j < len; j++) {
        c = confetti[j];
        results.push(c.draw());
      }
      return results;
    };
  
    step();
  
  }).call(this);