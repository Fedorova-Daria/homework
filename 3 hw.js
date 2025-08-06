function Valitation(birthday) {
  const birth = new Date(birthday);
  const now = new Date();
  const validate = now.getFullYear() - birth.getFullYear();
  if (validate >= 14) {
    return true;
  } else {
    return false;
  }
}
console.log(Valitation('2022-01-01'));
