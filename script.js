console.log("welcome to spotify");

//initialize the variable
let songindex = 0;
let audioelement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songname: "Skyfall", filepath: "songs/1.mp3" , coverpath: "covers/1.jpg.webp" },
    {songname: "Attention", filepath: "songs/2.mp3" , coverpath: "covers/2.jpg.webp" },
    {songname: "Believer", filepath: "songs/3.mp3" , coverpath: "covers/3.jpg.webp" },
    {songname: "Demons", filepath: "songs/4.mp3" , coverpath: "covers/4.jpg.webp" },
    {songname: "Radioactive", filepath: "songs/5.mp3" , coverpath: "covers/5.jpg.webp" },
    {songname: "Thunder", filepath: "songs/6.mp3" , coverpath: "covers/6.jpg.webp" },
    {songname: "heathens", filepath: "song s/7.mp3" , coverpath: "covers/7.jpg.webp" },
    {songname: "ride", filepath: "songs/8.mp3" , coverpath: "covers/8.jpg.webp" },
    {songname: "Stressed out", filepath: "songs/9.mp3" , coverpath: "covers/9.jpg.webp" } ,
    {songname: "jai ho", filepath: "songs/5.mp3" , coverpath: "covers/10.jpg.webp" } ,
]

songitems.forEach((element , i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})

//.audioelement.play();

// handle play/pause click
masterplay.addEventListener('click', ()=>{
if(audioelement.paused || audioelement.currentTime<=0){
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
}
else{
    audioelement.pause();
  masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
gif.style.opacity = 0;  
}
})
//listen to events
audioelement.addEventListener('timeupdate' , ()=>{
progress=parseInt((audioelement.currentTime/audioelement.duration)*songs/100);
myprogressbar.value = progress;

})

myprogressbar.addEventListener('change' , ()=>{
    audioelement.currentTime = myprogressbar.value * audioelement.duration/100;
})

const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
makeAllplays();
songindex = parseInt(e.target.id);
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
audioelement.src = `songs/${songindex+1}.mp3`;
mastersongname.innerText = songs[songindex].songname;
audioelement.currentTime = 0;
audioelement.play();
gif.style.opacity=1;
masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>=9){
        songindex=0;
    }
    else{
        songindex += 1;
    }
    audioelement.src = `songs/${songindex+1}.mp3`;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');

})


document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex -= 1;
    }
    audioelement.src = `songs/${songindex+1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
})