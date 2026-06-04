import type { Enemy } from "../entities/Enemy.js";
import type { Ability, Warrior } from "./../entities/Warrior.js";
import type { FightResult } from "./interactions.js";

export class BattleManager {
  private player: Warrior;
  private enemy: Enemy;
  private rules: Record<string, Partial<Record<Ability, FightResult>>>;

  constructor(
    player: Warrior,
    enemy: Enemy,
    rules: Record<string, Partial<Record<Ability, FightResult>>>,
  ) {
    this.player = player;
    this.enemy = enemy;
    this.rules = rules;
  }

  public getEnemyCurrentAction() {
    return this.enemy.getCurrentAction();
  }

  public evaluateTurn(playerChoice: Ability): FightResult {
    const enemyAction = this.enemy.getCurrentAction();
    if (!enemyAction) {
      throw new Error(
        "Erro Crítico: O inimigo tentou fazer uma ação que não existe no padrão dele!",
      );
    }
    const turnRules = this.rules[enemyAction.id];
    const result = turnRules ? turnRules[playerChoice] : undefined;

    if (!result) {
      return {
        survive: false,
        message: "Você usou algo que não podia. Vai morrer como punição.",
      };
    }

    if (result.survive) {
      this.enemy.nextTurn();
    }

    return result;
  }
}
