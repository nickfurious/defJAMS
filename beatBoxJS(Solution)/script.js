let beats = {
    "65": {
        beat: new Beat("./assets/Doorknoc.wav"),
        button: new Button("#00fffe", 65)
    },
    "83": {
        beat: new Beat("./assets/DRUMKIT2.WAV"),
        button: new Button("#00fffe", 83)
    },
    "68": {
        beat: new Beat("./assets/XUXPSET3.WAV"),
        button: new Button("#00fffe", 68)
    },
    "70": {
        beat: new Beat("./assets/Dust_air.wav"),
        button: new Button("#FF00FF", 70)
    },
    "71": {
        beat: new Beat("./assets/VB17.WAV"),
        button: new Button("#FF00FF", 71)
    },
    "72": {
        beat: new Beat("./assets/Pdiddle.wav"),
        button: new Button("#FF00FF", 72)
    },
    "74": {
        beat: new Beat("./assets/mocrazy.wav"),
        button: new Button("#FF00FF", 74)
    },
    "75": {
        beat: new Beat("./assets/GRID_KIK.WAV"),
        button: new Button("#FFFFFF", 75),
    },
    "76": {
        beat: new Beat("./assets/Anothah2.wav"),
        button: new Button("#FFFFFF", 76),
    }
}

triggerBeat = (event) => {
    let code = event.keyCode;
    if(code in beats){
        beats[code].button.select();
        beats[code].beat.play();
    }
}

document.addEventListener("keydown", triggerBeat);