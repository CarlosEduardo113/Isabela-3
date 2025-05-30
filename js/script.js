function createHeartAtClick(x, y) {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

document.addEventListener('click', (e) => {
    createHeartAtClick(e.clientX, e.clientY);
});



