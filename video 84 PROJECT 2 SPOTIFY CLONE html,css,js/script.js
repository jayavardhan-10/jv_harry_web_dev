console.log("lets write java scripr");


async function getSongs()
{
    let a = await fetch("http://127.0.0.1:3000/songs/")
    let response = await a.text();
    console.log(response);

    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")

    let songs = []
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

async function main(){
    // Get the list of all the songs
    let songs = await getSongs()
    console.log(songs);

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
    //Play the first song
    // you can google this up


    // var audio = new Audio(songs[0]);
    // audio.play();


    audio.addEventListener("ontimeupdate", () =>{
        let duration = audio.duration;
        console.log(audio.duration , audio.currentSrc , audio.currentTime);
        // the duration variable now holds the duration (in seconds) of the audio clip
    })
}

main();

