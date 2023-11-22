console.log("Welcome to specify");
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterplay");
let myprogressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongname = document.getElementById('masterSongNmae');
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "salame-e-Ishq",
    filepath: "songs/1.mp3",
    coverpath: "covers/1.jpg",
  },
  {
    songName: "bula-dena-salame-e-Ishq",
    filepath: "songs/2.mp3",
    coverpath: "covers/2.jpg",
  },
  {
    songName: "sanam teri kasam-salame-e-Ishq",
    filepath: "songs/3.mp3",
    coverpath: "covers/3.jpg",
  },
  {
    songName: "tu hire-salame-e-Ishq",
    filepath: "songs/4.mp3",
    coverpath: "covers/4.jpg",
  },
  {
    songName: "sathiya-salame-e-Ishq",
    filepath: "songs/5.mp3",
    coverpath: "covers/5.jpg",
  },
  {
    songName: "tu hi re -salame-e-Ishq",
    filepath: "songs/6.mp3",
    coverpath: "covers/6.jpg",
  },
  {
    songName: "bhag-salame-e-Ishq",
    filepath: "songs/7.mp3",
    coverpath: "covers/7.jpg",
  },
];
songItems.forEach((element, i) => {
  console.log(element, i, "aaaaaaaaaaa");
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//audioElement.play();

//Handle play /pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
//listen to event
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myprogressBar.value = progress;
  //update seekbar
});
myprogressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myprogressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove("fa-pause-play");
        element.classList.add('fa-circle-play');
        
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
    makeAllPlays();
    
    masterSongname.innerText = songs[songIndex].songName;
    songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add();
      audioElement.src = `songs/${songIndex+1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);
document.getElementById('next').addEventListener("click", (e) => {
    if(songIndex >= 7){
        songIndex = 0 
    }else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongname.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-pause-circle");
})

document.getElementById('previous').addEventListener("click", (e) => {
    if(songIndex <= 0){
        songIndex = 0 
    }else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongname.innerText = song[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-pause-circle");
})