const playMe = document.querySelectorAll('.playMe');
const playMusic = (evt) => {
    const playBtn = () => {
        music.play();
        document.body.appendChild(music);
    };
    let button = evt.target.id
    let music = new Audio(`./sounds/${button}.mp3`);
    const audio = document.getElementsByTagName('audio')[0];
    if (audio) {
        audio.remove();
        playBtn();
    } else {
        playBtn();
    }
}
for (const button of playMe) {
    button.addEventListener('click', playMusic);
}
const mufasa = () => {
    const videoSextou = document.querySelector('#sexta');
    const blocoSite = document.querySelector('main');
    const body = document.querySelector('body');
    const bgColor = document.querySelectorAll('i');
    const videoPlayer = document.querySelector('#custom_video_play')

    if (videoSextou.classList.contains('naoSextou')) {
        videoSextou.classList.remove('naoSextou');
        videoSextou.classList.add('sextou');
        blocoSite.setAttribute('style', `display: none`);
        body.setAttribute('style', `overflow: hidden`);
        for (const bolha of bgColor) {
            bolha.setAttribute('style', `display: block`)
        }
        videoPlayer.currentTime = 0;
        videoPlayer.play();
    } else {
        videoSextou.classList.remove('sextou');
        videoSextou.classList.add('naoSextou');
        blocoSite.setAttribute('style', `display: flex`);
        body.setAttribute('style', `overflow: none`);
        for (const bolha of bgColor) {
            bolha.setAttribute('style', `display: none`)
        }
        videoPlayer.pause();
    }
}

const sextou = document.querySelector('#sextou');
sextou.addEventListener('click', mufasa);

const pegaH3 = document.querySelectorAll('.descBotao');
const buscador = document.getElementById('buscaButton');

buscador.addEventListener('input', () => {
    pegaH3.forEach(h3 => {
        if (h3.textContent.toLowerCase().includes(buscador.value.toLowerCase())) {
            h3.parentElement.classList.remove('invis')
            //console.log('achou');

        } else {
            h3.parentElement.classList.add('invis')
            //console.log('nao achou');
        }
    });
})
window.onload = () => {

}