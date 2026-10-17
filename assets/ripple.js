// Faint triangles that ripple out from the pointer on the home page.
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var canvas = document.querySelector('.ripple');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var particles = [];
  var last = null;
  var hue = Math.random() * 360;
  var running = false;

  var SPACING = 14;    // px of pointer travel between bursts
  var LIFE = 1100;     // ms each triangle lives
  var COLOUR_CHANCE = 0.2;

  function resize() {
    var dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function spawn(x, y) {
    hue = (hue + 7) % 360;
    for (var i = 0; i < 2; i++) {
      var angle = Math.random() * Math.PI * 2;
      var speed = 0.02 + Math.random() * 0.04;
      var coloured = Math.random() < COLOUR_CHANCE;
      particles.push({
        x: x, y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 3 + Math.random() * 6,
        rot: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.004,
        born: performance.now(),
        colour: coloured ? 'hsl(' + hue + ', 65%, 60%)' : 'rgb(150, 150, 150)',
        alpha: coloured ? 0.7 : 0.45
      });
    }
    if (!running) { running = true; prev = performance.now(); requestAnimationFrame(tick); }
  }

  function drawTriangle(p, t) {
    var r = p.size * (1 + t * 0.6);
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.globalAlpha = p.alpha * (1 - t);
    ctx.strokeStyle = p.colour;
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (var k = 0; k < 3; k++) {
      var a = k * (Math.PI * 2 / 3) - Math.PI / 2;
      ctx[k ? 'lineTo' : 'moveTo'](Math.cos(a) * r, Math.sin(a) * r);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }

  var prev = performance.now();
  function tick(now) {
    var dt = now - prev;
    prev = now;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter(function (p) { return now - p.born < LIFE; });
    particles.forEach(function (p) {
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.rot += p.spin * dt;
      drawTriangle(p, (now - p.born) / LIFE);
    });
    if (particles.length) requestAnimationFrame(tick);
    else running = false;
  }

  window.addEventListener('resize', resize);
  window.addEventListener('pointermove', function (e) {
    if (last) {
      var dx = e.clientX - last.x, dy = e.clientY - last.y;
      if (dx * dx + dy * dy < SPACING * SPACING) return;
    }
    last = { x: e.clientX, y: e.clientY };
    spawn(e.clientX, e.clientY);
  });

  resize();
})();
