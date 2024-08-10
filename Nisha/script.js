document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');

    setInterval(() => {
        message.style.transform = 'scale(1.1)';
        setTimeout(() => {
            message.style.transform = 'scale(1)';
        }, 500);
    }, 1000);
});
