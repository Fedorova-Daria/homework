function getCurrentPositionPromise() {
  return new Promise((resolve, reject) => {
    if (!('geolocation' in navigator)) {
      return reject(new Error('Геолокация не поддерживается вашим браузером.'));
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
}

getCurrentPositionPromise()
  .then((coords) => {
    console.log('Ваша геопозиция успешно определена!');
    console.log(`Широта: ${coords.latitude}, Долгота: ${coords.longitude}`);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('Попытка определения геопозиции завершена.');
  });
