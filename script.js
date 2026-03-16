// =============================================
// MAGDIEL PAULO — PORTFOLIO
// =============================================

const i18n = {
  pt: {
    nav_about: "Sobre",
    nav_skills: "Skills",
    nav_projects: "Projetos",
    nav_experience: "Experiência",
    nav_education: "Formação",
    nav_contact: "Contato",
    hero_greeting: '<i class="bi bi-terminal-fill"></i> Olá, eu sou',
    hero_role: "Desenvolvedor Full-Stack Júnior",
    hero_bio: "Formado em Ciência da Computação, focado em construir aplicações web modernas e escaláveis com atenção a design e performance.",
    hero_cta: '<i class="bi bi-rocket-takeoff"></i> Ver Projetos',
    hero_contact: '<i class="bi bi-chat-dots"></i> Contato',
    scroll_text: "scroll",
    about_tag: "01 // Sobre mim",
    about_heading: 'Transformando ideias em <span class="accent">soluções digitais</span>.',
    about_p1: "Profissional com formação em Ciência da Computação e especialização em andamento em Desenvolvimento Full Stack. Experiência no desenvolvimento web com JavaScript, Python e Angular, além de construção de APIs REST e manipulação de bancos de dados SQL.",
    about_p2: "Vivência prática no desenvolvimento de soluções tecnológicas, automação de processos administrativos e suporte a sistemas corporativos. Busco oportunidades para construir aplicações web escaláveis e melhorar sistemas existentes.",
    info_name: "Nome",
    info_location: "Localização",
    info_location_val: "Maceió, AL — Brasil",
    info_email: "E-mail",
    info_status: "Disponível para projetos",
    skills_tag: "02 // Competências",
    skills_heading: 'Stack <span class="accent">tecnológica</span>.',
    sk_lang: "Linguagens",
    sk_db: "Banco de Dados",
    sk_tools: "Ferramentas",
    projects_tag: "03 // Projetos",
    projects_heading: 'Trabalhos <span class="accent">selecionados</span>.',
    proj1_name: "Portfólio Pessoal",
    proj1_desc: "Sistema portfólio interativo com tema retrowave — HTML, CSS, JavaScript, Vite.",
    proj2_name: "Calculadora de IMC",
    proj2_desc: "Calculadora interativa de Índice de Massa Corporal com classificação automática.",
    proj3_name: "Site de Viagens",
    proj3_desc: "Landing page de agência de viagens para prática de layout responsivo e front-end.",
    proj4_name: "Chronos Timer",
    proj4_desc: "Sistema Pomodoro completo com gestão de tarefas, estatísticas de produtividade e personalização de temas.",
    exp_tag: "04 // Experiência",
    exp_heading: 'Trajetória <span class="accent">profissional</span>.',
    exp1_period: "1 ano e 4 meses",
    exp1_title: "Professor Técnico em Informática",
    exp1_desc: "Ensino de lógica de programação, algoritmos e fundamentos de desenvolvimento de software. Orientação de projetos de conclusão de curso e organização de feiras de tecnologia.",
    exp2_period: "6 meses",
    exp2_title: "Instrutor de Informática",
    exp2_desc: "Ensino de informática aplicada, sistemas operacionais e ferramentas de produtividade. Desenvolvimento de exercícios práticos e atualização de materiais didáticos.",
    exp3_period: "2 anos",
    exp3_title: "Técnico de Suporte de TI",
    exp3_desc: "Suporte técnico em ambientes corporativos e educacionais, manutenção de hardware, configuração de redes e administração de infraestrutura tecnológica.",
    exp4_period: "2 anos",
    exp4_title: "Assistente Administrativo — TI",
    exp4_desc: "Desenvolvimento de soluções internas com HTML, CSS e JavaScript. Automação de processos administrativos, integração de dados entre setores e elaboração de documentação técnica.",
    edu_tag: "05 // Formação",
    edu_heading: 'Formação <span class="accent">acadêmica</span>.',
    edu1_period: "2019 — 2023",
    edu1_title: "Bacharelado em Ciência da Computação",
    edu1_inst: "Centro Universitário de Maceió — UNIMA | AFYA",
    edu2_period: "Jan/2026 — Abr/2026",
    edu2_title: "Especialização em Desenvolvimento Full Stack",
    edu2_inst: "Centro Universitário União das Américas Descomplica",
    edu2_status: '<i class="bi bi-hourglass-split"></i> Em andamento',
    cert_label: "Certificação",
    cert_title: "AWS Cloud Practitioner",
    cert_inst: "Escola da Nuvem — Programa de Capacitação em Nuvem",
    cert_status: '<i class="bi bi-hourglass-split"></i> Em preparação',
    contact_tag: "06 // Contato",
    contact_heading: 'Vamos <span class="accent">trabalhar</span> juntos?',
    contact_sub: "Aberto a novas oportunidades, freelance e projetos interessantes.",
    footer_made: 'Feito com <i class="bi bi-heart-fill"></i> e muito código.',
  },
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_education: "Education",
    nav_contact: "Contact",
    hero_greeting: '<i class="bi bi-terminal-fill"></i> Hi, I\'m',
    hero_role: "Junior Full-Stack Developer",
    hero_bio: "Computer Science graduate focused on building modern and scalable web applications with attention to design and performance.",
    hero_cta: '<i class="bi bi-rocket-takeoff"></i> View Projects',
    hero_contact: '<i class="bi bi-chat-dots"></i> Contact',
    scroll_text: "scroll",
    about_tag: "01 // About me",
    about_heading: 'Turning ideas into <span class="accent">digital solutions</span>.',
    about_p1: "Professional with a degree in Computer Science and an ongoing specialization in Full Stack Development. Experience in web development with JavaScript, Python and Angular, REST API construction and SQL database management.",
    about_p2: "Hands-on experience in developing tech solutions, automating administrative processes and supporting corporate systems. Seeking opportunities to build scalable web applications and improve existing systems.",
    info_name: "Name",
    info_location: "Location",
    info_location_val: "Maceió, AL — Brazil",
    info_email: "Email",
    info_status: "Available for projects",
    skills_tag: "02 // Skills",
    skills_heading: 'Tech <span class="accent">stack</span>.',
    sk_lang: "Languages",
    sk_db: "Databases",
    sk_tools: "Tools",
    projects_tag: "03 // Projects",
    projects_heading: 'Selected <span class="accent">works</span>.',
    proj1_name: "Personal Portfolio",
    proj1_desc: "Interactive portfolio system with retrowave theme — HTML, CSS, JavaScript, Vite.",
    proj2_name: "BMI Calculator",
    proj2_desc: "Interactive Body Mass Index calculator with automatic classification.",
    proj3_name: "Travel Website",
    proj3_desc: "Travel agency landing page for responsive layout and front-end practice.",
    proj4_name: "Chronos Timer",
    proj4_desc: "Full Pomodoro system with task management, productivity stats and theme customization.",
    exp_tag: "04 // Experience",
    exp_heading: 'Professional <span class="accent">journey</span>.',
    exp1_period: "1 year 4 months",
    exp1_title: "IT Technical Instructor",
    exp1_desc: "Teaching programming logic, algorithms and software development fundamentals. Mentoring final projects and organizing technology fairs.",
    exp2_period: "6 months",
    exp2_title: "Computer Science Instructor",
    exp2_desc: "Teaching applied computing, operating systems and productivity tools. Developing practical exercises and updating course materials.",
    exp3_period: "2 years",
    exp3_title: "IT Support Technician",
    exp3_desc: "Technical support in corporate and educational environments, hardware maintenance, network configuration and technology infrastructure management.",
    exp4_period: "2 years",
    exp4_title: "Administrative Assistant — IT",
    exp4_desc: "Developing internal solutions with HTML, CSS and JavaScript. Automating administrative processes, integrating data across departments and writing technical documentation.",
    edu_tag: "05 // Education",
    edu_heading: 'Academic <span class="accent">education</span>.',
    edu1_period: "2019 — 2023",
    edu1_title: "Bachelor's in Computer Science",
    edu1_inst: "Centro Universitário de Maceió — UNIMA | AFYA",
    edu2_period: "Jan/2026 — Apr/2026",
    edu2_title: "Full Stack Development Specialization",
    edu2_inst: "União das Américas Descomplica University Center",
    edu2_status: '<i class="bi bi-hourglass-split"></i> In progress',
    cert_label: "Certification",
    cert_title: "AWS Cloud Practitioner",
    cert_inst: "Escola da Nuvem — Cloud Training Program",
    cert_status: '<i class="bi bi-hourglass-split"></i> In preparation',
    contact_tag: "06 // Contact",
    contact_heading: 'Let\'s <span class="accent">work</span> together?',
    contact_sub: "Open to new opportunities, freelance and interesting projects.",
    footer_made: 'Made with <i class="bi bi-heart-fill"></i> and lots of code.',
  },
};

const htmlKeys = new Set([
  "hero_greeting", "hero_cta", "hero_contact",
  "about_heading", "skills_heading", "projects_heading",
  "exp_heading", "edu_heading", "edu2_status", "cert_status",
  "contact_heading", "footer_made",
]);

let lang = localStorage.getItem("lang") || "pt";
let theme = localStorage.getItem("theme") || "dark";

function setLang(l) {
  lang = l;
  localStorage.setItem("lang", l);
  const d = i18n[l];
  if (!d) return;
  document.querySelectorAll("[data-key]").forEach((el) => {
    const k = el.dataset.key;
    if (!d[k]) return;
    if (htmlKeys.has(k)) el.innerHTML = d[k];
    else el.textContent = d[k];
  });
  document.documentElement.lang = l === "pt" ? "pt-BR" : "en";
}

function setTheme(t) {
  theme = t;
  localStorage.setItem("theme", t);
  document.body.classList.toggle("light", t === "light");
  const icon = document.getElementById("icon-theme");
  if (icon) icon.className = t === "light" ? "bi bi-sun-fill" : "bi bi-moon-stars";
}

function initCursor() {
  const g = document.getElementById("cursorGlow");
  if (!g || matchMedia("(max-width:768px)").matches) return;
  let mx = 0, my = 0, cx = 0, cy = 0;
  document.addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; });
  (function loop() {
    cx += (mx - cx) * 0.07;
    cy += (my - cy) * 0.07;
    g.style.left = cx + "px";
    g.style.top = cy + "px";
    requestAnimationFrame(loop);
  })();
}

function initHeader() {
  const h = document.getElementById("header");
  if (!h) return;
  let t = false;
  window.addEventListener("scroll", () => {
    if (!t) {
      requestAnimationFrame(() => { h.classList.toggle("scrolled", scrollY > 40); t = false; });
      t = true;
    }
  });
}

function initMobile() {
  const btn = document.getElementById("btn-menu");
  const nav = document.getElementById("mobile-nav");
  if (!btn || !nav) return;
  const close = () => { btn.classList.remove("open"); nav.classList.remove("open"); document.body.style.overflow = ""; };
  btn.addEventListener("click", () => {
    const o = nav.classList.toggle("open"); btn.classList.toggle("open");
    document.body.style.overflow = o ? "hidden" : "";
  });
  nav.querySelectorAll(".mobile-link").forEach((a) => a.addEventListener("click", close));
}

function initReveal() {
  const els = document.querySelectorAll('[data-anim="up"]');
  if (!els.length) return;

  // Fallback: if IntersectionObserver isn't supported, show everything
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("visible"));
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
  }, { threshold: 0.05, rootMargin: "0px 0px -10px 0px" });
  els.forEach((el, i) => { el.style.transitionDelay = `${i * 0.06}s`; obs.observe(el); });
}

function initAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (ev) => {
      const t = document.querySelector(a.getAttribute("href"));
      if (t) { ev.preventDefault(); t.scrollIntoView({ behavior: "smooth", block: "start" }); }
    });
  });
}

function initActiveNav() {
  const sections = document.querySelectorAll("main .section, .hero");
  const links = document.querySelectorAll("#nav-desktop .nav-link");
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const id = e.target.id;
        links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === `#${id}`));
      }
    });
  }, { threshold: 0.3 });
  sections.forEach((s) => obs.observe(s));
}

function init() {
  // Signal CSS that JS is running — enables scroll animations
  document.documentElement.classList.add("js-ready");

  setTheme(theme);
  setLang(lang);
  initCursor();
  initHeader();
  initMobile();
  initReveal();
  initAnchors();
  initActiveNav();

  document.getElementById("btn-tema")?.addEventListener("click", () => setTheme(theme === "dark" ? "light" : "dark"));
  document.getElementById("btn-idioma")?.addEventListener("click", () => setLang(lang === "pt" ? "en" : "pt"));
}

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();