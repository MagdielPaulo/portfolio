# 🚀 Magdiel Paulo — Portfólio Pessoal

Portfólio pessoal moderno e minimalista, desenvolvido para apresentar minha trajetória profissional, competências técnicas e projetos como Desenvolvedor Full-Stack.

**🔗 Live:** [magdiel-paulo.vercel.app](https://magdiel-paulo.vercel.app/)

---

## 📸 Preview


| Tema Escuro (Dark) | Tema Claro (Light) |
| :---: | :---: |
| ![Dark](https://github.com/user-attachments/assets/a99fabef-d8d6-44bc-a5ad-3c27914e90f7) | ![Light](https://github.com/user-attachments/assets/c63a4fd3-962d-4540-887f-def05ce5da89) |


---

## ✨ Features

- **Design moderno e responsivo** — Layout limpo com grid CSS, adaptável a qualquer dispositivo.
- **Dark / Light mode** — Troca de tema com persistência via `localStorage`.
- **Bilíngue (PT / EN)** — Sistema de tradução completo com alternância dinâmica.
- **Ícones de tecnologias reais** — Logos oficiais via [Devicon](https://devicon.dev/) na seção de Skills.
- **Animações suaves** — Scroll reveal com `IntersectionObserver`, cursor glow, floating bubbles.
- **Code window interativo** — Ilustração estilizada no Hero simulando um editor de código.
- **Seção de experiência com timeline** — Linha do tempo visual da trajetória profissional.
- **Menu mobile** — Overlay fullscreen com navegação suave.
- **Performance otimizada** — Zero dependências JS externas, animações via CSS, `requestAnimationFrame` para o cursor.

---

## 🛠️ Tecnologias

| Categoria | Tecnologias |
|-----------|-------------|
| **Build** | [Vite](https://vitejs.dev/) |
| **Markup** | HTML5 semântico |
| **Estilo** | CSS3 (Custom Properties, Grid, Flexbox, Animations) |
| **Script** | JavaScript ES6+ (Vanilla) |
| **Fontes** | [Poppins](https://fonts.google.com/specimen/Poppins) + [DM Mono](https://fonts.google.com/specimen/DM+Mono) |
| **Ícones** | [Bootstrap Icons](https://icons.getbootstrap.com/) + [Devicon](https://devicon.dev/) |
| **Deploy** | [Vercel](https://vercel.com/) |

---

## 📁 Estrutura do Projeto

```
portfolio/
├── index.html          # Página principal
├── style.css           # Estilos (dark/light, responsivo, animações)
├── script.js           # Lógica (i18n, tema, cursor, scroll reveal)
├── vite.config.ts      # Configuração do Vite
├── package.json
├── .gitignore
└── README.md
```

---

## 🚀 Como Rodar Localmente

**Pré-requisitos:** Node.js 

```bash
# 1. Clone o repositório
git clone https://github.com/MagdielPaulo/portfolio.git

# 2. Entre na pasta
cd portfolio

# 3. Instale as dependências
npm install

# 4. Rode o servidor de desenvolvimento
npm run dev
```

O projeto vai abrir automaticamente em `http://localhost:5173`.

---

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`. Para pré-visualizar o build:

```bash
npm run preview
```

---

## 🌐 Deploy no Vercel

O projeto está configurado para deploy automático no Vercel:

1. Conecte o repositório GitHub ao [Vercel](https://vercel.com/).
2. O Vercel detecta automaticamente o Vite e configura:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Cada push na branch `main` faz deploy automático.

---

## 🎨 Personalização

### Cores

As cores são controladas por CSS Custom Properties no `:root` do `style.css`:

```css
:root {
  --accent: #a78bfa;      /* Lilás — cor principal */
  --bg: #09090b;           /* Fundo escuro */
  --text: #ececf1;         /* Texto principal */
}
```

### Conteúdo

Todo o conteúdo textual está no objeto `i18n` dentro do `script.js`, organizado por idioma (`pt` e `en`). Para alterar textos, edite as chaves correspondentes.

### Projetos

Para adicionar novos projetos, duplique um bloco `<a class="project-row">` na seção `#projetos` do `index.html` e adicione as traduções no `script.js`.

---

## 📄 Licença

Este projeto é de uso pessoal. Sinta-se à vontade para usar como referência ou inspiração para o seu próprio portfólio.

---

## 📬 Contato

- **Email:** magdielpaulodev@gmail.com
- **LinkedIn:** [linkedin.com/in/magdiel-paulo](https://www.linkedin.com/in/magdiel-paulo/)
- **GitHub:** [github.com/MagdielPaulo](https://github.com/MagdielPaulo)

---

Feito com 💜 e muito código.
