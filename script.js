function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var hamburgerBars = document.querySelectorAll('.hamburger div');

    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
        hamburgerBars[0].style.transform = 'rotate(0deg)';
        hamburgerBars[1].style.opacity = '1';
        hamburgerBars[2].style.transform = 'rotate(0deg)';
    } else {
        sidebar.style.width = '250px';
        hamburgerBars[0].style.transform = 'rotate(-45deg)';
        hamburgerBars[1].style.opacity = '0';
        hamburgerBars[2].style.transform = 'rotate(45deg)';
    }
}

// Add an event listener for the hamburger menu button
var hamburgerButton = document.querySelector('.hamburger');
hamburgerButton.addEventListener('click', toggleSidebar);


function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        toggleSidebar(); // Close sidebar after clicking a link
    }
}




// Function to update the time and date
function updateTime() {
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Ensure minutes and seconds always have two digits
minutes = (minutes < 10 ? '0' : '') + minutes;
seconds = (seconds < 10 ? '0' : '') + seconds;

// Display the time in the format HH:MM:SS
var timeString = hours + ':' + minutes + ':' + seconds;

// Display the day and date
var dayOfWeek = daysOfWeek[currentTime.getDay()];
var month = monthNames[currentTime.getMonth()];
var day = currentTime.getDate();
var year = currentTime.getFullYear();

// Display the time, day, and date
var dateTimeString =dayOfWeek + ', ' + month + ' ' + day + ', ' + year;

// Update the content of the advertisement container
document.getElementById('advertisement-time').innerText = timeString;
document.getElementById('advertisement-date').innerText = dateTimeString;
}

// Update the time every second
setInterval(updateTime, 1000);

// Run the function once to set the initial time
updateTime();








 // Function to get a random quote
 function getRandomQuote() {
    var quotes = [
        "Let Every Student Overcome, Navigate, and Champion Education. - LESONCE",
        "Believe you can and you're halfway there. -Theodore Roosevelt",
        "The only way to do great work is to love what you do. -Steve Jobs",
        "Your time is limited, don't waste it living someone else's life. -Steve Jobs",
        "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. -Winston Churchill",
        "The only limit to our realization of tomorrow will be our doubts of today. -Franklin D. Roosevelt"
        // Add more quotes as needed
    ];

    // Get a random quote from the array
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Function to update the quote
function updateQuote() {
    // Get the quote
    var randomQuote = getRandomQuote();

    // Extract the quote and author name
    var dashIndex = randomQuote.lastIndexOf('-');
    var quoteText = randomQuote.slice(0, dashIndex).trim();
    var authorName = randomQuote.slice(dashIndex + 1).trim();

    // Update the content of the advertisement container
    document.getElementById('actual-quote').innerText = quoteText;
    document.getElementById('author-name').innerText = ' -' + authorName;
}

// Update the quote every 1 minute
setInterval(updateQuote, 100000);

// Run the function once to set the initial quote
updateQuote();




function openExternalLink(url) {
    window.open(url, '_blank');
}



var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "191634374028921");
      chatbox.setAttribute("attribution", "biz_inbox");



      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v18.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));







/* This is the code for the go to button*/








// JavaScript Function to toggle the visibility of options-container
function toggleOptions() {
    var optionsContainer = document.getElementById("options-container");
    optionsContainer.style.display = (optionsContainer.style.display === "none") ? "block" : "none";
}

// JavaScript Function to scroll to the top of the page slowly
function scrollToTop() {
    // Set the duration for the scroll (in milliseconds)
    var duration = 900; // 5 seconds

    // Calculate the number of steps for smooth scrolling
    var numSteps = duration / 15; // Adjust the divisor to control the smoothness

    // Calculate the distance to scroll per step
    var scrollStep = -window.scrollY / numSteps; // Negative value to scroll up

    // Use setInterval to scroll gradually
    var interval = setInterval(function() {
        // Scroll the window
        window.scrollBy(0, scrollStep);

        // Check if we have reached the top of the page
        if (window.scrollY === 0) {
            // Clear the interval when the top is reached
            clearInterval(interval);
        }
    }, 15); // Adjust the interval duration for smoothness
}




function scrollToElement(elementId, offset) {
    var element = document.getElementById(elementId);
    if (element) {
        // Get the current scroll position
        var currentScroll = window.scrollY;

        // Calculate the target scroll position with the desired offset
        var targetScroll = element.getBoundingClientRect().top + currentScroll - offset;

        // Scroll to the target position with smooth behavior
        window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
        });

    }
}



/* -- This is the end of the goto button*/


/*---This is the code for the facebook chat  ----*/


var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "191634374028921");
      chatbox.setAttribute("attribution", "biz_inbox");



      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v18.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));


/* --- This is the end of the facebook chat ------*/



function toggleAudio(index) {
    var audio = document.querySelectorAll('.audio')[index];

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}