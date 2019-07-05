// Javascript File
'use strict';

let original = 

// Event Listeners
document.getElementById('submit').addEventListener('click', submitHandler)
document.getElementById('restart').addEventListener('click', restartHandler)

// Functions
function submitHandler() {
    let noun1 = document.getElementById('noun1').value;
    let noun2 = document.getElementById('noun2').value;
    let bodyPart = document.getElementById('bodyPart').value;
    let verb = document.getElementById('verb').value;
    let emotion = document.getElementById('emotion').value;
    let number = document.getElementById('number').value;
    let story = 'Yesterday, I got so <strong>' + emotion + '</strong> when a snowplow hit my <strong>' + noun1 + '</strong> for the <strong>'+ number + '</strong>th time. I told the driver to <strong>' + verb + '</strong> onto his <strong>' + noun2 + '</strong> and he broke his <strong>' + bodyPart + '</strong>.';
    document.getElementById('libTitle').innerHTML = 'Your Mad Lib:';
    document.getElementById('output').innerHTML = story;
}

function restartHandler() {
    document.getElementById('libTitle').innerHTML = '';
    document.getElementById('output').innerHTML = '';
}
