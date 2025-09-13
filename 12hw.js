function race(promisesArray) {
  return Promise.race(promisesArray);
}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('❌ Ошибка от p1')), 100);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('✅ Успех от p2'), 200);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('✅ Успех от p3'), 300);
});

console.log('🏁 На старт, внимание, марш!');

race([p1, p2, p3])
  .then((result) => {
    console.log('Победитель:', result);
  })
  .catch((error) => {
    console.error('Гонку выиграл отклоненный промис:', error.message);
  });
