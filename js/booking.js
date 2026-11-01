/* Flujo de reserva (agendar.html) — pago simulado */
(function () {
  const PF = window.PF;
  const STEPS = ['Psicóloga', 'Modalidad', 'Fecha y hora', 'Tus datos', 'Pago'];
  const DOW = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
  const DOW_LONG = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  const MONTHS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  const TOPICS = ['Ansiedad / estrés', 'Terapia familiar', 'Tanatología', 'Perfiles psicológicos', 'Orientación vocacional', 'Infanto-juvenil', 'Otro'];

  const today = new Date(); today.setHours(0, 0, 0, 0);
  const maxDate = new Date(today); maxDate.setDate(maxDate.getDate() + 60);
  const params = new URLSearchParams(location.search);

  const s = {
    step: 0, psy: null, modality: null, type: params.get('tipo') === 'pareja' ? 'pareja' : (params.get('tipo') ? 'individual' : null), topic: null,
    date: null, time: null, month: new Date(today.getFullYear(), today.getMonth(), 1),
    name: '', email: '', phone: '', partner: '', accepted: false, card: '', exp: '', cvv: '',
    error: '', paying: false, done: false
  };
  const pre = PF.TEAM.find(t => t.id === params.get('psicologa'));
  if (pre) { s.psy = pre.id; s.step = 1; }
  if (params.get('modalidad') === 'online') s.modality = 'online';

  const $ = (id) => document.getElementById(id);
  const esc = (v) => String(v).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const psy = () => PF.TEAM.find(t => t.id === s.psy);
  const key = (d) => d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
  const fmtHour = (h) => (h > 12 ? h - 12 : h) + ':00 ' + (h < 12 ? 'a.m.' : 'p.m.');
  const fmtDate = (d) => DOW_LONG[d.getDay()] + ' ' + d.getDate() + ' de ' + MONTHS[d.getMonth()];

  // Disponibilidad simulada, estable por fecha + psicóloga
  function slotsFor(d) {
    const str = key(d) + (s.psy || '');
    let seed = 0;
    for (let i = 0; i < str.length; i++) seed = (seed * 31 + str.charCodeAt(i)) % 9973;
    const out = [];
    for (let h = 8; h <= 19; h++) out.push({ h, taken: ((seed + h * 137) % 10) < 4 });
    return out;
  }
  const bookable = (d) => d > today && d <= maxDate && d.getDay() !== 0;

  function canNext() {
    if (s.step === 0) return !!s.psy;
    if (s.step === 1) return !!(s.modality && s.type && s.topic);
    if (s.step === 2) return !!(s.date && s.time !== null);
    if (s.step === 3) return !!(s.name.trim() && /\S+@\S+\.\S+/.test(s.email) && s.phone.replace(/\D/g, '').length >= 10 && s.accepted);
    return false;
  }

  /* ---------- Render ---------- */
  function render(animate) {
    $('steps').innerHTML = STEPS.map((l, i) =>
      '<li class="' + (s.done || i < s.step ? 'is-done' : i === s.step ? 'is-current' : '') + '"><b>' + (s.done || i < s.step ? '✓' : i + 1) + '</b>' + l + '</li>').join('');
    $('progress').style.width = (s.done ? 100 : (s.step / STEPS.length) * 100 + 10) + '%';
    renderAside();
    const pane = $('pane');
    pane.innerHTML = '<div class="booking__pane">' + (s.done ? paneDone() : [paneTeam, paneMode, paneDate, paneData, panePay][s.step]()) + '</div>';
    if (!animate) pane.firstChild.style.animation = 'none';
    $('foot').innerHTML = s.done ? '' :
      '<button class="btn btn--ghost" data-act="back"' + (s.step === 0 ? ' disabled' : '') + '>Atrás</button>' +
      '<span class="note">' + PF.icon('lock') + 'Todas las sesiones son confidenciales y están protegidas.</span>' +
      (s.step < 4 ? '<button class="btn" data-act="next"' + (canNext() ? '' : ' disabled') + '>Continuar ' + PF.icon('arrow') + '</button>' : '');
  }

  function renderAside() {
    const p = psy();
    $('aside-psy').innerHTML = p
      ? '<span class="eyebrow">Psicóloga seleccionada</span><div style="display:flex;gap:14px;align-items:center"><div class="avatar" style="width:64px;border-radius:50%;--av:' + p.av + '"><span style="font-size:22px">' + PF.initials(p.name) + '</span></div><div><strong style="font-weight:500;line-height:1.3;display:block">' + p.name + '</strong><span class="small muted">' + p.role + '</span></div></div>' +
        '<ul class="check-list small">' + p.areas.slice(0, 3).map(a => '<li>' + PF.icon('check') + a + '</li>').join('') + '</ul>'
      : '<span class="eyebrow">Psicóloga</span><p class="muted small">Aún no eliges. Puedes ver perfiles en <a class="link-arrow" href="equipo.html">Equipo</a>.</p>';
    const mod = s.modality === 'online' ? 'En línea' : s.modality ? 'Presencial · ' + s.modality : '—';
    const rows = [
      ['Modalidad', mod],
      ['Tipo', s.type ? (s.type === 'pareja' ? 'Pareja' : 'Individual') + ' · 60 min' : '—'],
      ['Tema', s.topic || '—'],
      ['Fecha', s.date ? fmtDate(s.date) : '—'],
      ['Hora', s.time !== null ? fmtHour(s.time) : '—']
    ];
    $('summary').innerHTML = rows.map(r => '<div><dt>' + r[0] + '</dt><dd>' + esc(r[1]) + '</dd></div>').join('');
    $('total').textContent = s.type ? PF.money(PF.PRICE[s.type]) : '—';
  }

  const pressed = (b) => ' aria-pressed="' + b + '"';

  function paneTeam() {
    return '<div><h3>Elige a tu psicóloga</h3><p class="muted">Todas atienden también en línea.</p></div>' +
      '<div class="grid grid--2" style="gap:14px">' + PF.TEAM.map(t =>
        '<button class="option" data-psy="' + t.id + '"' + pressed(s.psy === t.id) + '><div class="option__head">' +
        '<div class="avatar" style="--av:' + t.av + '"><span>' + PF.initials(t.name) + '</span></div>' +
        '<div><strong>' + t.name + '</strong><span style="display:block">' + t.sedes.join(' y ') + ' · en línea</span></div></div>' +
        '<span>' + t.areas.join(' · ') + '</span></button>').join('') + '</div>';
  }

  function paneMode() {
    const p = psy();
    const mods = p.sedes.map(c => ({ v: c, l: 'Presencial – ' + c, n: 'Consultorio ' + c })).concat([{ v: 'online', l: 'En línea', n: 'Sesión por videollamada' }]);
    return '<div><h3>Modalidad y tipo de sesión</h3><p class="muted">Solo se muestran las sedes donde atiende ' + p.first + '.</p></div>' +
      '<div class="grid grid--3" style="gap:12px">' + mods.map(m =>
        '<button class="option" data-mod="' + m.v + '"' + pressed(s.modality === m.v) + '><strong>' + m.l + '</strong><span>' + m.n + '</span></button>').join('') + '</div>' +
      '<div class="grid grid--2" style="gap:12px">' +
        '<button class="option" data-type="individual"' + pressed(s.type === 'individual') + '><strong>Individual</strong><span>$1,000 MXN · 60 min · una persona</span></button>' +
        '<button class="option" data-type="pareja"' + pressed(s.type === 'pareja') + '><strong>Pareja</strong><span>$1,250 MXN · 60 min · dos personas</span></button>' +
      '</div>' +
      '<div class="stack" style="gap:10px"><span class="small muted">Tema de consulta (informativo, no cambia el precio)</span><div style="display:flex;flex-wrap:wrap;gap:8px">' +
        TOPICS.map(t => '<button class="chip" data-topic="' + t + '"' + pressed(s.topic === t) + '>' + t + '</button>').join('') + '</div></div>';
  }

  function paneDate() {
    const m = s.month, y = m.getFullYear(), mo = m.getMonth();
    const first = (new Date(y, mo, 1).getDay() + 6) % 7; // lunes = 0
    const days = new Date(y, mo + 1, 0).getDate();
    const prevOk = new Date(y, mo, 1) > today;
    const nextOk = new Date(y, mo + 1, 1) <= maxDate;
    let cells = DOW.map(d => '<span class="dow">' + d + '</span>').join('');
    for (let i = 0; i < first; i++) cells += '<span></span>';
    for (let d = 1; d <= days; d++) {
      const dt = new Date(y, mo, d);
      const sel = s.date && key(s.date) === key(dt);
      cells += '<button class="cal__day' + (key(dt) === key(today) ? ' is-today' : '') + '" data-day="' + d + '"' + (bookable(dt) ? '' : ' disabled') + pressed(!!sel) + '>' + d + '</button>';
    }
    let slots = '<p class="muted small">Selecciona un día para ver los horarios disponibles.</p>';
    if (s.date) {
      slots = '<div class="slots">' + slotsFor(s.date).map((t, i) =>
        '<button class="slot" style="animation-delay:' + i * 30 + 'ms" data-time="' + t.h + '"' + (t.taken ? ' disabled' : '') + pressed(s.time === t.h) + '>' + fmtHour(t.h) + '</button>').join('') + '</div>';
    }
    return '<div><h3>Selecciona fecha y hora</h3><p class="muted">Lunes a sábado, 8:00 a.m. a 8:00 p.m.</p></div>' +
      '<div class="cal"><div><div class="cal__head">' +
        '<button class="cal__nav" data-month="-1" aria-label="Mes anterior"' + (prevOk ? '' : ' disabled') + '>' + PF.icon('chevron-left') + '</button>' +
        '<strong>' + MONTHS[mo] + ' ' + y + '</strong>' +
        '<button class="cal__nav" data-month="1" aria-label="Mes siguiente"' + (nextOk ? '' : ' disabled') + '>' + PF.icon('chevron') + '</button>' +
      '</div><div class="cal__grid">' + cells + '</div></div>' +
      '<div class="stack"><strong style="font-weight:500">Horarios disponibles</strong>' +
        (s.date ? '<span class="small muted" style="text-transform:capitalize">' + fmtDate(s.date) + '</span>' : '') + slots + '</div></div>';
  }

  function paneData() {
    const f = (id, label, type, ph, val) => '<div class="field"><label for="' + id + '">' + label + '</label><input class="input" id="' + id + '" data-field="' + id + '" type="' + type + '" placeholder="' + ph + '" value="' + esc(val) + '"></div>';
    return '<div><h3>Tus datos</h3><p class="muted">Te enviaremos el comprobante a tu correo.</p></div>' +
      '<div class="form-grid">' +
        f('name', 'Nombre completo', 'text', 'Tu nombre', s.name) +
        f('email', 'Correo electrónico', 'email', 'tucorreo@ejemplo.com', s.email) +
        f('phone', 'Teléfono', 'tel', '10 dígitos', s.phone) +
        (s.type === 'pareja' ? f('partner', 'Nombre de tu acompañante (opcional)', 'text', 'Nombre', s.partner) : '') +
      '</div>' +
      '<details class="card" style="padding:20px"><summary style="cursor:pointer;font-weight:500">Políticas de la clínica</summary><ul class="check-list small" style="margin-top:14px">' +
        '<li>' + PF.icon('check') + 'Cancelación sin costo hasta 24 h antes; después se pierde el pago.</li>' +
        '<li>' + PF.icon('check') + 'Tolerancia de 30 minutos desde el inicio.</li>' +
        '<li>' + PF.icon('check') + 'Si la clínica cancela, tienes prioridad para reagendar.</li>' +
        '<li>' + PF.icon('check') + 'Pago 100% por adelantado al agendar.</li></ul></details>' +
      '<label class="accept"><input type="checkbox" data-field="accepted"' + (s.accepted ? ' checked' : '') + '><span>Acepto la política de cancelación: si cancelo con menos de 24 horas de anticipación, pierdo el pago de la sesión.</span></label>' +
      (s.error ? '<p class="error">' + s.error + '</p>' : '');
  }

  function panePay() {
    return '<div><h3>Pago</h3><p class="muted">Total a pagar hoy: <strong>' + PF.money(PF.PRICE[s.type]) + '</strong></p></div>' +
      '<div class="stack" style="max-width:480px">' +
        '<div class="field"><label for="card">Número de tarjeta</label><input class="input" id="card" data-field="card" inputmode="numeric" placeholder="0000 0000 0000 0000" value="' + esc(s.card) + '"></div>' +
        '<div class="form-grid" style="grid-template-columns:1fr 1fr">' +
          '<div class="field"><label for="exp">Vencimiento</label><input class="input" id="exp" data-field="exp" placeholder="MM/AA" value="' + esc(s.exp) + '"></div>' +
          '<div class="field"><label for="cvv">CVV</label><input class="input" id="cvv" data-field="cvv" inputmode="numeric" placeholder="123" value="' + esc(s.cvv) + '"></div>' +
        '</div>' +
        '<p class="small muted">Pago simulado. No se procesa ningún cobro real.</p>' +
        (s.error ? '<p class="error">' + s.error + '</p>' : '') +
        '<button class="btn btn--lg" data-act="pay"' + (s.paying ? ' disabled' : '') + ' style="justify-self:start">' + (s.paying ? 'Procesando pago…' : 'Pagar ' + PF.money(PF.PRICE[s.type])) + '</button>' +
      '</div>';
  }

  function paneDone() {
    const p = psy();
    const mod = s.modality === 'online' ? 'en línea por Google Meet' : 'presencial en ' + s.modality;
    return '<div class="success-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5 9-10"/></svg></div>' +
      '<h3 style="font-size:clamp(30px,4vw,44px)">Tu sesión está confirmada</h3>' +
      '<p class="lead">Sesión con ' + p.name + ', ' + fmtDate(s.date) + ' a las ' + fmtHour(s.time) + ', ' + mod + '.</p>' +
      (s.modality === 'online' ? '<p class="card" style="background:var(--sage-100);border:0">El enlace de Google Meet se envía a tu correo antes de la sesión.</p>' : '') +
      '<p class="muted small">Enviamos el comprobante a ' + esc(s.email) + '. Recuerda: puedes cancelar sin costo hasta 24 horas antes.</p>' +
      '<div class="hero__actions"><button class="btn btn--ghost" data-act="restart">Agendar otra sesión</button><a class="btn" href="index.html">Volver al inicio</a></div>';
  }

  /* ---------- Eventos ---------- */
  const panel = document.querySelector('.booking__panel');
  panel.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b || b.disabled) return;
    const d = b.dataset;
    let animate = false;
    if (d.psy) {
      s.psy = d.psy;
      const p = psy();
      if (s.modality && s.modality !== 'online' && p.sedes.indexOf(s.modality) < 0) s.modality = null;
      s.time = null;
    }
    else if (d.mod) s.modality = d.mod;
    else if (d.type) s.type = d.type;
    else if (d.topic) s.topic = d.topic;
    else if (d.month) { s.month = new Date(s.month.getFullYear(), s.month.getMonth() + +d.month, 1); }
    else if (d.day) { s.date = new Date(s.month.getFullYear(), s.month.getMonth(), +d.day); s.time = null; }
    else if (d.time) s.time = +d.time;
    else if (d.act === 'back') { s.step = Math.max(0, s.step - 1); s.error = ''; animate = true; }
    else if (d.act === 'next') { if (!canNext()) return; s.step++; s.error = ''; animate = true; }
    else if (d.act === 'pay') return pay();
    else if (d.act === 'restart') { Object.assign(s, { step: 0, psy: null, modality: null, type: null, topic: null, date: null, time: null, accepted: false, card: '', exp: '', cvv: '', done: false, error: '' }); animate = true; }
    else return;
    render(animate);
    if (animate) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Campos de texto: actualizar estado sin re-renderizar (no perder el foco)
  panel.addEventListener('input', (e) => {
    const f = e.target.dataset.field;
    if (!f) return;
    s[f] = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    s.error = '';
    renderAside();
    const next = panel.querySelector('[data-act="next"]');
    if (next) next.disabled = !canNext();
  });
  // Explicar por qué no avanza en el paso de datos
  panel.addEventListener('focusout', (e) => {
    if (s.step !== 3 || !e.target.dataset.field) return;
    const msg = (!s.name.trim() || !/\S+@\S+\.\S+/.test(s.email) || s.phone.replace(/\D/g, '').length < 10) && s.name && s.email && s.phone
      ? 'Revisa tu nombre, correo y teléfono (10 dígitos) para continuar.' : '';
    const err = panel.querySelector('.error');
    if (msg && !err) e.target.closest('.booking__pane').insertAdjacentHTML('beforeend', '<p class="error">' + msg + '</p>');
    if (!msg && err) err.remove();
  });

  function pay() {
    if (s.card.replace(/\D/g, '').length < 15) { s.error = 'Ingresa un número de tarjeta válido.'; return render(false); }
    if (!/^\d{2}\/\d{2}$/.test(s.exp.trim())) { s.error = 'Ingresa el vencimiento como MM/AA.'; return render(false); }
    if (s.cvv.replace(/\D/g, '').length < 3) { s.error = 'Ingresa el CVV.'; return render(false); }
    s.paying = true; s.error = ''; render(false);
    setTimeout(() => { s.paying = false; s.done = true; render(true); }, 1600);
  }

  render(false);
})();
