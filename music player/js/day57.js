let main = document.querySelector('.main'),
musicImg = main.querySelector('.img-area img'),
musicName = main.querySelector(".song-details .name"),
musicArtist = main.querySelector(".song-details .artist"),
mainAudio = main.querySelector("#main-audio"),
playPauseBtn = main.querySelector(".play-pause"),
prevBtn = main.querySelector("#prev"),
nextBtn = main.querySelector("#next"),
progressArea = main.querySelector(".progress-area"),
progressBar = main.querySelector(".progress-bar"),
musicList = main.querySelector(".music-list"),
showMoreBtn = main.querySelector("#more-music"),
hideMusicBtn = musicList.querySelector("#close");

//loads a different song when the page is refreshed
let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);

window.addEventListener("load", () =>{
    LoadMusic(musicIndex); //calling load function when we open the page (wimdo)
    playingNow();
});

//function to load the  music
function LoadMusic(indexNumber){
    musicName.innerText = allMusic[indexNumber -1].name;
    musicArtist.innerText = allMusic[indexNumber -1].artist;
    musicImg.src = `images/${allMusic[indexNumber -1].img}.jpg`;
    mainAudio.src = `songs/${allMusic[indexNumber -1].src}.mp3`;
};

//function to play music

function playMusic(){
    main.classList.add("paused");
    playPauseBtn.querySelector('i').innerHTML = 'paused';   
    mainAudio.play();
};

//function to pause the music

function pauseMusic(){
    main.classList.remove("paused");
    playPauseBtn.querySelector('i').innerText = 'play_arrow'
    mainAudio.pause()
};

//next music function
function nextMusic(){
   // we would increment the index of the song by 1
   musicIndex++;
   if (musicIndex > allMusic.length){
    musicIndex = 1;
}
   LoadMusic(musicIndex);
   playMusic();
   playingNow();
};

//previous music funtion
function prevMusic(){
    // we would increment the index of the song by one
    musicIndex--;
    if (musicIndex < 1){
        musicIndex = allMusic.length;
    }
    LoadMusic(musicIndex);
    playMusic();
    playingNow();
 };

//making the previous icon to work

playPauseBtn.addEventListener('click', ()=>{
    const isMusicPaused = main.classList.contains('paused');
   
    //if isMusicPaused is true then call pauseMusic else call playMusic
    isMusicPaused ? pauseMusic() : playMusic();
    playingNow();
});

//to play or pause the music using event listener

nextBtn.addEventListener('click', ()=>{
    nextMusic();//calling the next music function

});

//to play the previous music

prevBtn.addEventListener('click', ()=>{
    prevMusic(); //calling the next music function
});

//updating the progress bar with the music 
//ie making the width of the progress bar to increase in width as the music keeps going to the end
Number.prototype.pad = function(digit){
    for(var n = this.toString(); n.length < digit; n = 0 + n);
        return n;
    };
mainAudio.addEventListener('timeupdate', (event) =>{
    const currentTime = event.target.currentTime; //TO GET THE CURRENT TIME OF THE SONG
    const duration = event.target.duration //getting the total tim of the song
    let progressWidth = (currentTime/duration) * 100;
    progressBar.style.width = `${progressWidth}%`; 

    let musicCurrTime = main.querySelector(".current"),
    musicDuration = main.querySelector(".duration");

    mainAudio.addEventListener("loadeddata", ()=>{

       // update the total duration OF SONG
        let audioDuration = mainAudio.duration;
        let totalMin = Math.floor(audioDuration/60);
        let totalSec = Math.floor(audioDuration % 60);
        //instead of using pad we cols use this

            // if(totalSec < 10){
            //     totalSec = `0${totalSec}`
            // }
        musicDuration.innerHTML = `${totalMin.pad(2)}:${totalSec.pad(2)}`;
    });
    // update the song playing time while its playing
    let currentMin = Math.floor(currentTime/60);
    let currentSec = Math.floor(currentTime % 60);
    //instead of using pad we cols use this

        //  if(totalSec < 10){
        //      totalSec = `0${totalSec}`
        //  }
   musicCurrTime.innerHTML = `${currentMin.pad(2)}:${currentSec.pad(2)}`;
});

//lets update the playing song  current time according to the progress bar on a click
progressArea.addEventListener("click", (event)=>{
    let progressBarValue = progressArea.clientWidth; //getting the width of the progress bar
    let clickedOffSetX = event.offsetX; //getting offset x value
    let songDuration = mainAudio.duration; //getting total song duration
    mainAudio.currentTime = (clickedOffSetX / progressBarValue) * songDuration;
    playMusic();
});

//working on repeat repeat_one and shuffle just changing the icons

const repeatBtn = main.querySelector("#repeat-plist");
repeatBtn.addEventListener("click", ()=>{
    //first get the iiner text of the icon then we change

    let getText = repeatBtn.innerText; //getting the inner text of the icon

    //we do different icon changes on different icon click using the switch mwthod
    switch(getText){
        case "repeat": //if this icon is repeat then repeat one 
            repeatBtn.innerText = "repeat_one";
            repeatBtn.setAttribute('title', "song looped");
            break;
        case "repeat_one": //if the icon is repeat one then shuffle
            repeatBtn.innerHTML = "shuffle";
            repeatBtn.setAttribute('title', "playback shuffle");
            break;
        case "shuffle": //if the icon is repeat one then shuffle
            repeatBtn.innerHTML = "repeat";
            repeatBtn.setAttribute('title', "playlist looped");
            break;
    }
});

//now working on wjat happens ones the icon is changed
mainAudio.addEventListener("ended", ()=>{
    //we would work according tot he icon present eg if the icon is on then when the song ends then the song should restart back
    let getText = repeatBtn.innerText; //getting the inner text of the icon

    //we do different icon changes on different icon click using the switch mwthod
    switch(getText){
        case "repeat": //if this icon is repeat we play the next song and so on(calling the nextMusic function ) 
                nextMusic();
                playMusic()
            break;
        case "repeat_one": //if the icon is repeat one we play the same song till the icon changes by doing this we current time of the song is always going to be 0
           mainAudio.currentTime = 0;
           LoadMusic(musicIndex);
           playMusic();
            break;
        case "shuffle": //if the icon is repeat one then shuffle
            //generating a random number between max range and array length
            let randomIndex = Math.floor((Math.random() * allMusic.length) + 1);
            do{
                randomIndex = Math.floor((Math.random() * allMusic.length) + 1);   
            }
            while(musicIndex == randomIndex) // the loop runs until the current index is not the same as the random number
            
            musicIndex = randomIndex //passing the value of the random index generated to the music index
            LoadMusic(musicIndex); //loading the music index gotten and hence calling the loadMusic function  
            playMusic(); //calling the play music function
            playingNow();
            break;
    }
});

//show the list of songs
showMoreBtn.addEventListener("click", ()=>{
    musicList.classList.toggle("show");
});

//hide the list of songs
hideMusicBtn.addEventListener("click", ()=>{
    showMoreBtn.click();
});

//lets create the list of the song

const ulTag = main.querySelector("ul"); //getting the ul element

//lets create the list according to the array length(object)

for(let i = 0; i < allMusic.length; i++){
    let liTag = `
                <li li-index="${i + 1}">
                    <div class="row">
                        <span>${allMusic[i]['name']}</span>
                        <p>${allMusic[i].artist}</p>
                    </div>
                    <audio class = "${allMusic[i].src}" src="songs/${allMusic[i].src}.mp3"></audio>
                    <span id="${allMusic[i].src}" class="audio-duration">3:01</span>
                </li>`;
    ulTag.insertAdjacentHTML("beforeend", liTag); //adding elements before the end of the ul tag

    let liAudioDuration =ulTag.querySelector(`#${allMusic[i].src}`);
    let liAudioTag =ulTag.querySelector(`.${allMusic[i].src}`);

    liAudioTag.addEventListener("loadeddata", ()=>{
        let audioDuration = liAudioTag.duration;
        let totalMin = Math.floor(audioDuration/60);
        let totalSec = Math.floor(audioDuration % 60);
        //instead of using pad we cols use this
            // if(totalSec < 10){
            //     totalSec = `0${totalSec}`
            // }
        liAudioDuration.innerHTML = `${totalMin.pad(2)}:${totalSec.pad(2)}`;
        liAudioDuration.setAttribute("t-duration", `${totalMin.pad(2)}:${totalSec.pad(2)}`); //storing the time in t-duration so that we can get it back later
    });
}

//working on the play particular songs
const allLiTags = ulTag.querySelectorAll("li");
function playingNow(){
    for(let j = 0; j < allLiTags.length; j++){

        let audioTag = allLiTags[j].querySelector(".audio-duration");
        //removing playing class from other li elements if they are not playing
        if(allLiTags[j].classList.contains("playing")){
            allLiTags[j].classList.remove("playing");
            //getting the audio duration value storeda above and passing it the .ausio-duration.innerHTML
            let getTDuration =audioTag.getAttribute("t-duration");
            audioTag.innerHTML = getTDuration
        }
        //if there is an li tag that the index is equal to music index then this music is playing now and we need to style it.
    
        if(allLiTags[j].getAttribute("li-index") == musicIndex){
             allLiTags[j].classList.add("playing");
             audioTag.innerHTML = "playing";

        }
        //adding onclick events to all li tags
        allLiTags[j].setAttribute("onclick", "clicked(this)")
    }
};

//lets play the song on click

function clicked(element){
    //getting the index of particular clicked li tag
    let getLiIndex = element.getAttribute("li-index");
    musicIndex = getLiIndex; //passing li index to music index
    LoadMusic(musicIndex);
    playMusic();
    playingNow();
}