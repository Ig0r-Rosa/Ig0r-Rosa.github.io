/**
 * Comportamentos leves: digitação no subtítulo e ano no rodapé.
 */

(function () {
  "use strict";

  const el = document.getElementById("typed-tagline");
  if (!el) return;

  const phrases = [
    "> AI automation & back-end",
    "> Generative AI · MCP · vibe coding",
    "> Laravel · Python · quality @ scale",
  ];

  let pi = 0;
  let ci = 0;
  let deleting = false;

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function tick() {
    if (prefersReducedMotion()) {
      el.textContent = phrases[0];
      return;
    }

    const full = phrases[pi];
    if (!deleting) {
      el.textContent = full.slice(0, ci + 1);
      ci++;
      if (ci === full.length) {
        deleting = true;
        setTimeout(tick, 2000);
        return;
      }
    } else {
      el.textContent = full.slice(0, ci - 1);
      ci--;
      if (ci === 0) {
        deleting = false;
        pi = (pi + 1) % phrases.length;
      }
    }

    const delay = deleting ? 40 : 55;
    setTimeout(tick, delay);
  }

  tick();
})();
