const playMusic = () => {
    let music = new Audio('./sounds/uepa.mp3');
    music.play();
}
const playMe = document.querySelectorAll('.playMe');
for (const button of playMe) {
    button.addEventListener('click', playMusic);
}
const mufasa = () =>{
    const videoSextou = document.querySelector('#sexta');
    const blocoBotoes = document.querySelector('.buttons');
    const bgColor = document.querySelectorAll('i');
    console.log(bgColor);
    const videoPlayer = document.querySelector('#custom_video_play')

    if (videoSextou.classList.contains('naoSextou')) {
        videoSextou.classList.remove('naoSextou');
        videoSextou.classList.add('sextou');
        blocoBotoes.setAttribute('style', `display: none`);
        for (const bolha of bgColor) {
            bolha.setAttribute('style', `display: block`)
        }
        videoPlayer.currentTime = 0;
        videoPlayer.play();
    }else{
        videoSextou.classList.remove('sextou');
        videoSextou.classList.add('naoSextou');
        blocoBotoes.setAttribute('style', `display: flex`);
        for (const bolha of bgColor) {
            bolha.setAttribute('style', `display: none`)
        }
        videoPlayer.pause();
    }
}
const sextou = document.querySelector('#sextou');
sextou.addEventListener('click', mufasa);


window.onload = () => {

}