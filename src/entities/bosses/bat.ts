import { Enemy, type EnemyMove } from "./../Enemy.js";

const batSprite = [
  "   /\\                 /\\   ",
  "  / \\'._   (\\_/)   _.'/ \\  ",
  " /_.''._'--('O')--'_.''._\\ ",
  ' | \\_ / `;=/ " \\=;` \\ _/ | ',
  "  \\/ `\\__|`\\___/`|__/`  \\/ ",
  "   `      \\(/|\\)/       `  ",
  '           " ` "           ',
].join("\n");

const batPattern: EnemyMove[] = [
  {
    id: "GOLPE_AEREO",
    description:
      "O morcego se prepara, estrala os ossos, estica suas asas e parte pra cima de você com tudo, um verdadeiro foguete está indo na sua direção!",
  },
  {
    id: "DESCANSO",
    description:
      "O morcego gigante desaba no chão com as asas caídas, ofegante. Ele está completamente vulnerável!",
  },
  {
    id: "GOLPE_SIMPLES",
    description:
      "O morcego foca em você e tenta lhe arranhar com suas garras, elas parecem bem afiadas!",
  },
  {
    id: "GOLPE_AEREO",
    description:
      "O morcego se prepara, estrala os ossos, estica suas asas e parte pra cima de você com tudo, um verdadeiro foguete está indo na sua direção!",
  },
  {
    id: "DESCANSO",
    description:
      "O morcego gigante desaba no chão com as asas caídas, ofegante. Ele está completamente vulnerável!",
  },
  {
    id: "GOLPE_RASANTE",
    description:
      "O morcego sobe com tudo e prepara um mergulho em alta velocidade. É o mesmo golpe de antes? Não, ele parece estar mirando nas suas pernas!",
  },
  {
    id: "ONDA_VENTO",
    description:
      "O morcego começa a bater suas asas com muita velocidade, você vê um mini tornado se formando, ele está prestes a jogar todo aquele vento em você!",
  },
  {
    id: "GOLPE_AEREO",
    description:
      "O morcego se prepara, estrala os ossos, estica suas asas e parte pra cima de você com tudo, um verdadeiro foguete está indo na sua direção!",
  },
  {
    id: "DESCANSO",
    description:
      "O morcego gigante desaba no chão com as asas caídas, ofegante. Ele está completamente vulnerável!",
  },
];

export class Bat extends Enemy {
  constructor() {
    super("Morcego", 3, batPattern, batSprite);
  }
}
