console.log("lets write java scripr");
// keeping this current song global to assuer that only 1 plays at a time
let currentSong = new Audio();
let songs;
let currfolder;

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


async function getSongs(folder) {
    currfolder = folder;
    let a = await fetch(`http://127.0.0.1:3000/${folder}/`)
    let response = await a.text();
    let div = document.createElement("div");
    // console.log(response);

    div.innerHTML = response;
    let as = div.getElementsByTagName("a")

    songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];

        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1]);
            // here what you do is 
            // you take the thing which is after the /songs thats all
        }

    }

    
    

    // show all the songs in the playlist
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    songUL.innerHTML = ""
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
                <img class="invert" src="img/play.svg" alt="">
            </div>
        </li> 
    `
    }

    // attach an event listner to each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
            //trim to remove the sapces if any in the beginning
        })
    })


    return songs;
}

// playMusic function

const playMusic = (track, pause = false) => {

    currentSong.src = `/${currfolder}/` + track
    if (!pause) {
        // if the song isnt paused , then play it
        currentSong.play();
        play.src = "img/pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
}


async function displayAlbums() {
    let a = await fetch(`http://127.0.0.1:3000/songs/`)
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a")
    let cardContainer = document.querySelector(".cardContainer")
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index];
        
    
    if (e.href.includes("/songs")) {
        let folder = (e.href.split("/").slice(-2)[0]);

        // get the metadata of the folder
        let a = await fetch(`http://127.0.0.1:3000/songs/${folder}/info.json`)
        let response = await a.json();
        console.log(response);
        cardContainer.innerHTML = cardContainer.innerHTML + 
        `
        <div data-folder="${folder}" class="card">
            <div class="play">

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" role="img">
                    <path d="M5 20V4L19 12L5 20Z" stroke="#000000" fill="#000" stroke-width="1.5"
                        stroke-linejoin="round"></path>
                </svg>
            </div>
            
            <img src="/songs/${folder}/cover.jpg" alt="">
            <h2>${response.title}</h2>
            <p>${response.description}</p>
        </div>
        `
    }
}

    // load the playlist whenever card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async item => {
            console.log("Fetching song");
            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`)
            playMusic(songs[0]);

        })
    })

    console.log(anchors);
}

async function main() {



    // Get the list of all the songs
    await getSongs("songs/ncs")
    playMusic(songs[0])


    // display all the albums on the page
    displayAlbums()


    // attach an event listner to play next and previous
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            play.src = "img/pause.svg";
        }
        else {
            currentSong.pause();
            play.src = "img/play.svg";
        }
    })


    // listen for time update event
    currentSong.addEventListener("timeupdate", () => {
        // console.log(currentSong.currentTime, currentSong.duration);
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`

        // to move the circle on the line when the song plays and timechanges or updates
        document.querySelector(".circle").style.left = currentSong.currentTime / currentSong.duration * 100 + "%"


    })


    // add event listener to seek bar
    document.querySelector(".seekbar").addEventListener("click", e => {

        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        //it gives the point where we touch


        // now we need to change the song time too
        currentSong.currentTime = (currentSong.duration * percent) / 100;
    })


    // add and event listener for hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    })

    // add and event listener for close button
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-125%";
    })

    // add event listeners for previous
    previous.addEventListener("click", () => {
        currentSong.pause();
        console.log("previous clicked");
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if (index - 1 >= 0) {

            // to play the previouz song when tapped
            playMusic(songs[index - 1]);
        }
    })

    // add event listeners for next
    next.addEventListener("click", () => {
        currentSong.pause();
        console.log("next clicked");


        // knowing the index of the present song
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])

        if (index + 1 < songs.length) {

            // to play the next song when tapped
            playMusic(songs[index + 1]);
        }
    })

    // Add an event to volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        // console.log("setting volume to ", e.target.value);
        currentSong.volume = parseInt(e.target.value) / 100;
    })


    // Add event listner to mute the track
    document.querySelector(".volume>img").addEventListener("click", e=>{
        
        if(e.target.src.includes("volume.svg")){
            e.target.src = e.target.src.replace("volume.svg","mute.svg");
            currentSong.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
        }
        else
        {
            e.target.src = e.target.src.replace("mute.svg", "volume.svg");
            currentSong.volume = .10;
            e.target.src = "volume.svg";
            document.querySelector(".range").getElementsByTagName("input")[0].value = 10;

        }
    })
    

}




main();

