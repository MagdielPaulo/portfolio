document.addEventListener('DOMContentLoaded', () => {

    // --- INICIALIZAÇÃO E CARREGAMENTO ---
    const carregador = document.getElementById('carregador');
    const conteudoPrincipal = document.getElementById('conteudo-principal');
    const progresso = document.querySelector('.progresso');
    let largura = 0;

    const intervalo = setInterval(() => {
        if (largura >= 100) {
            clearInterval(intervalo);
            carregador.style.display = 'none';
            conteudoPrincipal.style.display = 'block';
        } else {
            largura++;
            progresso.style.width = largura + '%';
        }
    }, 15); // Aumentei um pouco a velocidade do boot

    // --- SISTEMA DE TEMA (CLARO/ESCURO) ---
    const btnTema = document.getElementById('btn-tema');
    const body = document.body;

    // Função para aplicar o tema
    function aplicarTema(tema) {
        if (tema === 'claro') {
            body.classList.add('tema-claro');
        } else {
            body.classList.remove('tema-claro');
        }
        localStorage.setItem('temaPreferido', tema);
    }

    btnTema.addEventListener('click', () => {
        const novoTema = body.classList.contains('tema-claro') ? 'escuro' : 'claro';
        aplicarTema(novoTema);
    });

    // Carregar preferência ao iniciar
    const temaSalvo = localStorage.getItem('temaPreferido');
    if (temaSalvo) {
        aplicarTema(temaSalvo);
    }



    // --- SISTEMA DE IDIOMA (PT/EN) ---
    const btnIdioma = document.getElementById('btn-idioma');
    const traducoes = {
        'pt': {
            'loading_text': 'Inicializando Sistema CyberDev...',
            'nav_panel': '[ Inicio ]',
            'nav_profile': '[ Perfil ]',
            'nav_skills': '[ Habilidades ]',
            'nav_missions': '[ Missões ]',
            'nav_education': '[ Formação ]',
            'nav_experience': '[ Experiência ]',
            'nav_certifications': '[ Certificações ]',
            'nav_about': '[ Sobre ]',
            'nav_contact': '[ Contato ]',
            'theme_button': 'Tema',
            'main_title': 'Desenvolvedor Full-Stack',
            'access_button': 'ACESSAR SISTEMA',
            'profile_title': 'PERFIL DE USUÁRIO',
            'profile_user': 'USUÁRIO:',
            'profile_class': 'CLASSE:',
            'profile_location': 'LOCAL:',
            'profile_status': 'STATUS:',
            'skills_title': 'HABILIDADES PROFISSIONAIS',
            'missions_title': 'PROJETOS // MISSÕES',
            'mission1_title': 'Sistema de Portfólio',
            'mission2_title': 'Aplicativo CRUD',
            'mission4_title': 'E-commerce Bot',
            'mission5_title': 'Dashboard Analítico',
            'mission6_title': 'App Mobile Híbrido',
            'education_title': 'FORMAÇÃO ACADÊMICA',
            'education_course': 'Análise e Desenvolvimento de Sistemas',
            'education_institution': 'Universidade Estácio de Sá | 2022 - 2024',
            'education_desc': 'Foco em desenvolvimento de software, banco de dados e engenharia de sistemas.',
            'certifications_title': 'MINHAS CERTIFICAÇÕES',
            'experience_title': 'EXPERIÊNCIA PROFISSIONAL',
            'experience_role': 'Desenvolvedor Full Stack Freelancer',
            'experience_period': 'Projetos Diversos | 2023 - Presente',
            'about_title': 'SOBRE MIM',
            'about_desc': 'Fora do universo do código, sou um entusiasta de cultura pop, games e animes. Acredito que a criatividade desses mundos inspira soluções inovadoras na tecnologia.',
            'contact_title': 'CONTATO',
            'contact_command1': '> executar_contato.exe',
            'contact_links_established': '> Conexões diretas estabelecidas:',
            'contact_connection_terminated': '> Conexão terminada.',
            'mission1_modal_title': 'MISSÃO 01: Sistema de Portfólio',
            'mission1_modal_desc': 'Este próprio sistema. Um portfólio interativo com tema cyberpunk construído com HTML, CSS e JavaScript puros.',
            'mission2_modal_title': 'MISSÃO 02: Aplicativo CRUD',
            'mission2_modal_desc': 'Uma aplicação full-stack para gerenciamento de dados com interface limpa.',
        },
        'en': {
            'loading_text': 'Initializing CyberDev System...',
            'nav_panel': '[ Home ]',
            'nav_profile': '[ Profile ]',
            'nav_skills': '[ Skills ]',
            'nav_missions': '[ Missions ]',
            'nav_education': '[ Education ]',
            'nav_experience': '[ Experience ]',
            'nav_certifications': '[ Certs ]',
            'nav_about': '[ About ]',
            'nav_contact': '[ Contact ]',
            'theme_button': 'Theme',
            'main_title': 'Full-Stack Developer',
            'access_button': 'ACCESS SYSTEM',
            'profile_title': 'USER PROFILE',
            'profile_user': 'USER:',
            'profile_class': 'CLASS:',
            'profile_location': 'LOCATION:',
            'profile_status': 'STATUS:',
            'skills_title': 'PROFESSIONAL SKILLS',
            'missions_title': 'PROJECTS // MISSIONS',
            'mission1_title': 'Portfolio System',
            'mission2_title': 'CRUD App',
            'mission4_title': 'E-commerce Bot',
            'mission5_title': 'Analytics Dashboard',
            'mission6_title': 'Hybrid Mobile App',
            'education_title': 'ACADEMIC EDUCATION',
            'education_course': 'Analysis and Systems Development',
            'education_institution': 'Estácio de Sá University | 2022 - 2024',
            'education_desc': 'Focus on software development, databases, and systems engineering.',
            'certifications_title': 'MY CERTIFICATIONS',
            'experience_title': 'PROFESSIONAL EXPERIENCE',
            'experience_role': 'Freelance Full Stack Developer',
            'experience_period': 'Various Projects | 2023 - Present',
            'about_title': 'ABOUT ME',
            'about_desc': 'Outside the code universe, I am a pop culture, games, and anime enthusiast.',
            'contact_title': 'HACKER CONTACT',
            'contact_command1': '> run_contact.exe',
            'contact_links_established': '> Direct connections established:',
            'contact_connection_terminated': '> Connection terminated.',
            'mission1_modal_title': 'MISSION 01: Portfolio System',
            'mission1_modal_desc': 'This very system. An interactive, cyberpunk-themed portfolio.',
            'mission2_modal_title': 'MISSION 02: CRUD App',
            'mission2_modal_desc': 'A full-stack application for data management.',
        }
    };

    function traduzirPagina(idioma) {
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (traducoes[idioma] && traducoes[idioma][key]) {
                el.innerText = traducoes[idioma][key];
                if (el.classList.contains('glitch')) {
                    el.dataset.text = traducoes[idioma][key];
                }
            }
        });
        localStorage.setItem('idiomaPreferido', idioma);
    }

    btnIdioma.addEventListener('click', () => {
        let idiomaAtual = localStorage.getItem('idiomaPreferido') || 'pt';
        const novoIdioma = idiomaAtual === 'pt' ? 'en' : 'pt';
        traduzirPagina(novoIdioma);
    });

    const idiomaSalvo = localStorage.getItem('idiomaPreferido');
    if (idiomaSalvo) {
        traduzirPagina(idiomaSalvo);
    }

    // --- EFEITO 3D NOS CARTÕES ---
    const cartoes = document.querySelectorAll('.cartao-interativo');
    cartoes.forEach(cartao => {
        cartao.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = cartao.getBoundingClientRect();
            const x = e.clientX - left - width / 2;
            const y = e.clientY - top - height / 2;
            const rotateX = (y / height) * -20;
            const rotateY = (x / width) * 20;
            cartao.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        cartao.addEventListener('mouseleave', () => {
            cartao.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });

    // --- SISTEMA DE MODAL ---
    const cartoesMissao = document.querySelectorAll('.cartao-missao');
    const modais = document.querySelectorAll('.modal');
    const botoesFechar = document.querySelectorAll('.botao-fechar');

    cartoesMissao.forEach(cartao => {
        cartao.addEventListener('click', () => {
            const modalId = cartao.getAttribute('data-modal');
            if (!modalId) return;
            const modal = document.getElementById(modalId);
            if (modal) modal.style.display = 'block';
        });
    });

    botoesFechar.forEach(botao => {
        botao.addEventListener('click', () => {
            botao.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', (evento) => {
        modais.forEach(modal => {
            if (evento.target == modal) {
                modal.style.display = 'none';
            }
        });
    });
});