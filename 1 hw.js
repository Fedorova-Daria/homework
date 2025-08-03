// Сделать с помощью Set уникализацию массива объектов
const Users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];

const allIds = Users.map((user) => user.id);
const seenIds = new Set();
const uniqueIds = [];

for (let i = 0; i < allIds.length; i++) {
  if (!seenIds.has(allIds[i])) {
    seenIds.add(allIds[i]);
    uniqueIds.push(allIds[i]);
  }
}

const uniqueUsers = uniqueIds.map((id) => Users.find((user) => user.id === id));

console.log(uniqueUsers);
