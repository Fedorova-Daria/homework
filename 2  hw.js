function rollDice(dice) {
  const max = parseInt(dice.slice(1));
  const min = 1;

  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(rollDice('d4'));
