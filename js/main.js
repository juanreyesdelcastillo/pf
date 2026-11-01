/* Navbar, footer, íconos y efectos compartidos */
(function () {
  const PF = window.PF;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ---------- Íconos (trazos estilo lucide) ---------- */
  const P = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    'arrow-up-right': '<path d="M7 17 17 7M8 7h9v9"/>',
    chevron: '<path d="m9 6 6 6-6 6"/>',
    'chevron-left': '<path d="m15 6-6 6 6 6"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    'map-pin': '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
    video: '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.6"/><path d="M16 14.2A5.5 5.5 0 0 1 21.5 20"/>',
    heart: '<path d="M12 20s-7.5-4.6-9.2-9.3C1.6 7.2 4 4 7.3 4c2 0 3.5 1.1 4.7 2.7C13.2 5.1 14.7 4 16.7 4 20 4 22.4 7.2 21.2 10.7 19.5 15.4 12 20 12 20Z"/>',
    feather: '<path d="M20.2 4.8a6 6 0 0 0-8.5 0L5 11.5V19h7.5l6.7-6.7a6 6 0 0 0 1-7.5Z"/><path d="M16 8 3 21M17.5 15H9"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/>',
    clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h3"/>',
    'user-search': '<circle cx="10" cy="8" r="4"/><path d="M2 21a8 8 0 0 1 11-7.4"/><circle cx="18" cy="17" r="3"/><path d="m20.2 19.2 1.8 1.8"/>',
    'credit-card': '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    check: '<path d="m5 12 5 5 9-10"/>',
    shield: '<path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
    whatsapp: '<path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3 3l-4.5 1.5Z"/><path d="M9 9.5c.3 2 2.5 4.3 4.5 4.8l1.2-1.2 1.8.9c-.2 1-1 1.7-2 1.7-3 0-6.5-3.5-6.5-6.5 0-1 .7-1.8 1.7-2l.9 1.8L9 9.5Z"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".8" fill="currentColor"/>',
    facebook: '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8Z"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z" fill="currentColor"/>',
    leaf: '<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15Z"/><path d="M5 19 14 10"/>',
    sparkle: '<path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"/>',
    lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    building: '<path d="M4 21V5l8-3v19M12 8l8 3v10M8 9h.01M8 13h.01M8 17h.01M16 14h.01M16 18h.01M2 21h20"/>',
    laptop: '<rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19h20"/>',
    message: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"/>'
  };
  PF.icon = (name, cls) => '<svg class="' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[name] || '') + '</svg>';
  PF.paintIcons = (root) => (root || document).querySelectorAll('i[data-icon]').forEach(el => {
    el.outerHTML = PF.icon(el.dataset.icon, el.className);
  });

  PF.leafSVG = '<svg viewBox="0 0 200 260" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" aria-hidden="true">' +
    '<path d="M100 258C98 190 104 120 128 40"/>' +
    '<path d="M101 220c-28-6-48-22-56-46 26 0 46 16 56 46Z" fill="currentColor" fill-opacity=".18"/>' +
    '<path d="M102 182c26-8 44-26 48-52-26 4-44 22-48 52Z" fill="currentColor" fill-opacity=".18"/>' +
    '<path d="M106 146c-26-10-42-30-44-56 24 6 40 26 44 56Z" fill="currentColor" fill-opacity=".18"/>' +
    '<path d="M112 110c22-12 36-32 36-58-22 8-36 28-36 58Z" fill="currentColor" fill-opacity=".18"/>' +
    '<path d="M120 74c-18-12-28-30-26-52 20 8 28 28 26 52Z" fill="currentColor" fill-opacity=".18"/>' +
    '</svg>';

  /* ---------- Header / footer compartidos ---------- */
  const page = document.body.dataset.page || 'inicio';
  const headerSlot = document.querySelector('[data-site-header]');
  if (headerSlot) {
    headerSlot.outerHTML =
      '<div class="scroll-progress" aria-hidden="true"></div>' +
      '<header class="site-header"><div class="container site-header__inner">' +
      '<a href="index.html" class="wordmark" aria-label="Psicología Falcón, inicio">Psicología Falcón</a>' +
      '<nav class="site-nav" id="site-nav" aria-label="Principal">' +
      '<a href="index.html"' + (page === 'inicio' ? ' aria-current="page"' : '') + '>Inicio</a>' +
      PF.NAV.map(n => '<a href="' + n.href + '"' + (n.key === page ? ' aria-current="page"' : '') + '>' + n.label + '</a>').join('') +
      '<a class="btn" href="agendar.html">Agendar cita ' + PF.icon('calendar') + '</a>' +
      '</nav>' +
      '<a class="btn btn--sm btn--cta" href="agendar.html" data-magnetic>Agendar cita</a>' +
      '<button class="nav-toggle" aria-controls="site-nav" aria-expanded="false" aria-label="Abrir menú"><span></span></button>' +
      '</div></header>';
  }
  const footerSlot = document.querySelector('[data-site-footer]');
  if (footerSlot) {
    const C = PF.CONTACT;
    footerSlot.outerHTML =
      '<footer class="site-footer"><div class="container">' +
      '<div class="footer-grid">' +
      '<div class="stack"><a href="index.html" class="wordmark wordmark--lg">Psicología Falcón</a>' +
      '<p class="small" style="color:var(--text-inv-2);max-width:26em">Acompañamiento profesional, humano y cercano. Presencial en Pachuca y Mérida, y en línea por Google Meet.</p></div>' +
      '<div><h4>Explora</h4><ul>' + PF.NAV.map(n => '<li><a href="' + n.href + '">' + n.label + '</a></li>').join('') + '</ul></div>' +
      '<div><h4>Contacto</h4><ul><li>' + C.phone + '</li><li>' + C.email + '</li><li>' + C.hours + '</li></ul></div>' +
      '<div><h4>Sedes</h4><ul><li>Pachuca de Soto, Hidalgo</li><li>Mérida, Yucatán</li><li>En línea · Google Meet</li><li><a href="agendar.html">Agendar cita →</a></li></ul></div>' +
      '</div>' +
      '<div class="footer-bar"><div class="footer-bar__info">' +
      '<span>' + PF.icon('map-pin') + 'Pachuca, Hidalgo · Mérida, Yucatán</span>' +
      '<a href="https://wa.me/' + C.whatsapp + '" target="_blank" rel="noopener"><span>' + PF.icon('whatsapp') + 'Escríbenos por WhatsApp</span></a>' +
      '</div><div class="socials"><span>Síguenos</span>' +
      '<a href="https://instagram.com/psicologia_falcon" target="_blank" rel="noopener" aria-label="Instagram">' + PF.icon('instagram') + '</a>' +
      '<a href="#" aria-label="Facebook">' + PF.icon('facebook') + '</a></div></div>' +
      '<div class="footer-bar" style="padding-top:0;border:0"><span>© ' + new Date().getFullYear() + ' Psicología Falcón</span><span>Aviso de privacidad · Términos y condiciones</span></div>' +
      '</div></footer>';
  }
  PF.paintIcons();
  document.querySelectorAll('[data-leaf]').forEach(el => { el.innerHTML = PF.leafSVG; });

  /* ---------- Menú móvil ---------- */
  const toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    const setOpen = (open) => {
      document.documentElement.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    };
    toggle.addEventListener('click', () => setOpen(!document.documentElement.classList.contains('nav-open')));
    document.querySelectorAll('.site-nav a').forEach(a => a.addEventListener('click', () => setOpen(false)));
    addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
  }

  /* ---------- Scroll: header, barra de progreso, parallax ---------- */
  const header = document.querySelector('.site-header');
  const bar = document.querySelector('.scroll-progress');
  const parallax = [...document.querySelectorAll('[data-parallax]')];
  let ticking = false;
  const onScroll = () => {
    const y = scrollY;
    if (header) header.classList.toggle('is-scrolled', y > 30);
    if (bar) {
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.transform = 'scaleX(' + (max > 0 ? y / max : 0) + ')';
    }
    if (!reduce) parallax.forEach(el => {
      const r = el.getBoundingClientRect();
      const mid = r.top + r.height / 2 - innerHeight / 2;
      el.style.transform = 'translate3d(0,' + (-mid * parseFloat(el.dataset.parallax)).toFixed(1) + 'px,0)';
    });
    PF.onScroll && PF.onScroll(y);
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  addEventListener('resize', onScroll);
  onScroll();

  /* ---------- Aparición al hacer scroll ---------- */
  document.querySelectorAll('[data-split]').forEach(el => {
    // Divide un título en líneas (por <br>) para animarlas en cascada.
    const parts = el.innerHTML.split(/<br\s*\/?>/i);
    el.innerHTML = parts.map((p, i) => '<span class="split-line"><span style="--d:' + (i * 120) + 'ms">' + p + '</span></span>').join('');
    el.setAttribute('data-reveal', el.getAttribute('data-reveal') || '');
  });
  document.querySelectorAll('[data-stagger]').forEach(group => {
    const step = parseInt(group.dataset.stagger, 10) || 90;
    [...group.children].forEach((c, i) => {
      if (!c.hasAttribute('data-reveal')) c.setAttribute('data-reveal', '');
      c.style.setProperty('--d', (i * step) + 'ms');
    });
  });
  PF.observeReveals = (root) => {
    const els = (root || document).querySelectorAll('[data-reveal]:not(.is-in)');
    if (reduce || !('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('is-in')); return; }
    els.forEach(e => io.observe(e));
  };
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }) : null;
  PF.observeReveals();

  /* ---------- Contadores ---------- */
  const counters = document.querySelectorAll('[data-count]');
  const runCount = (el) => {
    const to = parseFloat(el.dataset.count), dur = 1600, t0 = performance.now(), suf = el.dataset.suffix || '';
    const tick = (t) => {
      const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = Math.round(to * e).toLocaleString('en-US') + suf;
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (counters.length) {
    if (reduce || !io) counters.forEach(el => { el.textContent = Number(el.dataset.count).toLocaleString('en-US') + (el.dataset.suffix || ''); });
    else {
      const cio = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { runCount(en.target); cio.unobserve(en.target); } }), { threshold: .6 });
      counters.forEach(el => cio.observe(el));
    }
  }

  /* ---------- Interacciones con cursor ---------- */
  if (fine && !reduce) {
    // Brillo que sigue al cursor en tarjetas, botones y mosaicos
    document.addEventListener('pointermove', e => {
      const t = e.target.closest('.card, .btn, .explore a');
      if (!t) return;
      const r = t.getBoundingClientRect();
      t.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      t.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }, { passive: true });

    // Inclinación 3D sutil
    document.querySelectorAll('[data-tilt]').forEach(el => {
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        el.style.transform = 'perspective(900px) rotateX(' + (-y * 6).toFixed(2) + 'deg) rotateY(' + (x * 6).toFixed(2) + 'deg) translateY(-6px)';
      });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });

    // Botones magnéticos
    document.querySelectorAll('[data-magnetic]').forEach(el => {
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        el.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * .18).toFixed(1) + 'px,' + ((e.clientY - r.top - r.height / 2) * .28).toFixed(1) + 'px)';
      });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });

    // Arte del hero que reacciona al cursor
    const art = document.querySelector('[data-hero-art]');
    if (art) {
      const layers = art.querySelectorAll('[data-depth]');
      addEventListener('pointermove', e => {
        const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
        layers.forEach(l => {
          const d = parseFloat(l.dataset.depth);
          l.style.translate = (x * d).toFixed(1) + 'px ' + (y * d).toFixed(1) + 'px';
        });
      }, { passive: true });
    }
  }

  /* ---------- Marquesina: duplica contenido para bucle continuo ---------- */
  document.querySelectorAll('.marquee__track').forEach(t => { t.innerHTML += t.innerHTML; });

  /* ---------- Palabra rotativa del hero ---------- */
  const rot = document.querySelector('.hero__rotator');
  if (rot && !reduce) {
    const words = [...rot.children];
    let i = 0;
    setInterval(() => {
      const cur = words[i];
      cur.classList.remove('is-active'); cur.classList.add('is-leaving');
      setTimeout(() => cur.classList.remove('is-leaving'), 800);
      i = (i + 1) % words.length;
      words[i].classList.add('is-active');
    }, 2600);
  }
})();
