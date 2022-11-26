let revealButton = document.getElementById('Reveal');
let awayButton = document.getElementById('Away');
let myInfo = document.getElementById('me');
let showButton = document.getElementById('show');
let hideButton = document.getElementById('hide');
let resume = document.getElementsByClassName('resume');

let activate = function() {
    myInfo.style.visibility = 'visible'
    revealButton.style.visibility = 'hidden'
};

let disable = function() {
    myInfo.style.visibility = 'hidden'
    revealButton.style.visibility = 'visible'
};

let show = function() {
    resume.style.visibility = 'visible'
    showButton.style.visibility = 'hidden'
    hideButton.style.visibility = 'visible'
};

let hide = function() {
    resume.style.visibility = 'hidden'
    showButton.style.visibility = 'visible'
    hideButton.style.visibility = 'hidden'
};

revealButton.addEventListener('click', activate);
awayButton.addEventListener('click', disable);
showButton.addEventListener('click', show);
hideButton.addEventListener('click', hide);