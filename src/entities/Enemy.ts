import { Entity } from "./Entity.js";

export interface EnemyMove {
  id: string;
  description: string;
}

export class Enemy extends Entity {
  private currentTurn: number = 0;
  private pattern: EnemyMove[];
  private sprite: string;

  constructor(name: string, hp: number, pattern: EnemyMove[], sprite: string) {
    super(name, hp);
    this.pattern = pattern;
    this.sprite = sprite;
  }

  public getSprite(): string {
    return this.sprite;
  }

  public getTurnIndex() {
    return this.currentTurn;
  }

  public getPattern() {
    return this.pattern;
  }

  public getCurrentAction() {
    return this.pattern[this.currentTurn];
  }

  public nextTurn() {
    this.currentTurn++;
    if (this.currentTurn >= this.pattern.length) {
      this.currentTurn = 0;
    }
  }
}
