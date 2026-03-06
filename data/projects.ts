import { Project } from "@/model/Project";

export const projects: Project[] = [
  {
    name: "Blog",
    coverImage: "/images/capa_blog.png",
    descriptiton:
      "Blog com painel admin contendo CRUD completo de posts, controle de likes, filtro por pesquisa, categorias por posts, ranking de categorias mais curtidas, entre outras funcionalidades. Blog desenvolvido utilizando NextJs",
    url: "https://github.com/lucas-ribeiro03/blog",
  },
  {
    name: "Chronos Pomodoro",
    coverImage: "/images/capa_chronos.png",
    descriptiton: "Aplicação sobre a técnica de Pomodoro, com configurações",
    url: "https://github.com/lucas-ribeiro03/chronos-pomodoro",
  },
  {
    name: "ListenIT",
    coverImage: "/images/capa_listen.png",
    descriptiton:
      "Landing Page para aplicativo fictício de streaming de músicas",
    url: "https://github.com/lucas-ribeiro03/ListenIt",
  },
];
