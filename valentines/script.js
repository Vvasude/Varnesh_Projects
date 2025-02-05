let noButtonClickCount = 0;
const maxClicks = 5;

// Array of sad GIF paths - each one will be different
const sadGifs = [
    './images/pikachu.gif',
    './images/charlie_brown.gif',
    './images/snoopy.gif',
    './images/sad.gif',
    './images/patrick.gif'
];

document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('response').textContent = 'Yay! I love you! 💖';
    document.querySelector('.buttons').style.display = 'none';
    document.getElementById('sadGif').style.display = 'none';
});

document.getElementById('noBtn').addEventListener('click', function() {
    noButtonClickCount++;
    
    // Show sad GIF - use modulo to cycle through images
    const gifImg = document.getElementById('sadGif');
    const imageIndex = (noButtonClickCount - 1) % sadGifs.length;
    gifImg.style.display = 'block';
    gifImg.src = sadGifs[imageIndex];
    
    // Make Yes button bigger
    const yesBtn = document.getElementById('yesBtn');
    const currentYesSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentYesSize + 4) + 'px';
    yesBtn.style.padding = (1 + 0.2 * noButtonClickCount) + 'rem ' + 
                          (2 + 0.2 * noButtonClickCount) + 'rem';
    
    // Make No button more transparent
    const noBtn = document.getElementById('noBtn');
    const opacity = Math.max(0, 1 - (noButtonClickCount / maxClicks));
    noBtn.style.opacity = opacity;
    
    // If reached max clicks, hide the No button
    if (noButtonClickCount >= maxClicks) {
        noBtn.style.display = 'none';
    }
});
