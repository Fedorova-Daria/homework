function validateAge(birthday) {
  const birth = new Date(birthday);
  const now = new Date();

  // Создаем дату 14 лет назад от текущей даты
  const fourteenYearsAgo = new Date();
  fourteenYearsAgo.setFullYear(now.getFullYear() - 14);

  return birth <= fourteenYearsAgo;
}
console.log(Valitation('2022-01-01'));
