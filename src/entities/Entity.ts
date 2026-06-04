export class Entity {
  private name: string;
  private hp: number;

  constructor(name: string, hp: number) {
    this.name = name;
    this.hp = hp;
  }

  public takeDamage(damage: number) {
    this.hp -= damage;
  }

  public getName() {
    return this.name;
  }

  public getHp() {
    return this.hp;
  }
}
