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
    "cv-btn": "<a href='curriculo.pdf' download> Baixar Curriculo </a>",
    "skills-title": "Habilidades",
    "design-skill": "Design",
    "languages-skill": "Linguagens",
    "framework-skill": "Frameworks",
    "database-skill": "Bancos de Dados",
    "projects-title": "Projetos",
    "see-more-1":
      "<a target='_blank' href='https://github.com/lucas-ribeiro03/abstract'>Ver mais</a>",
    "see-project-1":
      "<a target='_blank' href='https://lucas-ribeiro03.github.io/abstract/'>Ver projeto</a>",
    "see-more-2":
      "<a target='_blank' href='https://github.com/lucas-ribeiro03/bonsai'>Ver mais</a>",
    "see-project-2":
      "<a target='_blank' href='https://lucas-ribeiro03.github.io/bonsai/'>Ver projeto</a>",
    "see-more-3":
      "<a target='_blank' href='https://github.com/lucas-ribeiro03/brazilicious'>Ver mais</a>",
    "see-project-3":
      "<a target='_blank' href='https://lucas-ribeiro03.github.io/brazilicious/'>Ver projeto</a>",
    "see-more-4":
      "<a target='_blank' href='https://github.com/lucas-ribeiro03/oh.studio'>Ver mais</a>",
    "see-project-4":
      "<a target='_blank' href='https://lucas-ribeiro03.github.io/oh.studio/'>Ver projeto</a>",
    "see-more-5": "<a target='_blank' href='404/404.html'>Ver mais</a>",
    "see-project-5": "<a target='_blank' href='404/404.html'>Ver projeto</a>",
    "see-more-6":
      "<a target='_blank' href='https://github.com/lucas-ribeiro03/weather-map'>Ver mais</a>",
    "see-project-6":
      "<a target='_blank' href='https://lucas-ribeiro03.github.io/weather-map/'>Ver projeto</a>",
    "see-more-7":
      "<a target='_blank' href='https://github.com/lucas-ribeiro03/currency-exchange'>Ver mais</a>",
    "see-project-7":
      "<a target='_blank' href='https://lucas-ribeiro03.github.io/currency-exchange/'>Ver projeto</a>",
    "see-more-8":
      "<a target='_blank' href='https://github.com/lucas-ribeiro03/tasklist'>Ver mais</a>",
    "see-project-8":
      "<a target='_blank' href='https://tasklist-cib6koqbo-lucas-projects-ce0d404a.vercel.app'>Ver projeto</a>",
    "see-more-9":
      "<a target='_blank' href='https://github.com/lucas-ribeiro03/agenda-js'>Ver mais</a>",
    "see-project-9": "<a target='_blank' href='404/404.html'>Ver projeto</a>",
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
    "cv-btn": "<a href='curriculo.pdf' download> Download CV </a>",
    "skills-title": "Skills",
    "design-skill": "Design",
    "languages-skill": "Languages",
    "framework-skill": "Frameworks",
    "database-skill": "Databases",
    "projects-title": "Projects",
    "see-more-1":
      "<a target='_blank' href='https://github.com/lucas-ribeiro03/abstract'>See more</a>",
    "see-project-1":
      "<a target='_blank' href='https://lucas-ribeiro03.github.io/abstract/'>View project</a>",
    "see-more-2":
      "<a target='_blank' href='https://github.com/lucas-ribeiro03/bonsai'>See more</a>",
    "see-project-2":
      "<a target='_blank' href='https://lucas-ribeiro03.github.io/bonsai/'>View project</a>",
    "see-more-3":
      "<a target='_blank' href='https://github.com/lucas-ribeiro03/brazilicious'>See more</a>",
    "see-project-3":
      "<a target='_blank'  href='https://lucas-ribeiro03.github.io/brazilicious/'>View project</a>",
    "see-more-4":
      "<a target='_blank' href='https://github.com/lucas-ribeiro03/oh.studio'>See more</a>",
    "see-project-4":
      "<a  target='_blank' href='https://lucas-ribeiro03.github.io/oh.studio/'>View project</a>",
    "see-more-5":
      "<a target='_blank' href='https://github.com/lucas-ribeiro03/nex-client'>See more</a>",
    "see-project-5":
      "<a target='_blank' href='https://nex-client-z7kq.vercel.app'>View project</a>",
    "see-more-6":
      "<a target='_blank' href='https://github.com/lucas-ribeiro03/weather-map'>See more</a>",
    "see-project-6":
      "<a target='_blank' href='https://lucas-ribeiro03.github.io/weather-map/'>View project</a>",
    "see-more-7":
      "<a target='_blank' href='https://github.com/lucas-ribeiro03/currency-exchange'>See more</a>",
    "see-project-7":
      "<a target='_blank' href='https://lucas-ribeiro03.github.io/currency-exchange/'>View project</a>",
    "see-more-8":
      "<a target='_blank' href='https://github.com/lucas-ribeiro03/tasklist'>See more</a>",
    "see-project-8":
      "<a target='_blank' href='https://tasklist-cib6koqbo-lucas-projects-ce0d404a.vercel.app'>View project</a>",
    "see-more-9":
      "<a target='_blank' href='https://github.com/lucas-ribeiro03/agenda-js'>See more</a>",
    "see-project-9": "<a target='_blank' href='404/404.html'>View project</a>",
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
