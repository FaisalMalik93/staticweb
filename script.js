document.getElementById('clickMeBtn').addEventListener('click', () => {
    const message = document.getElementById('message');
    message.textContent = 'Thanks for clicking the button!';
    message.style.color = '#0077cc';
});
