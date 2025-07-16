const ball = document.querySelector(".ball");
window.addEventListener("scroll", () => {
  const button = document.querySelector(".back-to-top");
  if (window.scrollY > 250) {
    button.style.display = "flex";
    button.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  } else {
    button.style.display = "none";
  }
});

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".nav-container ul").style.display = "flex";
  document.querySelector(".menu").style.display = "none";
  document.querySelector(".close-menu").style.display = "block";
});

document.querySelector(".close-menu").addEventListener("click", () => {
  document.querySelector(".nav-container ul").style.display = "none";
  document.querySelector(".menu").style.display = "block";
  document.querySelector(".close-menu").style.display = "none";
});

document.querySelector(".switch-theme").addEventListener("click", () => {
  console.log("oi");
  if (ball.classList.contains("active")) {
    ball.classList.remove("active");
    document.body.classList.remove("light");
  } else {
    ball.classList.toggle("active");
    document.body.classList.toggle("light");
  }
});

const projects = [
  {
    title: "Gerenciamento de barbearia",
    link: "https://github.com/lucas-ribeiro03/gerenciamento-de-barbearia",
    description:
      "Sistema de gerenciamento para barbearias, com agendamento online, painel administrativo, controle de serviços e dashboard com estatísticas em tempo real.",
  },
  {
    title: "Agência de carros",
    link: "https://github.com/lucas-ribeiro03/lbcar",
    description:
      "Plataforma web para exibição e gerenciamento de veículos, com catálogo interativo e carregamento dinâmico de imagens",
  },
  {
    title: "Loja de roupas online",
    link: "https://github.com/lucas-ribeiro03/dripline",
    description:
      "Projeto de uma loja virtual voltada para a venda de roupas, calçados e acessórios. A plataforma simula a experiência de uma loja real, com vitrine de produtos, sistema de cadastro, e área do cliente para acompanhar pedidos.",
  },
];

const container = document.querySelector(".carousel-items");
const images = [
  "assets/img/css-3-svgrepo-com.svg",
  "assets/img/express-svgrepo-com.svg",
  "assets/img/html-5-svgrepo-com.svg",
  "assets/img/javascript-svgrepo-com.svg",
  "assets/img/mysql-logo-svgrepo-com.svg",
  "assets/img/node-js-svgrepo-com.svg",
  "assets/img/react-javascript-js-framework-facebook-svgrepo-com.svg",
  "assets/img/sass-svgrepo-com.svg",
];

const allImages = [...images, ...images];
allImages.forEach((image) => {
  const item = document.createElement("div");
  item.classList.add("item");
  item.innerHTML = `
  <img src="${image}" width="100"/>
  `;
  container.appendChild(item);
});

const createProject = () => {
  const cardsContainer = document.querySelector(".cards-container");
  projects.map((project) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a target="blank" href="${project.link}">View</a>
    `;
    cardsContainer.appendChild(card);
  });
};

document.querySelector(".back-to-top").addEventListener("click", () => {});

createProject();
