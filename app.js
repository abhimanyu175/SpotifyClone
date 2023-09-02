console.log("Hiiiii :)");

let songno = 0;
let audioElement = new Audio();
let playpause = document.querySelector('#playpause');
let progressBar = document.querySelector('#progressBar');


let songs = [
    { songName: 'Montana', artist: 'Daya', filePath: 'songs/song1.mp3', coverPath: 'pics/songbg1.jpg', albumArt: 'song1.jpg' },
    { songName: 'reverie', artist: 'Issac Gracie', filePath: 'songs/song2.mp3', coverPath: 'pics/songbg2.png', albumArt: 'song2.jpg' },
    { songName: 'Die Alone', artist: 'Finneas', filePath: 'songs/song3.mp3', coverPath: 'pics/songbg3.jpg', albumArt: 'song3.jpg' },
    { songName: 'Myth', artist: 'Beach House', filePath: 'songs/song4.mp3', coverPath: 'pics/songbg4.jpg', albumArt: 'song4.png' },
    { songName: 'Sparks', artist: 'Coldplay', filePath: 'songs/song5.mp3', coverPath: 'pics/songbg5.png', albumArt: 'song5.jpg' },
    { songName: 'Sink', artist: 'Noah Kahan', filePath: 'songs/song6.mp3', coverPath: 'pics/songbg6.jpg', albumArt: 'song6.jpg' },
    { songName: 'Jupiter', artist: 'Flower Face', filePath: 'songs/song7.mp3', coverPath: 'pics/songbg7.jpg', albumArt: 'song7.jpg' },
    { songName: 'TV', artist: 'Billie Eilish', filePath: 'songs/song8.mp3', coverPath: 'pics/songbg8.jpg', albumArt: 'song8.png' },
    { songName: 'Gale Song', artist: 'The Lumineers', filePath: 'songs/song9.mp3', coverPath: 'pics/songbg9.jpg', albumArt: 'song9.jpg' },
    { songName: 'Apocalypse', artist: 'Cigarettes After Sex', filePath: 'songs/song10.mp3', coverPath: 'pics/songbg10.jpg', albumArt: 'song10.jpeg' },
    { songName: 'Appaloosa Bones', artist: 'Gregory Alan Isakov', filePath: 'songs/song11.mp3', coverPath: 'pics/songbg11.jpg', albumArt: 'song11.jpg' },
    { songName: 'Fade Into You', artist: 'Mazzy Star', filePath: 'songs/song12.mp3', coverPath: 'pics/songbg12.jpg', albumArt: 'song12.jpg' },
    { songName: 'The Night We Met', artist: 'Lord Huron', filePath: 'songs/song13.mp3', coverPath: 'pics/songbg13.jpg', albumArt: 'song13.jpg' },
    { songName: "Everybody's Changing", artist: 'Keane', filePath: 'songs/song14.mp3', coverPath: 'pics/songbg14.jpg', albumArt: 'song14.jpg' },
    { songName: 'Out of Love', artist: 'Alessia Cara', filePath: 'songs/song15.mp3', coverPath: 'pics/songbg15.webp', albumArt: 'song15.jpg' },
    { songName: 'Ghosts That We Knew', artist: 'Mumford And Sons', filePath: 'songs/song16.mp3', coverPath: 'pics/songbg16.jpg', albumArt: 'song16.jpg' }
];

window.onload = toast();

function toast() {
    var x = document.getElementById("snackbar");

    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}




audioElement.src = songs[0].filePath; 

playpause.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
    } else {
        audioElement.pause();
    }
});

audioElement.addEventListener('timeupdate', () => {
    progress = parseFloat((audioElement.currentTime / audioElement.duration) * 100.0);
    progressBar.value = progress;
});

progressBar.addEventListener('change', () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100.0;
})

progressBar.addEventListener('click', ()=>{
    audioElement.play();
})



function updateSongInfo() {
    const currentSong = songs[songno];
    document.getElementById('albumart').src = `pics/${currentSong.albumArt}`;
    document.querySelector('.playback').style.backgroundImage = `url('${currentSong.coverPath}')`;
    document.querySelector('.topdown h3').textContent = currentSong.artist;
    document.querySelector('.topdown h2').textContent = currentSong.songName;
}

function playNextSong(){
    console.log('next');    
    songno = (songno + 1) % songs.length; 
    audioElement.src = songs[songno].filePath; 
    updateSongInfo(); 
    audioElement.play();
}

document.querySelector('#nexticon').addEventListener('click', playNextSong);


document.querySelector('#previcon').addEventListener('click', () => {
    console.log('prev');
    songno = (songno - 1 + songs.length) % songs.length;
    audioElement.src = `${songs[songno].filePath}`;
    console.log(songno);
    updateSongInfo();
    audioElement.play();
});


audioElement.addEventListener('ended', playNextSong);

updateSongInfo();