import { select } from "@clack/prompts";
import color from "picocolors";

async function showScreen(text: string) {
  console.clear();
  console.log("\n" + text + "\n");
  await select({
    message: " ",
    options: [{ value: "ok", label: "Avançar" }],
  });
}

export async function playIntro() {
  await showScreen(
    color.gray(
      "O mundo como conhecíamos acabou. As criaturas horrendas do Rei Demônio tomaram conta de tudo.\n" +
        "A humanidade estava à beira da extinção, até que uma aliança improvável surgiu...",
    ),
  );

  await showScreen(
    color.gray(
      "Um demônio rebelde, traindo seu próprio Rei, ofereceu um feitiço obscuro como nossa última esperança.\n" +
        "Em troca de sua própria vida, ele lançaria uma magia capaz de anular a maior fraqueza de três bravos guerreiros.",
    ),
  );

  await showScreen(
    color.gray(
      "Mas o feitiço demorou demais. A humanidade já não tinha um exército.\n" +
        "Conseguiram encontrar apenas dois grandes heróis... e você.",
    ),
  );

  await showScreen(
    color.gray(
      "O primeiro guerreiro era uma força da natureza, mas com zero intelecto estratégico.\n" +
        "O feitiço curou sua mente, transformando-o em um gênio militar impecável.\n\n" +
        "O segundo era um veterano letal, mas envelhecido e caolho.\n" +
        "O feitiço lhe devolveu a juventude e a visão perfeita.",
    ),
  );

  await showScreen(
    color.gray(
      "E então... havia você.\n\n" +
        "Franzino, meio idiota e absurdamente lento. Sem exageros, o guerreiro mais fraco da Terra.\n" +
        "Qual era a sua maior fraqueza? Difícil dizer. Talvez a sua própria capacidade de continuar vivo.",
    ),
  );

  await showScreen(
    color.magenta(
      "E foi exatamente isso que o feitiço entendeu.\n" +
        "A magia cobriu sua maior fraqueza lhe concedendo a Imortalidade.",
    ),
  );

  await showScreen(
    color.gray(
      "Você continuou sendo um guerreiro inútil, mas que simplesmente não parava de reviver.\n\n" +
        "Vocês três partiram para a batalha final. Mas os dois generais do Lorde Demônio eram implacáveis.\n" +
        "O Ciclop e o Morcego Gigante fizeram picadinho dos seus dois amigos superpoderosos.",
    ),
  );

  await showScreen(
    color.yellow(
      "Agora, sem pressão, mas a Terra inteira está contando apenas com você.\n" +
        "Boa sorte, Guerreiro de Papelão!",
    ),
  );
}

export async function playCiclopIntro() {
  await showScreen(
    color.red(
      "Você escuta passos pesados fazendo a caverna tremer.\n" +
        "À sua frente, limpando o sangue do seu antigo amigo da clava, está o Ciclop.\n" +
        "Chegou a hora de morrer (algumas vezes) para vingá-lo.",
    ),
  );
}

export async function playBatIntro() {
  await showScreen(
    color.cyan(
      "O corpo colossal do Ciclop cai no chão com um baque surdo.\n" +
        "Você mal tem tempo de comemorar. Uma rajada de vento corta o ar da caverna.\n" +
        "O teto escurece enquanto o Morcego Gigante, o assassino do segundo guerreiro, desce para te enfrentar.",
    ),
  );
}

export async function playDemonIntro() {
  await showScreen(
    color.magenta(
      "O Morcego Gigante não voa mais.\n" +
        "Os dois generais caíram. O ar fica insuportavelmente quente e pesado.\n" +
        "Os portões do inferno se abrem. O Lorde Demônio levanta de seu trono.\n" +
        "É apenas ele, você, e a sua teimosia infinita.",
    ),
  );
}

export async function playEnding() {
  await showScreen(
    color.yellow(
      "O Lorde Demônio desaba. Seus olhos não conseguem compreender como ele perdeu.\n" +
        "Como um ser tão patético, previsível e fraco conseguiu prever cada movimento dele?\n" +
        "Ele não sabia dos incontáveis ossos quebrados e vidas perdidas que pavimentaram sua vitória.",
    ),
  );

  await showScreen(
    color.green(
      "O mundo está a salvo. Os céus clareiam novamente.\n" +
        "A humanidade fará estátuas em sua homenagem... estátuas muito feias e fracas, mas farão.\n" +
        "Você é o herói mais improvável da história. O mestre da tentativa e erro.",
    ),
  );
}
