function startNewYearCountdown() {
  const userLanguage = navigator.language || 'ru-RU';

  function getCountdown() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);
    const diff = newYear - now;

    if (diff <= 0) return 'С Новым годом! ';

    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor(
      (diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const rtf = new Intl.RelativeTimeFormat(userLanguage, {
      numeric: 'always',
      style: 'long',
    });

    const parts = [];
    if (months > 0)
      parts.push(
        rtf.format(months, 'month').replace(/^(через|in|en|dans)\s+/i, '')
      );
    if (days > 0)
      parts.push(
        rtf.format(days, 'day').replace(/^(через|in|en|dans)\s+/i, '')
      );
    if (hours > 0)
      parts.push(
        rtf.format(hours, 'hour').replace(/^(через|in|en|dans)\s+/i, '')
      );
    if (minutes > 0)
      parts.push(
        rtf.format(minutes, 'minute').replace(/^(через|in|en|dans)\s+/i, '')
      );
    if (seconds > 0)
      parts.push(
        rtf.format(seconds, 'second').replace(/^(через|in|en|dans)\s+/i, '')
      );

    return parts.join(', ');
  }

  function updateCountdown() {
    const countdown = getCountdown();

    console.log(countdown);

    return countdown;
  }

  updateCountdown();

  const intervalId = setInterval(updateCountdown, 1000);

  return intervalId;
}
