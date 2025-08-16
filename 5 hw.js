const character = function (race, name, language) {
  this.race = race;
  this.name = name;
  this.language = language;
};

character.prototype.say = function () {
  console.log(this.name, this.language);
};

function Orc(name, language, weapon) {
  Character.call(this, 'Орк', name, language);
  this.weapon = weapon;
}

// Orc.prototype теперь наследует методы от Character.prototype
Orc.prototype = Object.create(Character.prototype);

Orc.prototype.attack = function () {
  console.log('АТАКА!');
};

Orc.prototype.castSpell = function (spellName) {
  console.log(
    `${this.name} (${this.race}) применяет заклинание "${spellName}"!`
  );
};

Orc.prototype.createSpell = function (spellName, effect) {
  console.log(
    `${this.name} (${this.race}) создает новое заклинание: "${spellName}" с эффектом: "${effect}".`
  );
};

const orc = new character('Орк', 'Горг', 'Оркский');
orc.say();
orc.attack();
orc.castSpell('Пламя Хаоса');
orc.createSpell('Портал', 'Создает портал в Оргриммар');
