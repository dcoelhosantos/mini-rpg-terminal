import { Entity } from "./Entity.js";

export type Ability =
  | "ATACAR"
  | "ESQUIVAR"
  | "PULAR"
  | "USAR_ESCUDO"
  | "ABAIXAR"
  | "JOGAR_PEDRA"
  | "DANCAR"
  | "PENSAR";

export class Warrior extends Entity {
  private abilities: Ability[] = ["ATACAR"];
  private attemptsPerMove: Map<string, Set<Ability>> = new Map();

  constructor(name: string) {
    super(name, 1);
  }

  public getAbilities() {
    return this.abilities;
  }

  public unlockAbility(ability: Ability) {
    if (!this.abilities.includes(ability)) {
      this.abilities.push(ability);
    }
  }

  public recordAttempt(moveId: string, ability: Ability) {
    if (!this.attemptsPerMove.has(moveId)) {
      this.attemptsPerMove.set(moveId, new Set());
    }
    this.attemptsPerMove.get(moveId)!.add(ability);
  }

  public hasAttemptedAllUnlockedForMove(moveId: string): boolean {
    const attempts = this.attemptsPerMove.get(moveId);
    if (!attempts) return false;

    if (this.abilities.length === 1) {
      return attempts.has("ATACAR");
    }

    const requiredAbilities = this.abilities.filter(
      (ability) => ability !== "ATACAR",
    );

    return requiredAbilities.every((ability) => attempts.has(ability));
  }
}
