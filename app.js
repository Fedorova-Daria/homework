'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const buttonContainer = document.getElementById('button-container');
  const clickCounterSpan = document.getElementById('click-counter');

  let clickCount = 0;
  let lastClickedButton = null;

  // Делегирование событий на контейнер кнопок
  buttonContainer.addEventListener('click', (event) => {
    // Проверяем, что клик был именно по кнопке с классом .btn
    if (event.target.classList.contains('btn')) {
      const currentButton = event.target;

      // Увеличиваем счетчик
      clickCount++;
      clickCounterSpan.textContent = clickCount;

      // Если ранее была нажата другая кнопка, сбрасываем ее состояние
      if (lastClickedButton && lastClickedButton !== currentButton) {
        lastClickedButton.textContent = 'Нажми меня';
        lastClickedButton.classList.remove('active');
      }

      // Устанавливаем новое состояние для текущей кнопки
      currentButton.textContent = 'Нажата';
      currentButton.classList.add('active');

      // Сохраняем ссылку на последнюю нажатую кнопку
      lastClickedButton = currentButton;
    }
  });
});
