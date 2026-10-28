import { Project } from "@/model/Project";

export const projects: Project[] = [
  {
    name: "Gerenciador de depósito",
    coverImage: "/images/capa-dp.png",
    descriptiton:
      "Aplicação estilo e-commerce modelada para gerenciar e realizar pedidos de diversos tipos de negócios. Conta com dashboard de pedidos entre outras estatísticas. Painel admin completo.",
    url: "https://github.com/lucas-ribeiro03/gerenciador-de-deposito",
    techsUsed: [
      "/images/Next.svg",
      "/images/TailwindCSS.svg",
      "/images/typescript.svg",
      "/images/postgreSQL.svg",
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
