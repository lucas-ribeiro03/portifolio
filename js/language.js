const toggleBarLanguage = document.querySelector(".toggle-bar-language");
const toggleBallLanguage = document.querySelector(".toggle-ball-language");
let currentLanguage = "en";
const headerSpan = document.querySelector(".middle-right-header");
headerSpan.classList.add(currentLanguage);

const languages = {
  pt: {
    "language-en": "EN",
    "language-pt": "PT",
    "home-link": "Início",
    "about-link": "Sobre",
    "skills-link": "Habilidades",
    "projects-link": "Projetos",
    "contact-link": "Contato",
    "header-name": "Oi! Meu nome é <span>Lucas Ribeiro</span>",
    "header-job": "Eu sou um <span></span>",
    "header-desc":
      "Olá, eu sou <span>Lucas</span>, desenvolvedor do Rio de Janeiro, bem-vindo ao meu portfólio! Sou estudante de Ciência da Computação na Unicarioca, atualmente no terceiro semestre. As tecnologias em que sou mais proficiente são <span>HTML, CSS, JavaScript, React, Node</span>, e com elas, busco criar soluções simples e eficientes para grandes problemas.",
    "cv-btn": "Baixar CV",
    "skills-title": "Habilidades",
    "design-skill": "Design",
    "languages-skill": "Linguagens",
    "framework-skill": "Frameworks",
    "database-skill": "Bancos de Dados",
    "projects-title": "Projetos",
    "see-more-1": "Ver mais",
    "see-project-1": "Ver projeto",
    "see-more-2": "Ver mais",
    "see-project-2": "Ver projeto",
    "see-more-3": "Ver mais",
    "see-project-3": "Ver projeto",
    "see-more-4": "Ver mais",
    "see-project-4": "Ver projeto",
    "see-more-5": "Ver mais",
    "see-project-5": "Ver projeto",
    "see-more-6": "Ver mais",
    "see-project-6": "Ver projeto",
    "see-more-7": "Ver mais",
    "see-project-7": "Ver projeto",
    "see-more-8": "Ver mais",
    "see-project-8": "Ver projeto",
    "see-more-9": "Ver mais",
    "see-project-9": "Ver projeto",
    "home-footer": "Início",
    "about-footer": "Sobre",
    "skills-footer": "Habilidades",
    "projects-footer": "Projetos",
    "contact-footer": "Contato",
    copyright: "© 2025, Lucas Ribeiro. Todos os direitos reservados.",
  },
  en: {
    "language-en": "EN",
    "language-pt": "PT",
    "home-link": "Home",
    "about-link": "About",
    "skills-link": "Skills",
    "projects-link": "Projects",
    "contact-link": "Contact",
    "header-name": "Hey! My name is <span>Lucas Ribeiro</span>",
    "header-job": "I am a <span></span>",
    "header-desc":
      "Hello, I'm <span>Lucas</span>, developer from Rio de Janeiro, welcome to my portfolio! I am a Computer Science student at Unicarioca, currently in the third semester. The technologies I am most proficient in are <span>HTML, CSS, JavaScript, React, Node</span>, and with them, I aim to create simple and efficient solutions to big problems.",
    "cv-btn": "Download CV",
    "skills-title": "Skills",
    "design-skill": "Design",
    "languages-skill": "Languages",
    "framework-skill": "Frameworks",
    "database-skill": "Databases",
    "projects-title": "Projects",
    "see-more-1": "See more",
    "see-project-1": "View project",
    "see-more-2": "See more",
    "see-project-2": "View project",
    "see-more-3": "See more",
    "see-project-3": "View project",
    "see-more-4": "See more",
    "see-project-4": "View project",
    "see-more-5": "See more",
    "see-project-5": "View project",
    "see-more-6": "See more",
    "see-project-6": "View project",
    "see-more-7": "See more",
    "see-project-7": "View project",
    "see-more-8": "See more",
    "see-project-8": "View project",
    "see-more-9": "See more",
    "see-project-9": "View project",
    "home-footer": "Home",
    "about-footer": "About",
    "skills-footer": "Skills",
    "projects-footer": "Projects",
    "contact-footer": "Contact",
    copyright: "© 2025, Lucas Ribeiro. All rights reserved.",
  },
};

toggleBarLanguage.addEventListener("click", () => {
  if (toggleBallLanguage.classList.contains("right")) {
    toggleBallLanguage.classList.replace("right", "left");
    currentLanguage = "en";
    headerSpan.classList.remove("pt");
    headerSpan.classList.add("en");
  } else if (toggleBallLanguage.classList.contains("left")) {
    toggleBallLanguage.classList.replace("left", "right");
    currentLanguage = "pt";
    headerSpan.classList.remove("en");
    headerSpan.classList.add("pt");
  }

  switchLanguage();
});

function switchLanguage() {
  const languageContent = languages[currentLanguage];
  Object.keys(languageContent).forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = languageContent[id];
    }
  });
  console.log(headerSpan.classList);
}

switchLanguage();
