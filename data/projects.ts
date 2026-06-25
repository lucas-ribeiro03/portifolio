import { Project } from "@/model/Project";

export const projects: Project[] = [
  {
    name: "Blog",
    coverImage: "/images/capa_blog.png",
    descriptiton:
      "Blog com painel admin contendo CRUD completo de posts, controle de likes, filtro por pesquisa, categorias por posts, ranking de categorias mais curtidas, entre outras funcionalidades. Blog desenvolvido utilizando NextJs",
    url: "https://github.com/lucas-ribeiro03/blog",
    techsUsed: [
      "/images/React.svg",
      "/images/Next.svg",
      "/images/TailwindCSS.svg",
      "/images/typescript.svg",
    ],
  },
  {
    name: "Chronos Pomodoro",
    coverImage: "/images/capa_chronos.png",
    descriptiton: "Aplicação sobre a técnica de Pomodoro, com configurações",
    url: "https://github.com/lucas-ribeiro03/chronos-pomodoro",
    techsUsed: [
      "/images/React.svg",
      "/images/typescript.svg",
      "/images/CSS3.svg",
    ],
  },
  {
    name: "Bolão da Copa",
    coverImage: "/images/capa_bolao.png",
    descriptiton:
      "Aplicação web para grupos de amigos disputarem um bolão de apostas esportivas. Os usuários enviam palpites para as partidas de cada rodada e concorrem em um ranking geral baseado nos acertos.",
    url: "https://github.com/lucas-ribeiro03/bolao",
    techsUsed: [
      "/images/Next.svg",
      "/images/TailwindCSS.svg",
      "/images/typescript.svg",
      "/images/postgreSQL.svg",
    ],
  },
];
