import { Enemy, type EnemyMove } from "./../Enemy.js";

const demonSprite = [
  "       ,      ,       ",
  '      /(.-""-.)\\      ',
  "  |\\  \\/      \\/  /|  ",
  "  | \\ / =.  .= \\ / |  ",
  "  \\( \\   o\\/o   / )/  ",
  "   \\_, '-/  \\-' ,_/   ",
  "     /   \\__/   \\     ",
  "     \\ \\__\\/__/ /     ",
  "   ___\\ \\|--|/ /___   ",
  "  /`   \\      /    `\\  ",
  " /      '----'       \\ ",
].join("\n");

const demonPattern: EnemyMove[] = [
  {
    id: "DESCANSO",
    description:
      "As chamas do Demônio diminuem, ele tosse um pouco de fumaça e se apoia nos joelhos. Sua energia está recarregando...",
  },
  {
    id: "GOLPE_AREA_CHAO",
    description:
      "O Demônio bate as mãos em chamas no chão, criando um anel de fogo que se espalha rapidamente rente ao piso!",
  },
  {
    id: "GOLPE_COM_MIRA",
    description:
      "O monstro aponta o dedo indicador brilhante para você. Um feixe de mira trava bem no meio da sua testa.",
  },
  {
    id: "DESCANSO",
    description:
      "As chamas do Demônio diminuem, ele tosse um pouco de fumaça e se apoia nos joelhos. Sua energia está recarregando...",
  },
  {
    id: "GOLPE_CONCENTRADO",
    description:
      "O Demônio junta as duas mãos acima da cabeça, criando uma esfera de energia negra massiva. Isso vai demorar um pouco, mas com certeza pode matar um guerreiro poderoso (então imagina o que faz com você!)",
  },
  {
    id: "GOLPE_SIMPLES",
    description:
      "O Demônio dá um tapa flamejante casual na sua direção, como se espantasse uma mosca irritante.",
  },
  {
    id: "GOLPE_AREA_AEREO",
    description:
      "O monstro bate suas asas gigantes, invocando lâminas de vento infernal que voam exatamente na altura do seu peito!",
  },
  {
    id: "DESCANSO",
    description:
      "As chamas do Demônio diminuem, ele tosse um pouco de fumaça e se apoia nos joelhos. Sua energia está recarregando...",
  },
  {
    id: "INVADIR_MENTE",
    description:
      "Os olhos do Demônio brilham em um roxo profundo. Você sente uma pressão na cabeça... ele está tentando entrar na sua mente!",
  },
  {
    id: "VER_FUTURO",
    description:
      "O Demônio parece frustrado. Ele olha pra você com raiva e diz que a brincadeira acabou. Você começa a ouvir palavras estranhas, o que é aquilo? Um terceiro olho na testa do Demônio se abre. Ele cruza os braços e murmura: 'Eu já... eu já vi o que você vai fazer... hehe...'",
  },
  {
    id: "DESCANSO",
    description:
      "As chamas do Demônio diminuem, ele tosse um pouco de fumaça e se apoia nos joelhos. Sua energia está recarregando...",
  },
];

export class Demon extends Enemy {
  constructor() {
    super("Lorde Demônio", 5, demonPattern, demonSprite);
  }
}
