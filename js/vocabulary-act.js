document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const choices1 = document.querySelectorAll('.choice');
    const choices2 = document.querySelectorAll('.choice2');
    const choices3 = document.querySelectorAll('.choice3');
    const choices4 = document.querySelectorAll('.choice4');  // Added for the fourth question
    const choices5 = document.querySelectorAll('.choice5');  // Added for the fourth question
    const choices6 = document.querySelectorAll('.choice6');  // Added for the fourth question
    const choices7 = document.querySelectorAll('.choice7');  // Added for the fourth question
    const choices8 = document.querySelectorAll('.choice8');  // Added for the fourth question
    const choices9 = document.querySelectorAll('.choice9');  // Added for the fourth question
    const choices10 = document.querySelectorAll('.choice10');  // Added for the fourth question
    const questionContainer1 = document.querySelector('.quest:nth-child(1) .questions');
    const questionContainer2 = document.querySelector('.quest:nth-child(2) .questions');
    const questionContainer3 = document.querySelector('.quest:nth-child(3) .questions');
    const questionContainer4 = document.querySelector('.quest:nth-child(4) .questions');  // Added for the fourth question
    const questionContainer5 = document.querySelector('.quest:nth-child(5) .questions');  // Added for the fourth question
    const questionContainer6 = document.querySelector('.quest:nth-child(6) .questions');  // Added for the fourth question
    const questionContainer7 = document.querySelector('.quest:nth-child(7) .questions');  // Added for the fourth question
    const questionContainer8 = document.querySelector('.quest:nth-child(8) .questions');  // Added for the fourth question
    const questionContainer9 = document.querySelector('.quest:nth-child(9) .questions');  // Added for the fourth question
    const questionContainer10 = document.querySelector('.quest:nth-child(10) .questions');  // Added for the fourth question
    const vocabApplication1 = document.querySelector('.quest:nth-child(1) .vocab-application');
    const vocabApplication2 = document.querySelector('.quest:nth-child(2) .vocab-application');
    const vocabApplication3 = document.querySelector('.quest:nth-child(3) .vocab-application');
    const vocabApplication4 = document.querySelector('.quest:nth-child(4) .vocab-application');  // Added for the fourth question
    const vocabApplication5 = document.querySelector('.quest:nth-child(5) .vocab-application');  // Added for the fourth question
    const vocabApplication6 = document.querySelector('.quest:nth-child(6) .vocab-application');  // Added for the fourth question
    const vocabApplication7 = document.querySelector('.quest:nth-child(7) .vocab-application');  // Added for the fourth question
    const vocabApplication8 = document.querySelector('.quest:nth-child(8) .vocab-application');  // Added for the fourth question
    const vocabApplication9 = document.querySelector('.quest:nth-child(9) .vocab-application');  // Added for the fourth question
    const vocabApplication10 = document.querySelector('.quest:nth-child(10) .vocab-application');  // Added for the fourth question
    const audio = new Audio('./audio/training-program-correct2-88734.mp3'); // Change the filename accordingly

    // Function to handle a question
    function handleQuestion(choices, questionContainer, vocabApplication, correctAnswer, replacementText, displayVocabApplication) {
        // Add click event listener to each choice
        choices.forEach(function (choice) {
            choice.addEventListener('click', function clickHandler(event) {
                const selectedAnswer = event.target.textContent.trim();

                // Check if the selected answer is correct
                if (selectedAnswer === correctAnswer) {
                    // Play the sound effect
                    audio.play();

                    // Disable choices
                    choices.forEach(function (choice) {
                        choice.disabled = true;
                        choice.style.display = 'none'; // Hide choices
                    });

                    // Replace the question with the correct choice
                    questionContainer.innerHTML = replacementText;

                    // Show the vocab application with a delay
                    setTimeout(function () {
                        if (displayVocabApplication) {
                            vocabApplication.style.opacity = '3';
                            vocabApplication.style.display = 'block';
                        }
                    }, 200); // Adjust the delay time as needed
                }
            });
        });
    }

    // Example usage for question 1
    handleQuestion(choices1, questionContainer1, vocabApplication1, 'a. ID', '1. "Your ID, like a passport or driver\'s license, is crucial for travel as it confirms your identity at check-in, security, and boarding."', true);

    // Example usage for question 2
    handleQuestion(choices2, questionContainer2, vocabApplication2, 'b. boarding-pass', '2. "A boarding pass is a document issued by an airline that allows a passenger to board a flight. It contains important information such as the passenger&#39;s name, flight details, seat assignment, and boarding gate."', true);

    // Example usage for question 3
    handleQuestion(choices3, questionContainer3, vocabApplication3, 'c. luggage', '3. "Luggage refers to the bags, suitcases, or containers that travelers use to carry their personal belongings during a journey."', true);

    // Example usage for question 4
    handleQuestion(choices4, questionContainer4, vocabApplication4, 'a. scale', '4. "Passengers often use airport scales to determine if their bag meets the specified weight limits for check-in and avoid additional fees."', true);

    // Example usage for question 5
    handleQuestion(choices5, questionContainer5, vocabApplication5, 'b. direct flight', '5."A direct flight refers to a journey between two points with a single flight number, during which the aircraft makes one or more stops but passengers do not change planes. Unlike a non-stop flight, a direct flight may have layovers or intermediate stops, but passengers typically stay on the same aircraft."', true);

    // Example usage for question 6
    handleQuestion(choices6, questionContainer6, vocabApplication6, 'd. carry-on', '6."A carry-on refers to a small piece of luggage that passengers are allowed to bring with them into the airplane cabin. It is typically small enough to fit in the overhead compartment or under the seat in front of the passenger."', true);

    // Example usage for question 7
    handleQuestion(choices7, questionContainer7, vocabApplication7, 'c. Transportation Security Administration - TSA', '7."The Transportation Security Administration is a U.S. government agency responsible for ensuring the security of travelers and transportation systems within the United States. The TSA plays a crucial role in screening passengers and their belongings at airports to prevent potential security threats."', true);


    // Example usage for question 8
    handleQuestion(choices8, questionContainer8, vocabApplication8, 'a. airport gate / gate', '8."An airport gate refers to a specific location within an airport terminal where passengers board or disembark from an aircraft. Gates are usually numbered or labeled, and they serve as points of departure or arrival for flights. Passengers typically gather at the gate indicated on their boarding pass before boarding the plane."', true);


    // Example usage for question 10
    handleQuestion(choices9, questionContainer9, vocabApplication9, 'd. layover', '9."A layover refers to a period of time during a journey when a traveler has to wait at an intermediate location before continuing to their final destination. Layovers can vary in duration and are often part of flights with connecting or multiple stops."', true);


     // Example usage for question 10
     handleQuestion(choices10, questionContainer10, vocabApplication10, 'b. tag', '10."In the context of the airport, a "tag" can refer to various labels or identifiers used for different purposes. It may include luggage tags, boarding passes, security tags, or other markers associated with the passenger &#39;s journey or belongings."<span> <img class="playButton"', true);
});

 // Get all play buttons and audio players
 var playButtons = document.querySelectorAll('.playButton');
 var audioPlayers = document.querySelectorAll('.audioPlayer');

 // Add click event listeners to all play buttons
 playButtons.forEach(function(playButton, index) {
     playButton.addEventListener('click', function() {
         // Check if the corresponding audio is currently playing
         if (audioPlayers[index].paused) {
             // If paused, play the audio
             audioPlayers[index].play();
         } else {
             // If playing, pause the audio
             audioPlayers[index].pause();
         }
     });
 });

 


