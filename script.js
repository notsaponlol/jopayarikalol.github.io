const image = document.getElementById('click-image');
const audio = new Audio('yravnenie.mp3');
const countElement = document.getElementById('click-count');
const imageover = document.getElementById('imageover');
const maxWidth = window.innerWidth;
const maxHeight = window.innerHeight;

audio.volume = 0.9;
let count = 0;

image.addEventListener('click', () => {
    count++;
    countElement.textContent = count;
    const randomX = Math.floor(Math.random() * (maxWidth - image.width));
    const randomY = Math.floor(Math.random() * (maxHeight - image.height));
    imageover.style.left = randomX + 'px';
    imageover.style.top = randomY + 'px';
    
    if (count % 100 === 0) {
	audio.play();
	imageover.style.display = 'block'; 
        setTimeout(() => {
        imageover.style.display = 'none'; 
        }, 2000);
}
});

