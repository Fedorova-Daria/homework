const character = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};

character.prototype.say = function () {
  console.log(this.name, this.language);
};

function Orc(name, language, weapon) {
  character.call(this, 'Орк', name, language);
  this.weapon = weapon;
}

// Orc.prototype теперь наследует методы от Character.prototype
Orc.prototype = Object.create(character.prototype);

Orc.prototype.attack = function () {
  console.log('АТАКА!');
};

function Elf(name, language) {
  character.call(this, 'Эльф', name, language);
  this.spells = new Map();
}

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.createSpell = function (spellName, effect) {
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
};

Elf.prototype.castSpell = function (spellName) {
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
};

const orc = new character('Орк', 'Горг', 'Оркский');
orc.say();
orc.attack();

const elrond = new Elf('Элронд', 'Высокоэльфийский');
elrond.say();
elrond.createSpell('Огненный шар', 'Вызывает взрыв огня');
elrond.createSpell('Ледяная стрела', 'Замораживает противника');
elrond.castSpell('Огненный шар');
