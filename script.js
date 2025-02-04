document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.includes("html2.html")) {
        console.log("Chuva de corações ativada!");

        const emojis = ['💖', '❤️','💗'];

        function criarEmoji() {
            const emoji = document.createElement('div');
            emoji.classList.add('floating');  
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

            emoji.style.left = Math.random() * 100 + 'vw';
            emoji.style.top = '-50px';
            emoji.style.fontSize = Math.random() * 24 + 10 + 'px';
            emoji.style.animationDuration = Math.random() * 6 + 3 + 's';

            document.body.appendChild(emoji);

            setTimeout(() => {
                emoji.remove();
            }, 6000);
        }

        setInterval(criarEmoji, 500);
    } else {
        console.log("Chuva de corações DESATIVADA nesta página.");
    }
});
