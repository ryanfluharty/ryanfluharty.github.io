let revealButton = document.getElementById('Reveal');
let awayButton = document.getElementById('Away');
let myInfo = document.getElementById('me');

let activate = function() {
    myInfo.style.display = "inline"
    revealButton.style.display = 'none'
};

let disable = function() {
    myInfo.style.display = 'none'
    revealButton.style.display = 'inline'
};

revealButton.onclick = activate;
awayButton.onclick = disable;