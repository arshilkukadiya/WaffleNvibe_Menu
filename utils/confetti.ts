export function fireConfetti(durationMs = 900, particles = 120) {
  const c = document.createElement('canvas');
  const ctx = c.getContext('2d')!;
  c.style.position = 'fixed';
  c.style.inset = '0';
  c.style.pointerEvents = 'none';
  c.style.zIndex = '9999';
  document.body.appendChild(c);
  c.width = innerWidth;
  c.height = innerHeight;
  const colors = ['#FFD166','#06D6A0','#EF476F','#118AB2','#FFC857'];

  const confs = Array.from({ length: particles }).map(() => ({
    x: Math.random() * c.width,
    y: Math.random() * -c.height * 0.2,
    r: 2 + Math.random() * 4,
    c: colors[Math.floor(Math.random() * colors.length)],
    vy: 2 + Math.random() * 4,
    vx: -2 + Math.random() * 4,
    a: Math.random() * Math.PI
  }));

  let start = performance.now();
  function draw(t: number) {
    ctx.clearRect(0,0,c.width,c.height);
    confs.forEach(p => {
      p.a += 0.05;
      p.x += p.vx;
      p.y += p.vy;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.a);
      ctx.fillStyle = p.c;
      ctx.fillRect(-p.r, -p.r, p.r*2, p.r*2);
      ctx.restore();
    });
    if (t - start < durationMs) requestAnimationFrame(draw);
    else c.remove();
  }
  requestAnimationFrame(draw);
}
