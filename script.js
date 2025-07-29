function SunDark() {
    let button = document.querySelector('#Toglle'); // Corrigido para selecionar o botão com o ID "Toggle"
    let webBody = document.querySelector('body');

        // Adiciona ou remove a classe 'Dark' com base no estado do botão
    if (!webBody.classList.contains('Dark')) {
        webBody.classList.add('Dark');
        button.innerHTML = '<ion-icon name="sunny-outline"></ion-icon> '
    } else {
        webBody.classList.remove('Dark');
        button.innerHTML = '<ion-icon name="moon-outline"></ion-icon>'
    }
}

    const video = document.getElementById('videoSourceBackground');
    video.onended = () => {
        video.src = './Assets/Revert.mp4';
        video.load();
        video.play();
    };
   
document.addEventListener('DOMContentLoaded', () => {
    const components = document.querySelectorAll('header, main, footer');

    // Inicialmente esconde os componentes
    components.forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 1s';
    });

    // Após 7 segundos, mostra com transição
    setTimeout(() => {
        components.forEach(el => {
            el.style.opacity = '1';
        });
    }, 7000);
});

