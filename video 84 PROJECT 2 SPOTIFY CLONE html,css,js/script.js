console.log("lets write java scripr");
// keeping this current song global to assuer that only 1 plays at a time
let currentSong = new Audio();
let songs;

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }
    
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    
    return `${formattedMinutes}:${formattedSeconds}`;
}


async function getSongs()
{

    let a = await fetch("http://127.0.0.1:3000/songs/")
    let response = await a.text();
    console.log(response);

    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")

    songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split("/songs/")[1]);
            // here what you do is 
            // you take the thing which is after the /songs thats all
        }

    }
    // console.log(songs)
    return songs
}

// playMusic functioin

const playMusic = (track , pause=false)=>{
    
    currentSong.src = "/songs/"+track
    if(!pause){
        // if the song isnt paused , then play it
        currentSong.play();
        play.src = "pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
}

async function main(){

    
    // play.src = "play.svg";
    // Get the list of all the songs
    let songs = await getSongs()
    playMusic(songs[0   ])
    console.log(songs);

    // show all teh songs in the playlist
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];

    for (const song of songs) {
        // here you basically create a list in the inenr html to look like a good list
        

        songUL.innerHTML = songUL.innerHTML + `
        
        
        <li>
            <img class="invert" src="music.svg" alt="">

            <div class="info">
                <div>${song.replaceAll("%20", " ")}</div>
                <div>The BJV</div>
            </div>

            <div class="playnow">
                <span>Play Now</span>
                <img class="invert" src="play.svg" alt="">
            </div>
        </li> 
    `
    }

    // attach an event listner to each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e=>{
        e.addEventListener("click", element=>{

            console.log(e.querySelector(".info").firstElementChild.innerHTML);
          
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
            //trim to remove the sapces if any in the beginning
        })
    })

    // attach an event listner to play next and previous
    play.addEventListener("click", ()=>{
        if(currentSong.paused){
            currentSong.play();
            play.src= "pause.svg";
        }
        else{
            currentSong.pause();
            play.src = "play.svg";
        }
    })


    // listen for time update event
    currentSong.addEventListener("timeupdate", ()=>{
        // console.log(currentSong.currentTime, currentSong.duration);
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`

        // to move the circle on the line when the song plays and timechanges or updates
        document.querySelector(".circle").style.left = currentSong.currentTime/currentSong.duration * 100 + "%"


    })


    // add event listener to seek bar
    document.querySelector(".seekbar").addEventListener("click", e=>{
        
        let percent = (e.offsetX / e.target.getBoundingClientRect().width)*100;
        document.querySelector(".circle").style.left = percent + "%" ;
        //it gives the point where we touch


        // now we need to change the song time too
        currentSong.currentTime = (currentSong.duration * percent)/100;
    })


    // add and event listener for hamburger
    document.querySelector(".hamburger").addEventListener("click", ()=>{
        document.querySelector(".left").style.left = "0";
    })
    
    // add and event listener for close button
    document.querySelector(".close").addEventListener("click", ()=>{
        document.querySelector(".left").style.left = "-125%";   
    })

    // add event listeners for previous
    previous.addEventListener("click", ()=>{
        currentSong.pause();
        console.log("previous clicked");
        let index = songs.indexOf(currentSong.src.split("/").slice(-1) [0])
        if(index-1 >= 0){

            // to play the previouz song when tapped
            playMusic(songs[index-1]);
        }
    })
    
    // add event listeners for next
    next.addEventListener("click", ()=>{
        currentSong.pause();
        console.log("next clicked");


        // knowing the index of the present song
        let index = songs.indexOf(currentSong.src.split("/").slice(-1) [0])
        
        if(index+1 < songs.length){

            // to play the next song when tapped
            playMusic(songs[index+1]);
        }
    })

    // Add an event to volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e)=>{
        console.log("setting volume to ", e.target.value);
        currentSong.volume = parseInt(e.target.value)/100;
    })
    
}




main();

