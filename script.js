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
    }, 20);

    // --- SISTEMA DE TEMA (CLARO/ESCURO) ---
    const btnTema = document.getElementById('btn-tema');
    const body = document.body;
    btnTema.addEventListener('click', () => {
        body.classList.toggle('tema-claro');
    });

    // --- SISTEMA DE IDIOMA (PT/EN) ---
    const btnIdioma = document.getElementById('btn-idioma');
    const traducoes = {
        'pt': {
            'loading_text': 'Inicializando Sistema CyberDev...',
            'nav_panel': '[ Painel ]',
            'nav_profile': '[ Perfil ]',
            'nav_skills': '[ Habilidades ]',
            'nav_missions': '[ Missões ]',
            'nav_education': '[ Formação ]',
            'nav_experience': '[ Experiência ]',
            'nav_about': '[ Sobre Mim ]',
            'nav_contact': '[ Contato ]',
            'theme_button': 'Tema',
            'main_title': 'Desenvolvedor Full-Stack & Aspirante em Cibersegurança',
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
            'nav_certifications': '[ Certificações ]',
            'certifications_title': 'MINHAS CERTIFICAÇÕES',
            'cert1_title': 'Cybersafe',
            'cert1_desc': 'Certificação em defesa e resposta a incidentes de segurança.',
            'cert2_title': 'Cisco CCNA',
            'cert2_desc': 'Certificação em redes e infraestrutura de TI.',
            'cert3_title': 'CompTIA Security+',
            'cert3_desc': 'Certificação global que valida as habilidades básicas para funções de segurança de TI.',
            'cert4_title': 'E-MAP',
            'cert4_desc': 'Certificação em marketing e análise de performance.',
            'nav_hardware': '[ Hardware ]',
            'hardware_title': 'MEU SETUP',
            'hw_cpu_name': 'Processador',
            'hw_cpu_spec': 'AMD Ryzen 7 5800X',
            'hw_gpu_name': 'Placa de Vídeo',
            'hw_gpu_spec': 'NVIDIA GeForce RTX 3070 Ti',
            'hw_ram_name': 'Memória RAM',
            'hw_ram_spec': '32GB DDR4 3600MHz',
            'hw_storage_name': 'Armazenamento',
            'hw_storage_spec': '1TB NVMe SSD + 2TB HDD',
            'nav_achievements': '[ Conquistas ]',
            'achievements_title': 'MINHAS CONQUISTAS',
            'ach1_title': 'PENTAKILL NO LOL',
            'ach1_desc': 'Exterminou a equipe inimiga em uma única jogada épica.',
            'ach2_title': 'ZEROU ELDEN RING',
            'ach2_desc': 'Tornou-se o Lorde Prístino nas Terras Intermédias.',
            'ach3_title': 'GLOBAL NO CS',
            'ach3_desc': 'Alcançou a patente máxima no matchmaking competitivo.',
            'ach4_title': 'MESTRE NO XADREZ',
            'ach4_desc': 'Dominou a arte da estratégia e tática no tabuleiro.',
            'experience_title': 'EXPERIÊNCIA PROFISSIONAL',
            'experience_role': 'Desenvolvedor Full Stack Freelancer',
            'experience_period': 'Projetos Diversos | 2023 - Presente',
            'experience_desc': 'Desenvolvimento de aplicações web completas, desde o backend com Node.js e Python até o frontend com React e Vue, para clientes de diversos setores.',
            'about_title': 'SOBRE MIM',
            'about_desc': 'Fora do universo do código, sou um entusiasta de cultura pop, games e animes. Acredito que a criatividade desses mundos inspira soluções inovadoras na tecnologia.',
            'about_games_title': 'Jogos Favoritos',
            'about_animes_title': 'Animes Favoritos',
            'about_steam_title': 'Perfil Steam',
            'about_music_title': 'MÚSICA PREFERIDA',
            'contact_title': 'CONTATO HACKER',
            'contact_command1': '> executar_contato.exe',
            'contact_links_established': '> Conexões diretas estabelecidas:',
            'contact_connection_terminated': '> Conexão terminada.',
            'mission1_modal_title': 'MISSÃO 01: Sistema de Portfólio',
            'mission1_modal_desc': 'Este próprio sistema. Um portfólio interativo com tema cyberpunk construído com HTML, CSS e JavaScript puros para exibir habilidades de forma gamificada e envolvente.',
            'mission2_modal_title': 'MISSÃO 02: Aplicativo CRUD',
            'mission2_modal_desc': 'Uma aplicação full-stack para gerenciamento de dados. Inclui funcionalidades para criar, ler, atualizar e deletar registros de um banco de dados, com uma interface de usuário limpa.',
            'mission3_modal_desc': 'Uma API RESTful robusta desenvolvida para servir dados a aplicações cliente. Construída com foco em performance, segurança e escalabilidade, seguindo as melhores práticas da indústria.',
            'mission4_modal_title': 'MISSÃO 04: E-commerce Bot',
            'mission4_modal_desc': 'Um bot automatizado para monitorar preços e promoções em sites de e-commerce, utilizando web scraping com Python e enviando notificações em tempo real.',
            'mission5_modal_title': 'MISSÃO 05: Dashboard Analítico',
            'mission5_modal_desc': 'Um painel de visualização de dados interativo construído com React e D3.js para analisar métricas de vendas e comportamento de usuários de forma intuitiva.',
            'mission6_modal_title': 'MISSÃO 06: App Mobile Híbrido',
            'mission6_modal_desc': 'Um aplicativo para iOS e Android para gerenciamento de tarefas, desenvolvido com framework híbrido, focado em usabilidade e sincronização na nuvem.',
            'mission7_title': 'Game: Guess the Celebrity'
        },
        'en': {
            'loading_text': 'Initializing CyberDev System...',
            'nav_panel': '[ Panel ]',
            'nav_profile': '[ Profile ]',
            'nav_skills': '[ Skills ]',
            'nav_missions': '[ Missions ]',
            'nav_education': '[ Education ]',
            'nav_experience': '[ Experience ]',
            'nav_about': '[ About Me ]',
            'nav_contact': '[ Contact ]',
            'theme_button': 'Theme',
            'main_title': 'Full-Stack Developer & Aspiring Cybersecurity', 
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
            'nav_certifications': '[ Certifications ]',
            'certifications_title': 'MY CERTIFICATIONS',
            'cert1_title': 'Cybersafe',
            'cert1_desc': 'Certification in defense and response to security incidents.',
            'cert2_title': 'Cisco CCNA',
            'cert2_desc': 'Certification in IT networks and infrastructure.',
            'cert3_title': 'CompTIA Security+',
            'cert3_desc': 'Global certification that validates the basic skills for IT security roles.',
            'cert4_title': 'E-MAP',
            'cert4_desc': 'Certification in marketing and performance analysis.',
            'nav_hardware': '[ Hardware ]',
            'hardware_title': 'MY SETUP',
            'hw_cpu_name': 'Processor',
            'hw_cpu_spec': 'AMD Ryzen 7 5800X',
            'hw_gpu_name': 'Graphics Card',
            'hw_gpu_spec': 'NVIDIA GeForce RTX 3070 Ti',
            'hw_ram_name': 'RAM',
            'hw_ram_spec': '32GB DDR4 3600MHz',
            'hw_storage_name': 'Storage',
            'hw_storage_spec': '1TB NVMe SSD + 2TB HDD',
            'nav_achievements': '[ Achievements ]',
            'achievements_title': 'MY ACHIEVEMENTS',
            'ach1_title': 'PENTAKILL IN LOL',
            'ach1_desc': 'Wiped out the enemy team in a single epic play.',
            'ach2_title': 'COMPLETED ELDEN RING',
            'ach2_desc': 'Became the Elden Lord in the Lands Between.',
            'ach3_title': 'GLOBAL IN CS',
            'ach3_desc': 'Reached the highest rank in competitive matchmaking.',
            'ach4_title': 'CHESS MASTER',
            'ach4_desc': 'Mastered the art of strategy and tactics on the board.',
            'experience_title': 'PROFESSIONAL EXPERIENCE',
            'experience_role': 'Freelance Full Stack Developer',
            'experience_period': 'Various Projects | 2023 - Present',
            'experience_desc': 'Development of complete web applications, from backend with Node.js and Python to frontend with React and Vue, for clients from various sectors.',
            'about_title': 'ABOUT ME',
            'about_desc': 'Outside the code universe, I am a pop culture, games, and anime enthusiast. I believe the creativity of these worlds inspires innovative solutions in technology.',
            'about_games_title': 'Favorite Games',
            'about_animes_title': 'Favorite Animes',
            'contact_title': 'HACKER CONTACT',
            'contact_command1': '> run_contact.exe',
            'contact_links_established': '> Direct connections established:',
            'contact_connection_terminated': '> Connection terminated.',
            'mission1_modal_title': 'MISSION 01: Portfolio System',
            'mission1_modal_desc': 'This very system. An interactive, cyberpunk-themed portfolio built with pure HTML, CSS, and JavaScript to showcase skills in a gamified and engaging way.',
            'mission2_modal_title': 'MISSION 02: CRUD App',
            'mission2_modal_desc': 'A full-stack application for data management. It includes features to create, read, update, and delete records from a database, with a clean user interface.',
            'mission3_modal_desc': 'A robust RESTful API developed to serve data to client applications. Built with a focus on performance, security, and scalability, following industry best practices.',
            'mission4_modal_title': 'MISSION 04: E-commerce Bot',
            'mission4_modal_desc': 'An automated bot to monitor prices and promotions on e-commerce sites, using web scraping with Python and sending real-time notifications.',
            'mission5_modal_title': 'MISSION 05: Analytics Dashboard',
            'mission5_modal_desc': 'An interactive data visualization panel built with React and D3.js to intuitively analyze sales metrics and user behavior.',
            'mission6_modal_title': 'MISSION 06: Hybrid Mobile App',
            'mission6_modal_desc': 'An app for iOS and Android for task management, developed with a hybrid framework, focused on usability and cloud synchronization.'
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

    // Carrega o idioma salvo ao iniciar a página
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
            const rotateX = (y / height) * -30; // Intensidade da rotação
            const rotateY = (x / width) * 30;
            cartao.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
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
            document.getElementById(modalId).style.display = 'block';
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
