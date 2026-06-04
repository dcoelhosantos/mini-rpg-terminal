import { isCancel, outro, select, spinner } from "@clack/prompts";
import process from "node:process";
import color from "picocolors";
import { BattleManager } from "./engine/BattleManager.js";
import {
  BatInteractions,
  CiclopInteractions,
  DemonInteractions,
} from "./engine/interactions.js";
import {
  playBatIntro,
  playCiclopIntro,
  playDemonIntro,
  playEnding,
  playIntro,
} from "./engine/lore.js";
import { Warrior, type Ability } from "./entities/Warrior.js";
import { Bat } from "./entities/bosses/bat.js";
import { Ciclop } from "./entities/bosses/ciclop.js";
import { Demon } from "./entities/bosses/demon.js";

const abilityLabels: Record<Ability, string> = {
  ATACAR: "⚔️ Atacar",
  ESQUIVAR: "💨 Esquivar",
  PULAR: "⬆️ Pular",
  USAR_ESCUDO: "🛡️ Usar Escudo",
  ABAIXAR: "⬇️ Abaixar",
  JOGAR_PEDRA: "🪨 Jogar Pedra",
  DANCAR: "🕺 Dançar",
  PENSAR: "🧠 Pensar",
};

function centerAscii(ascii: string) {
  const terminalWidth = process.stdout.columns || 80;

  const cleanAscii = ascii.replace(/^\s*[\r\n]/, "").replace(/[\r\n]\s*$/, "");
  const lines = cleanAscii.split("\n");

  const maxWidth = Math.max(...lines.map((line) => line.length));

  const padding = Math.max(0, Math.floor((terminalWidth - maxWidth) / 2));
  const padString = " ".repeat(padding);

  return lines.map((line) => padString + line).join("\n");
}

function printCenteredTitle(title: string) {
  const terminalWidth = process.stdout.columns || 80;
  const padding = Math.max(0, Math.floor((terminalWidth - title.length) / 2));

  console.log(
    "\n" + " ".repeat(padding) + color.bgRed(color.white(title)) + "\n",
  );
}

async function waitForEnter(
  message: string = "Pressione ENTER para continuar...",
) {
  await select({
    message: message,
    options: [{ value: "ok", label: "Continuar" }],
  });
  console.clear();
}

async function runBossFight(
  hero: Warrior,
  bossName: "Ciclop" | "Bat" | "Demon",
) {
  let fightActive = true;
  while (fightActive) {
    let boss =
      bossName === "Ciclop"
        ? new Ciclop()
        : bossName === "Bat"
          ? new Bat()
          : new Demon();
    let rules =
      bossName === "Ciclop"
        ? CiclopInteractions
        : bossName === "Bat"
          ? BatInteractions
          : DemonInteractions;
    let battle = new BattleManager(hero, boss, rules);

    let currentLifeActive = true;
    let currentTurn = 1;

    while (currentLifeActive) {
      console.clear();

      const rawTitle = ` ⚔️ BATALHA CONTRA O ${bossName.toUpperCase()} ⚔️ `;
      printCenteredTitle(rawTitle);

      console.log(color.yellow(centerAscii(boss.getSprite())));

      const enemyAction = battle.getEnemyCurrentAction();
      if (!enemyAction) break;

      // O DESTAQUE CINZA DO ATAQUE DO BOSS (Sem fundo e em negrito)
      console.log(color.gray(color.bold(` \n⚠️  ${enemyAction.description}`)));
      console.log("\n");

      const menuOptions = hero.getAbilities().map((abi) => ({
        value: abi,
        label: abilityLabels[abi],
      }));

      const choice = await select({
        message: color.cyan(
          `❤️ HP: ${boss.getHp()} | ⏳ Turno: ${currentTurn} | Escolha sua ação:`,
        ),
        options: menuOptions,
      });

      if (isCancel(choice)) {
        console.clear();
        outro(color.gray("Você fugiu da batalha. Covarde."));
        process.exit(0);
      }

      const playerChoice = choice as Ability;
      const moveId = enemyAction.id;
      hero.recordAttempt(moveId, playerChoice);

      const result = battle.evaluateTurn(playerChoice);

      const s = spinner();
      s.start("O impacto se aproxima...");
      await new Promise((res) => setTimeout(res, 800));
      s.stop("💥");

      console.clear();

      if (result.survive) {
        console.log(`\n${color.green(`✅ ${result.message}`)}\n`);
        currentTurn++;

        if (
          (enemyAction.id === "DESCANSO" && playerChoice === "ATACAR") ||
          (enemyAction.id === "VER_FUTURO" && playerChoice === "ATACAR")
        ) {
          boss.takeDamage(1);
          if (boss.getHp() <= 0) {
            console.log(
              color.bgCyan(
                color.black(
                  `\n 🎉 PARABÉNS! Você derrotou o ${bossName}! 🎉 \n`,
                ),
              ),
            );
            await waitForEnter(
              "Pressione ENTER para avançar para o próximo desafio.",
            );
            currentLifeActive = false;
            fightActive = false;
          } else {
            await waitForEnter();
          }
        } else {
          await waitForEnter();
        }
      } else {
        console.log(`\n${color.magenta(`💀 ${result.message}`)}\n`);
        outro(color.bgRed(color.white(" VOCÊ MORREU... ")));

        await waitForEnter("Aceite o seu trágico destino...");

        const triedAllForThisMove = hero.hasAttemptedAllUnlockedForMove(moveId);
        let unlockedSomething = false;

        if (hero.getAbilities().length === 1 && playerChoice === "ATACAR") {
          console.log(
            color.yellow(
              "\nVocê para pra pensar... atacar nem sempre é a resposta! Às vezes se esquivar pode ser uma boa solução. Você deve ser um gênio para pensar nisso sozinho!",
            ),
          );
          hero.unlockAbility("ESQUIVAR");
          console.log(
            color.bgGreen(
              color.black(
                "\n ✨ Nova habilidade desbloqueada: ESQUIVAR! ✨ \n",
              ),
            ),
          );
          unlockedSomething = true;
        } else if (triedAllForThisMove) {
          if (
            bossName === "Ciclop" &&
            moveId === "GOLPE_AREA" &&
            !hero.getAbilities().includes("PULAR")
          ) {
            console.log(
              color.yellow(
                "\nSuas pernas estão latejando de tanto apanhar no chão. Você percebe que o ar acima de você parece incrivelmente pacífico e seguro... Talvez usar os joelhos para ir para cima seja a resposta!",
              ),
            );
            hero.unlockAbility("PULAR");
            console.log(
              color.bgGreen(
                color.black("\n ✨ Nova habilidade desbloqueada: PULAR! ✨ \n"),
              ),
            );
            unlockedSomething = true;
          } else if (
            bossName === "Ciclop" &&
            moveId === "LASER" &&
            !hero.getAbilities().includes("USAR_ESCUDO")
          ) {
            console.log(
              color.yellow(
                "\nVocê virou churrasco tantas vezes que a sua armadura já tem cheiro de bacon. Você olha para aquele pedaço de metal inútil nas suas costas e pensa: 'E se eu colocar isso na frente do meu rosto?'",
              ),
            );
            hero.unlockAbility("USAR_ESCUDO");
            console.log(
              color.bgGreen(
                color.black(
                  "\n ✨ Nova habilidade desbloqueada: USAR ESCUDO! ✨ \n",
                ),
              ),
            );
            unlockedSomething = true;
          } else if (
            bossName === "Bat" &&
            moveId === "GOLPE_AEREO" &&
            !hero.getAbilities().includes("ABAIXAR")
          ) {
            console.log(
              color.yellow(
                "\nO morcego continua arrancando sua cabeça porque você insiste em ficar de pé como um alvo fácil. Você deduz que ficar mais perto do chão, abraçando os próprios joelhos, pode ajudar.",
              ),
            );
            hero.unlockAbility("ABAIXAR");
            console.log(
              color.bgGreen(
                color.black(
                  "\n ✨ Nova habilidade desbloqueada: ABAIXAR! ✨ \n",
                ),
              ),
            );
            unlockedSomething = true;
          } else if (
            bossName === "Bat" &&
            moveId === "ONDA_VENTO" &&
            !hero.getAbilities().includes("JOGAR_PEDRA")
          ) {
            console.log(
              color.yellow(
                "\nA força dos ventos te faz perceber que você precisa de um projétil para interromper esse bicho. Você olha pro chão da caverna... cheio de pedras. A matemática é simples.",
              ),
            );
            hero.unlockAbility("JOGAR_PEDRA");
            console.log(
              color.bgGreen(
                color.black(
                  "\n ✨ Nova habilidade desbloqueada: JOGAR PEDRA! ✨ \n",
                ),
              ),
            );
            unlockedSomething = true;
          } else if (
            bossName === "Demon" &&
            moveId === "GOLPE_CONCENTRADO" &&
            !hero.getAbilities().includes("DANCAR")
          ) {
            console.log(
              color.yellow(
                "\nEnfrentar uma esfera de aniquilação total exige medidas desesperadas. Se o fim está próximo, por que não se jogar no ritmo e confundir a mente milenar dessa criatura com puro gingado?",
              ),
            );
            hero.unlockAbility("DANCAR");
            console.log(
              color.bgGreen(
                color.black(
                  "\n ✨ Nova habilidade desbloqueada: DANÇAR! ✨ \n",
                ),
              ),
            );
            unlockedSomething = true;
          } else if (
            bossName === "Demon" &&
            moveId === "INVADIR_MENTE" &&
            !hero.getAbilities().includes("PENSAR")
          ) {
            console.log(
              color.yellow(
                "\nSua mente tem sido invadida e destruída repetidas vezes. Você entende que a única forma de lutar contra uma invasão mental é preencher a mente com algo tão bizarro que faça o invasor querer fugir.",
              ),
            );
            hero.unlockAbility("PENSAR");
            console.log(
              color.bgGreen(
                color.black(
                  "\n ✨ Nova habilidade desbloqueada: PENSAR! ✨ \n",
                ),
              ),
            );
            unlockedSomething = true;
          }
        }

        if (unlockedSomething) {
          await waitForEnter("Avançar com seu novo conhecimento...");
        }

        console.clear();
        const reviveSpinner = spinner();
        reviveSpinner.start(
          "Reconstruindo o Guerreiro de Papelão das cinzas...",
        );
        await new Promise((res) => setTimeout(res, 2000));
        reviveSpinner.stop(color.green("⚡ Ressurreição Concluída!"));
        await new Promise((res) => setTimeout(res, 800));

        currentLifeActive = false;
      }
    }
  }
}

async function main() {
  const hero = new Warrior("Guerreiro de Papelão");

  await playIntro();

  await playCiclopIntro();
  await runBossFight(hero, "Ciclop");

  await playBatIntro();
  await runBossFight(hero, "Bat");

  await playDemonIntro();
  await runBossFight(hero, "Demon");

  await playEnding();

  console.clear();
  outro(
    color.bgYellow(
      color.black(
        " 🏆 PARABÉNS! Você zerou o Mini RPG Terminal e provou ser o mestre da imprevisibilidade! 🏆 ",
      ),
    ),
  );
}

main();
