let revealButton = document.getElementById('Reveal');
let awayButton = document.getElementById('Away');
let myInfo = document.getElementById('me');
let showButton = document.getElementById('show');
let hideButton = document.getElementById('hide');
let resume = document.getElementsByClassName('resume');

let activate = function() {
    myInfo.style.display = "inline"
    revealButton.style.display = 'none'
};

let disable = function() {
    myInfo.style.display = 'none'
    revealButton.style.display = 'inline'
};

let show = function() {
    resume.style.display = 'inline'
    showButton.style.display = 'none'
    hideButton.style.display = 'inline'
};

let hide = function() {
    resume.style.display = 'none'
    showButton.style.display = 'inline'
    hideButton.style.display = 'none'
};

revealButton.onclick = activate;
awayButton.onclick = disable;
showButton.onclick = show;
hideButton.onclick = hide;