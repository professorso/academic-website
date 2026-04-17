// particles.js — Dot blanket tumbling in 3D space like fabric in zero gravity

(function () {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let dots = [];
  let animationId;
  let width, height;

  // Mix of hollow "bubble" rings and solid dots for varied texture.
  // `highlight` adds a small bright arc for a shiny metallic feel.
  const STYLES = [
    { type: 'bubble', color: 'rgba(170, 180, 200, 0.85)', highlight: 'rgba(255, 255, 255, 0.95)' },
    { type: 'bubble', color: 'rgba(70, 140, 220, 0.70)' },
    { type: 'bubble', color: 'rgba(130, 190, 245, 0.65)' },
    { type: 'solid',  color: 'rgba(50, 120, 210, 0.38)' },
    { type: 'solid',  color: 'rgba(100, 170, 240, 0.33)' },
  ];

  const COLS = 10;
  const ROWS = 7;
  const SPACING = 58;

  function resize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  }

  function init() {
    resize();
    dots = [];

    const gridW = (COLS - 1) * SPACING;
    const gridH = (ROWS - 1) * SPACING;

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const style = STYLES[Math.floor(Math.random() * STYLES.length)];
        dots.push({
          // 3D local coordinates — flat sheet on XY plane
          lx: col * SPACING - gridW / 2,
          ly: row * SPACING - gridH / 2,
          lz: 0,
          x: 0,
          y: 0,
          size: 2.9 + Math.random() * 2.15,
          type: style.type,
          color: style.color,
          phase: col * 0.5 + row * 0.4,
        });
      }
    }
  }

  function draw(timestamp) {
    const t = timestamp || 0;
    ctx.clearRect(0, 0, width, height);

    // Center point — anchored near title with gentle drift
    const cx = width * 0.70 + Math.sin(t * 0.00004) * width * 0.04;
    const cy = height * 0.43 + Math.cos(t * 0.000035) * height * 0.04;

    // 3D rotation angles — slow, continuous, different speeds per axis
    const rotX = Math.sin(t * 0.00012) * 1.2 + Math.cos(t * 0.00005) * 0.6;
    const rotY = Math.cos(t * 0.00009) * 1.0 + Math.sin(t * 0.00004) * 0.8;
    const rotZ = Math.sin(t * 0.00006) * 0.5 + Math.cos(t * 0.000025) * 0.3;

    // Precompute trig
    const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
    const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
    const cosZ = Math.cos(rotZ), sinZ = Math.sin(rotZ);

    // Perspective
    const focalLength = 600;

    dots.forEach((dot) => {
      // Add a gentle fabric ripple in local Z
      const ripple = Math.sin(t * 0.0006 + dot.phase) * 15
        + Math.cos(t * 0.0003 + dot.phase * 0.7) * 10;

      let x = dot.lx;
      let y = dot.ly;
      let z = ripple;

      // Rotate around X axis
      let y1 = y * cosX - z * sinX;
      let z1 = y * sinX + z * cosX;

      // Rotate around Y axis
      let x1 = x * cosY + z1 * sinY;
      let z2 = -x * sinY + z1 * cosY;

      // Rotate around Z axis
      let x2 = x1 * cosZ - y1 * sinZ;
      let y2 = x1 * sinZ + y1 * cosZ;

      // Perspective projection
      const scale = focalLength / (focalLength + z2);
      const screenX = cx + x2 * scale;
      const screenY = cy + y2 * scale;

      // Depth-based size and opacity
      const depthFactor = Math.max(0.3, Math.min(1, scale));
      const dotSize = dot.size * depthFactor;

      ctx.globalAlpha = depthFactor * 0.9;
      ctx.beginPath();
      ctx.arc(screenX, screenY, dotSize, 0, Math.PI * 2);
      if (dot.type === 'bubble') {
        ctx.strokeStyle = dot.color;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Shiny metallic highlight — small bright arc at top-left.
        if (dot.highlight) {
          ctx.beginPath();
          ctx.arc(screenX, screenY, dotSize, -Math.PI * 0.85, -Math.PI * 0.4);
          ctx.strokeStyle = dot.highlight;
          ctx.lineWidth = 1.8;
          ctx.stroke();
        }
      } else {
        ctx.fillStyle = dot.color;
        ctx.fill();
      }
    });

    ctx.globalAlpha = 1;
    animationId = requestAnimationFrame(draw);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!animationId) animationId = requestAnimationFrame(draw);
        } else {
          if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
          }
        }
      });
    },
    { threshold: 0 }
  );

  window.addEventListener('resize', init);

  init();
  observer.observe(canvas);
  animationId = requestAnimationFrame(draw);
})();
