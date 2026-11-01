/* Contenido compartido entre páginas */
window.PF = window.PF || {};

PF.NAV = [
  { href: 'servicios.html', label: 'Servicios', key: 'servicios' },
  { href: 'proceso.html', label: 'Proceso', key: 'proceso' },
  { href: 'equipo.html', label: 'Equipo', key: 'equipo' },
  { href: 'modalidades.html', label: 'Modalidades', key: 'modalidades' },
  { href: 'resenas.html', label: 'Reseñas', key: 'resenas' },
  { href: 'preguntas.html', label: 'Preguntas', key: 'preguntas' }
];

PF.CONTACT = {
  phone: '771 000 0000',
  whatsapp: '527710000000',
  email: 'hola@psicologiafalcon.mx',
  hours: 'Lunes a sábado, 8:00 a.m. – 8:00 p.m.'
};

PF.TEAM = [
  { id: 'linda', first: 'Linda', name: 'Linda Madel Falcón Aldana', role: 'Psicóloga fundadora', cedula: '3520932',
    sedes: ['Pachuca', 'Mérida'], av: 'linear-gradient(150deg,#B7C0A9,#6B7A5E)',
    areas: ['Individual', 'Pareja', 'Familiar', 'Tanatología'],
    bio: 'Fundó Psicología Falcón con la idea de un espacio cálido y profesional. Acompaña procesos individuales, de pareja y familia, y duelos.' },
  { id: 'anakaren', first: 'Ana Karen', name: 'Ana Karen González Cisneros', role: 'Psicóloga', cedula: '10236558',
    sedes: ['Pachuca'], av: 'linear-gradient(150deg,#D3D9C9,#7F8D71)',
    areas: ['Cognitivo-conductual', 'Pareja', 'Orientación vocacional', 'Tanatología'],
    bio: 'Trabaja con un enfoque cognitivo-conductual práctico y estructurado, con herramientas concretas para cada semana.' },
  { id: 'naomi', first: 'Naomi', name: 'Brenda Naomi García Díaz', role: 'Psicóloga', cedula: '15214746',
    sedes: ['Pachuca'], av: 'linear-gradient(150deg,#E5DDD0,#9AA68C)',
    areas: ['Infanto-juvenil', 'Orientación vocacional', 'Individual', 'Evaluación psicológica'],
    bio: 'Acompaña a niñas, niños y adolescentes, y realiza evaluaciones y perfiles psicológicos.' },
  { id: 'karla', first: 'Karla', name: 'Karla Alexa Arias Falcón', role: 'Psicóloga asociada', cedula: null,
    sedes: ['Pachuca', 'Mérida'], av: 'linear-gradient(150deg,#9AA68C,#4D5943)',
    areas: ['Humanista-existencial', 'Infantojuvenil', 'Terapia de juego'],
    bio: 'Desde un enfoque humanista-existencial, crea un espacio para explorar y platicar libremente, también a través del juego.' }
];

PF.PRICE = { individual: 1000, pareja: 1250 };

PF.TOPICS = [
  { label: 'Terapia individual', icon: 'user', text: 'Ansiedad, estrés, autoestima y momentos de cambio.', bg: 'linear-gradient(160deg,#9AA68C,#5C6B50)' },
  { label: 'Terapia de pareja', icon: 'heart', text: 'Comunicación, acuerdos y reconstrucción de la confianza.', bg: 'linear-gradient(160deg,#B7C0A9,#6B7A5E)' },
  { label: 'Terapia familiar', icon: 'users', text: 'Dinámicas familiares, límites y acompañamiento en conjunto.', bg: 'linear-gradient(160deg,#A08770,#6B7A5E)' },
  { label: 'Tanatología', icon: 'feather', text: 'Acompañamiento en el duelo y la pérdida.', bg: 'linear-gradient(160deg,#7F8D71,#3E4836)' },
  { label: 'Infanto-juvenil', icon: 'sun', text: 'Niñas, niños y adolescentes, incluida terapia de juego.', bg: 'linear-gradient(160deg,#C9BFA8,#7F8D71)' },
  { label: 'Orientación vocacional', icon: 'compass', text: 'Claridad para decidir qué estudiar o hacia dónde ir.', bg: 'linear-gradient(160deg,#9AA68C,#4D5943)' },
  { label: 'Perfiles psicológicos', icon: 'clipboard', text: 'Evaluación psicológica con reporte profesional.', bg: 'linear-gradient(160deg,#B7C0A9,#7E6853)' }
];

PF.REVIEWS = [
  { quote: 'Llegué sin saber cómo nombrar lo que sentía. Salí con algo concreto que practicar esa misma semana.', author: 'M. R.', detail: 'Terapia individual · Pachuca', tag: 'Individual' },
  { quote: 'Agendar en línea nos quitó la parte incómoda. Elegimos horario un domingo y el lunes ya teníamos sesión.', author: 'A. y J. L.', detail: 'Terapia de pareja · En línea', tag: 'Pareja' },
  { quote: 'Mi hija esperaba su sesión con gusto. Eso, para mí, ya decía bastante.', author: 'C. F.', detail: 'Infanto-juvenil · Mérida', tag: 'Infanto-juvenil' },
  { quote: 'Después de perder a mi papá no sabía por dónde empezar. Aquí encontré un espacio sin prisa para hacerlo.', author: 'L. G.', detail: 'Tanatología · En línea', tag: 'Tanatología' },
  { quote: 'La orientación vocacional me ayudó a decidir con calma y con información, no por presión.', author: 'D. P.', detail: 'Orientación vocacional · Pachuca', tag: 'Vocacional' },
  { quote: 'Me gustó poder elegir a mi psicóloga y ver horarios reales. Todo fue muy claro desde el principio.', author: 'S. M.', detail: 'Terapia individual · Mérida', tag: 'Individual' }
];

PF.FAQS = [
  { cat: 'Citas', q: '¿Puedo cancelar o cambiar mi cita?', a: 'Sí, sin costo hasta 24 horas antes de la sesión. Pasada esa ventana se pierde el pago y hay que agendar de nuevo.' },
  { cat: 'Citas', q: '¿Qué pasa si llego tarde?', a: 'Hay 30 minutos de tolerancia desde el inicio de la sesión. La sesión termina a la hora prevista.' },
  { cat: 'Pagos', q: '¿Cómo se paga la sesión?', a: 'El pago es 100% por adelantado, en una sola exhibición, al momento de agendar. No se paga el día de la sesión y no hay descuentos por paquete.' },
  { cat: 'Pagos', q: '¿Hay consulta inicial gratuita?', a: 'No. Cada sesión se cobra completa e individualmente, incluida la primera.' },
  { cat: 'Pagos', q: '¿El precio cambia según el tema?', a: 'No. El precio depende de cuántas personas asisten: Individual $1,000 MXN o Pareja $1,250 MXN, sesiones de 60 minutos.' },
  { cat: 'Psicólogas', q: '¿Puedo cambiar de psicóloga después de agendar?', a: 'No hay cambio automático. Si quieres cambiar, agendas directamente con otra psicóloga desde el portal.' },
  { cat: 'Psicólogas', q: '¿El cuestionario me asigna psicóloga?', a: 'No. Solo sugiere una o dos opciones; tú decides con quién agendar.' },
  { cat: 'Modalidades', q: '¿Cómo funciona la sesión en línea?', a: 'Es por Google Meet. El enlace se genera automáticamente desde el calendario de la clínica al confirmar la reserva y llega a tu correo antes de la sesión.' },
  { cat: 'Modalidades', q: '¿Atienden en otras ciudades?', a: 'De forma presencial solo en Pachuca y Mérida. Desde cualquier otra ciudad puedes tomar terapia en línea con las cuatro psicólogas.' },
  { cat: 'Citas', q: '¿Atienden domingos?', a: 'No. El horario es de lunes a sábado, de 8:00 a.m. a 8:00 p.m.' }
];

PF.initials = (name) => name.split(' ').slice(0, 2).map(w => w[0]).join('');
PF.money = (n) => '$' + n.toLocaleString('en-US') + ' MXN';
