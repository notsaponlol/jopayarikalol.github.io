// Функция для установки куки
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Функция для получения значения куки
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Загружаем количество кликов из куки
let count = parseInt(getCookie('clickCount')) || 0;
countElement.textContent = count;

// Обработчик кликов
image.addEventListener('click', () => {
    count++;
    countElement.textContent = count;

    // Сохраняем количество кликов в куки
    setCookie('clickCount', count, 30);  // 30 дней хранения куки

    const randomX = Math.floor(Math.random() * (maxWidth - image.width));
    const randomY = Math.floor(Math.random() * (maxHeight - image.height));
    imageover.style.left = randomX + 'px';
    imageover.style.top = randomY + 'px';

    if (count % 30 === 0) {
        audio.play();
        imageover.style.display = 'block';
        setTimeout(() => {
            imageover.style.display = 'none';
        }, 2000);
    }
});
