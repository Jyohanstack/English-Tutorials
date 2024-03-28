

const transcriptContainer = document.getElementById("transcript-container");
const video = document.getElementById('player');
const player = new YT.Player(video, {
    height: '100%',
    width: '100%',
    videoId: 'g3JRONajB7w', // Replace with your video ID
    playerVars: {
        'controls': 1,
        'disablekb': 1,
        'modestbranding': 1,
        'rel': 0,
        'showinfo': 0
    },
    events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
    }
});

function onPlayerReady(event) {
    event.target.playVideo();
    loadTranscriptData(); // Load transcript data after the video is ready
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        setInterval(updateTranscriptUnderline, 100);
    }
}

function loadTranscriptData() {
    fetch('./json/lessontranscript.json') // Replace with the path to your JSON file
        .then(response => response.json())
        .then(data => {
            data.forEach(entry => {
                const p = document.createElement("p");
                p.classList.add("transcript-line");


                // Create a bold element for the speaker's name
                const speakerName = document.createElement("strong");
                speakerName.textContent = entry.speaker + " ";

                // Apply inline styles to the speakerName element
                speakerName.style.fontWeight = "bold";
                speakerName.style.color = "darkred";

                p.appendChild(speakerName);


                // Create a bold element for the speaker's time
                const speakerTime = document.createElement("strong");
                speakerTime.textContent = entry.time;

                // Apply inline styles to the speakerTime element
                speakerTime.style.fontWeight = "lighter";
                speakerTime.style.color = "red";
                speakerTime.style.cursor = "pointer"; // Set cursor to pointer

                // Add an onclick event to seek to the specific time when the speakerTime is clicked
                speakerTime.addEventListener("click", () => {
                    const timeInSeconds = parseTime(entry.time);
                    goToTime(timeInSeconds);
                });

                p.appendChild(speakerTime);

                

                const transcriptText = entry.text;
                const textParts = transcriptText.split(" ");

                textParts.forEach((word, index) => {
                    const span = document.createElement("span");
                    span.textContent = " " + word;
                    span.setAttribute("data-start-time", entry.startTime);
                    span.setAttribute("data-duration", entry.duration);

                    p.appendChild(span);
                });

                transcriptContainer.appendChild(p);
            });
        })
        .catch(error => console.error('Error loading transcript data:', error));
}


/*function updateTranscriptUnderline() {
    // Get the current playback time of the video
    const currentTime = player.getCurrentTime();
    
    // Select all the lines in the transcript container
    const transcriptLines = transcriptContainer.querySelectorAll(".transcript-line");

    // Initialize a variable to store the currently highlighted line
    let highlightedLine = null;

    // Find the currently highlighted line based on the video playback time
    for (let i = 0; i < transcriptLines.length; i++) {
        const line = transcriptLines[i];
        const lineStartTime = parseTime(line.querySelector("span").getAttribute("data-start-time"));
        const lineDuration = parseInt(line.querySelector("span").getAttribute("data-duration"));

        // Check if the current time falls within the time range of the transcript line
        if (currentTime >= lineStartTime && currentTime < lineStartTime + lineDuration) {
            highlightedLine = line;
            break;
        }
    }

    // Remove previous highlights from all transcript lines
    transcriptLines.forEach(line => {
        line.style.color = "";
        line.style.fontWeight = "300";
        line.style.fontSize = "20px";
    });

    if (highlightedLine) {
        if (player.getPlayerState() === YT.PlayerState.PLAYING) {
            // Apply highlighting to the current line
            highlightedLine.style.color = "black";
        } else {
            // Player is not playing, set color to gray
            highlightedLine.style.color = "gray";
        }

        
    
    
    

        // No automatic scroll
        
        // Check if the index of the highlighted line is a multiple of 5
        const lineIndex = Array.from(transcriptLines).indexOf(highlightedLine);
        if (lineIndex !== -1 && (lineIndex + 1) % 5 === 0) {
            // Trigger a scroll up after every 5 lines
            transcriptContainer.scrollTop -= transcriptContainer.clientHeight / 2;
        }
    }
}

*/

function updateTranscriptUnderline() {
    // Get the current playback time of the video
    const currentTime = player.getCurrentTime();
    
    // Select all the lines in the transcript container
    const transcriptLines = transcriptContainer.querySelectorAll(".transcript-line");

    // Initialize a variable to store the currently highlighted line
    let highlightedLine = null;

    // Find the currently highlighted line based on the video playback time
    for (let i = 0; i < transcriptLines.length; i++) {
        const line = transcriptLines[i];
        const lineStartTime = parseTime(line.querySelector("span").getAttribute("data-start-time"));
        const lineDuration = parseInt(line.querySelector("span").getAttribute("data-duration"));

        // Check if the current time falls within the time range of the transcript line
        if (currentTime >= lineStartTime && currentTime < lineStartTime + lineDuration) {
            highlightedLine = line;
            break;
        }
    }

    if (highlightedLine) {
        // Remove previous highlights from all transcript lines
        transcriptLines.forEach(line => {
            line.style.backgroundColor = ""; // Reset background color for all lines
            line.style.padding = ""; // Reset padding for all lines
        });

        // Change background color and add padding to the highlighted line
        highlightedLine.style.backgroundColor = "rgb(164, 244, 241)";
        highlightedLine.style.padding = "10px";
    }
}



function parseTime(timeString) {
    const parts = timeString.split(":");
    const minutes = parseInt(parts[0]);
    const seconds = parseInt(parts[1]);
    return minutes * 60 + seconds;
}

// Function to go to a specific time in the video
function goToTime(seconds) {
    player.seekTo(seconds);
}
