class Character {
  race;
  name;
  language;
  constructor(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
  }

  speak() {
    console.log('Всем привет!');
  }
}

class Orc extends Character {
  weapon = 'Sword';
  constructor(race, name, language, weapon) {
    super(race, name, language);
    this.weapon = weapon;
  }

  attack() {
    console.log(`Атака оружием: ${this.weapon}`);
  }

  speak() {
    console.log(`Прива! Я ${this.name}, моя раса - ${this.race}!`);
  }
}

class Elf extends Character {
  spells;
  constructor(race, name, language) {
    super(race, name, language);
    this.spells = new Map();
  }

  createSpell(spellName, effect) {
    if (this.spells.has(spellName)) {
      console.log(
        `${this.name} (${this.race}): Заклинание "${spellName}" уже существует.`
      );
    } else {
      this.spells.set(spellName, effect);
      console.log(
        `${this.name} (${this.race}) создает новое заклинание: "${spellName}" с эффектом: "${effect}".`
      );
    }
  }
  castSpell(spellName) {
    if (this.spells.has(spellName)) {
      const effect = this.spells.get(spellName);
      console.log(
        `${this.name} (${this.race}) применяет заклинание "${spellName}"! Эффект: "${effect}".`
      );
    } else {
      console.log(
        `${this.name} (${this.race}): Заклинание "${spellName}" не найдено в книге заклинаний.`
      );
    }
  }
  speak() {
    console.log(
      `Приветствую тебя! Мое имя ${this.name}, я из расы ${this.race}.`
    );
  }
}

const Elf = new Elf('Эльф', 'Жорик', 'Эльфийский');
Elf.speak();
