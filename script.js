document.addEventListener("DOMContentLoaded", () => {
  /* =========================================================
     INICIALIZAÇÃO / LOADING
  ========================================================= */
  const carregador = document.getElementById("carregador");
  const conteudoPrincipal = document.getElementById("conteudo-principal");
  const progresso = document.querySelector(".progresso");

  let largura = 0;

  const intervalo = setInterval(() => {
    if (largura >= 100) {
      clearInterval(intervalo);
      carregador.style.display = "none";
      conteudoPrincipal.style.display = "block";
      return;
    }

    largura++;
    progresso.style.width = largura + "%";
  }, 15);

  /* =========================================================
     SISTEMA DE TEMA (CLARO/ESCURO)
  ========================================================= */
  const btnTema = document.getElementById("btn-tema");
  const body = document.body;

  function aplicarTema(tema) {
    if (tema === "claro") {
      body.classList.add("tema-claro");
    } else {
      body.classList.remove("tema-claro");
    }

    localStorage.setItem("temaPreferido", tema);
  }

  btnTema.addEventListener("click", () => {
    const novoTema = body.classList.contains("tema-claro") ? "escuro" : "claro";
    aplicarTema(novoTema);
  });

  const temaSalvo = localStorage.getItem("temaPreferido");
  if (temaSalvo) {
    aplicarTema(temaSalvo);
  }

  /* =========================================================
     SISTEMA DE IDIOMA (PT/EN)
  ========================================================= */
  const btnIdioma = document.getElementById("btn-idioma");

  const traducoes = {
    pt: {
      loading_text: "Inicializando Sistema CyberDev...",
      nav_panel: "[ Inicio ]",
      nav_profile: "[ Perfil ]",
      nav_missions: "[ Missões ]",
      nav_education: "[ Formação ]",
      nav_experience: "[ Experiência ]",
      nav_about: "[ Sobre ]",
      nav_contact: "[ Contato ]",
      theme_button: "Tema",
      main_title: "Desenvolvedor Full-Stack",
      access_button: "ACESSAR SISTEMA",

      profile_title: "PERFIL DE USUÁRIO",
      profile_user: "USUÁRIO:",
      profile_class: "CLASSE:",
      profile_location: "LOCAL:",
      profile_status: "STATUS:",
      profile_class_value: "Desenvolvedor Full Stack",
      profile_location_value: "Brasil",
      profile_status_value: "Disponível para novas missões",

      missions_title: "PROJETOS // MISSÕES",
      mission1_title: "Sistema de Portfólio",
      mission2_title: "???",
      mission3_title: "???",
      mission4_title: "???",
      mission5_title: "???",
      mission6_title: "???",
      btn_view_project: "VER REPOSITÓRIO",

      education_title: "FORMAÇÃO ACADÊMICA",
      education_degree1_title: "Bacharelado em Ciência da Computação",
      education_degree1_inst: "Centro Universitário de Maceió – UNIMA | AFYA",
      education_degree1_period: "2019 – 2023",
      education_degree2_title:
        "Pós-graduação Lato Sensu – Especialização em Desenvolvimento Full Stack",
      education_degree2_inst: "Centro Universitário União das Américas Descomplica",
      education_degree2_period: "Janeiro/2026 – Abril/2026 (em andamento)",


      contact_title: "CONTATO",
      contact_command1: "> executar_contato.exe",
      contact_links_established: "> Conexões diretas estabelecidas:",
      contact_connection_terminated: "> Conexão terminada.",

      // Chaves dos Modais (Seguindo o HTML acima)
      mission1_modal_title: "MISSÃO 01: Portfólio",
      mission1_modal_desc: "Este próprio sistema um portfólio interativo com tema retrowave construído com HTML, CSS e JavaScript puros para exibir meu portfólio de habilidades e projetos.",

      mission2_modal_title: "MISSÃO 02: ???",
      mission2_modal_desc: "[...]",

      mission3_modal_title: "MISSÃO 03: ???",
      mission3_modal_desc: "[...]",

      mission4_modal_title: "MISSÃO 04: ???",
      mission4_modal_desc: "[...]",

      mission5_modal_title: "MISSÃO 05: ???",
      mission5_modal_desc: "[...]",

      mission6_modal_title: "MISSÃO 06: ???",
      mission6_modal_desc: "[...]"
    },

    en: {
      loading_text: "Initializing CyberDev System...",
      nav_panel: "[ Home ]",
      nav_profile: "[ Profile ]",
      nav_missions: "[ Missions ]",
      nav_education: "[ Education ]",
      nav_experience: "[ Experience ]",
      nav_about: "[ About ]",
      nav_contact: "[ Contact ]",
      theme_button: "Theme",
      main_title: "Full-Stack Developer",
      access_button: "ACCESS SYSTEM",
      profile_title: "USER PROFILE",
      profile_user: "USER:",
      profile_class: "CLASS:",
      profile_location: "LOCATION:",
      profile_status: "STATUS:",

      profile_class_value: "Full Stack Developer",
      profile_location_value: "Brazil",
      profile_status_value: "Available for new missions",

      missions_title: "PROJECTS // MISSIONS",
      mission1_title: "Portfolio System",
      mission2_title: "???",
      mission3_title: "???",
      mission4_title: "???",
      mission5_title: "???",
      mission6_title: "???",
      btn_view_project: "VIEW REPOSITORY",
      

      education_title: "ACADEMIC EDUCATION",
      education_degree1_title: "Bachelor’s Degree in Computer Science",
      education_degree1_inst: "Centro Universitário de Maceió – UNIMA | AFYA",
      education_degree1_period: "2019 – 2023",
      education_degree2_title:
        "Postgraduate (Lato Sensu) – Full Stack Development Specialization",
      education_degree2_inst: "União das Américas Descomplica University Center",
      education_degree2_period: "Jan/2026 – Apr/2026 (in progress)",


      contact_title: "CONTACT",
      contact_command1: "> run_contact.exe",
      contact_links_established: "> Direct connections established:",
      contact_connection_terminated: "> Connection terminated.",

      // Chaves dos Modais
      mission1_modal_title: "MISSION 01: Portfolio",
      mission1_modal_desc: "This very system, an interactive retrowave-themed portfolio built with pure HTML, CSS, and JavaScript to showcase my skills and projects.",

      mission2_modal_title: "MISSION 02: ???",
      mission2_modal_desc: "[...]",

      mission3_modal_title: "MISSION 03: ???",
      mission3_modal_desc: "[...]",

      mission4_modal_title: "MISSION 04: ???",
      mission4_modal_desc: "[...]",

      mission5_modal_title: "MISSION 05: ???",
      mission5_modal_desc: "[...]",

      mission6_modal_title: "MISSION 06: ???",
      mission6_modal_desc: "[...]"
    }
  };

  function traduzirPagina(idioma) {
    document.querySelectorAll("[data-key]").forEach((el) => {
      const key = el.getAttribute("data-key");

      if (traducoes[idioma] && traducoes[idioma][key]) {
        el.innerText = traducoes[idioma][key];

        if (el.classList.contains("glitch")) {
          el.dataset.text = traducoes[idioma][key];
        }
      }
    });

    localStorage.setItem("idiomaPreferido", idioma);
  }

  btnIdioma.addEventListener("click", () => {
    const idiomaAtual = localStorage.getItem("idiomaPreferido") || "pt";
    const novoIdioma = idiomaAtual === "pt" ? "en" : "pt";
    traduzirPagina(novoIdioma);
  });

  const idiomaSalvo = localStorage.getItem("idiomaPreferido");
  if (idiomaSalvo) {
    traduzirPagina(idiomaSalvo);
  }

  /* =========================================================
     EFEITO 3D NOS CARTÕES
  ========================================================= */
  const cartoes = document.querySelectorAll(".cartao-interativo");

  cartoes.forEach((cartao) => {
    cartao.addEventListener("mousemove", (e) => {
      const { left, top, width, height } = cartao.getBoundingClientRect();

      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;

      const rotateX = (y / height) * -20;
      const rotateY = (x / width) * 20;

      cartao.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    cartao.addEventListener("mouseleave", () => {
      cartao.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
    });
  });

  /* =========================================================
     SISTEMA DE MODAL
  ========================================================= */
  const cartoesMissao = document.querySelectorAll(".cartao-missao");
  const modais = document.querySelectorAll(".modal");
  const botoesFechar = document.querySelectorAll(".botao-fechar");

  cartoesMissao.forEach((cartao) => {
    cartao.addEventListener("click", () => {
      const modalId = cartao.getAttribute("data-modal");
      if (!modalId) return;

      const modal = document.getElementById(modalId);
      if (modal) modal.style.display = "block";
    });
  });

  botoesFechar.forEach((botao) => {
    botao.addEventListener("click", () => {
      botao.closest(".modal").style.display = "none";
    });
  });

  window.addEventListener("click", (evento) => {
    modais.forEach((modal) => {
      if (evento.target == modal) {
        modal.style.display = "none";
      }
    });
  });
});