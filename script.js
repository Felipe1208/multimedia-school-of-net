function getVideo() {
    return document.getElementById("video");
}

function play() {
    var video = getVideo();
    video.play();
}

function pause() {
    var video = getVideo();
    video.pause();
}

function stop() {
    console.log("fkjnsda")
    var video = getVideo();
    //video.pause();
    //video.currentTime = 0;
    video.load();
}

function volume(vol) {
    var volume = document.getElementById("volume").value;
    if (volume === "100") {
        volume = 1;
    } else {
        volume = parseFloat ("0."+ volume).toFixed(1);
    }
    var video = getVideo();
    video.volume = volume;    
}


function getAudio(){
    return document.getElementById("audio");
}

getAudio().onplay = function(){
    console.log("The audio has started to play");
};

getAudio().onpause = function(){
    console.log("The audio has been paused");
};

getAudio().onvolumechange = function(){
    console.log("The volume has been changed");
};