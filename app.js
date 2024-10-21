const album = [
    {
        title: 'El poder es Nuestro',
        artist: 'Adrian Barba',
        img: 'assets/img/dragonball.png',
        song: 'assets/audio/y2mate.comAdriánBarbaElPoderNuestroEsFullLatino.mp3'
    },
    {
        title: 'No hay lugar seguro',
        artist: 'tenshi',
        img: 'assets/img/parque.jpg',
        song: 'assets/audio/y2mate.com - No Hay Lugar Seguro.mp3'
    },
    {
        title: 'Dont cry',
        artist: "Guns 'n Roses",
        img: 'assets/img/gunsroses.png',
        song: 'assets/audio/y2mate.com - Dont Cry Original.mp3'
    },
    {
        title: 'Lo malo de ser Bueno',
        artist: 'Cuarteto de Nos',
        img: 'assets/img/cuarteto.jpg',
        song: 'assets/audio/y2mate.com - Lo malo de ser bueno.mp3'
    },
    {
        title: 'Oh que será',
        artist: 'Willie Colon',
        img: 'assets/img/willie.png',
        song: 'assets/audio/y2mate.com - Oh Qué Será.mp3'
    }
]

const audio = document.getElementById('audio')
const play = document.getElementById('play')
const pause = document.getElementById('pause')
const forward = document.getElementById('forward')
const rewind = document.getElementById('rewind')
const stop = document.getElementById('stop')
const next = document.getElementById('next')
const previous = document.getElementById('bx-previous')

play.addEventListener('click', () => {
    audio.play()
})

pause.addEventListener('click', () => {
    audio.pause()
})

rewind.addEventListener('click', () => {
    audio.currentTime -= 10
})

forward.addEventListener('click', () => {
    audio.currentTime += 10
})

stop.addEventListener('click', () => {
    audio.pause()
    audio.currentTime = 0
})

next.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % album.length
    loadSong(currentSongIndex)
    audio.play()
})

previous.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + album.length) % album.length
    loadSong(currentSongIndex)
    audio.play()
})

audio.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % album.length
    loadSong(currentSongIndex)
    audio.play()
})


let currentSongIndex = 0

function loadSong(index) {
    const song = album[index]
    audio.src = song.song
    document.querySelector('.player__artist').textContent = song.artist
    document.querySelector('.player__song').textContent = song.title
    document.querySelector('.player__img').src = song.img
}

window.addEventListener('DOMContentLoaded', () => {
    loadSong(currentSongIndex)
})

