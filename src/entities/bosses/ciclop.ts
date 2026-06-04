import { Enemy, type EnemyMove } from "./../Enemy.js";

const ciclopSprite = [
  "      _______      ",
  "    /`       `\\    ",
  "   |   ,---.   |   ",
  "   |  | (O) |  |   ",
  "   |   `---'   |   ",
  "    \\  \\_V_/  /    ",
  "    /\\_______/\\    ",
  "   / / |   | \\ \\   ",
  "  / /  |   |  \\ \\  ",
  " (__)  |___|  (__) ",
  "       /   \\       ",
  "      /_____\\      ",
].join("\n");

const ciclopPattern: EnemyMove[] = [
  {
    id: "GOLPE_SIMPLES",
    description: "O Ciclop usa sua clava para tentar lhe acertar.",
  },
  {
    id: "GOLPE_AREA",
    description:
      "O Ciclop pula e bate a clava com força no chão, causando um terremoto.",
  },
  {
    id: "DESCANSO",
    description:
      "O Ciclop se apoia na sua própria clava, puxando o ar com força. Ele parece exausto e abaixou completamente a guarda!",
  },
  {
    id: "GOLPE_SIMPLES",
    description: "O Ciclop usa sua clava para tentar lhe acertar.",
  },
  {
    id: "LASER",
    description:
      "O Ciclop prepara seu golpe mais forte. Você vê seu enorme olho ficando vermelho. Ele dispara um grande feixe de energia concentrada.",
  },
  {
    id: "DESCANSO",
    description:
      "O Ciclop se apoia na sua própria clava, puxando o ar com força. Ele parece exausto e abaixou completamente a guarda!",
  },
];

export class Ciclop extends Enemy {
  constructor() {
    super("Ciclop", 2, ciclopPattern, ciclopSprite);
  }
}
