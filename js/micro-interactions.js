// Aanmelden voor 'Mijn Transavia' op de Login pagina animatie

var leftWindow = document.querySelector('form:nth-of-type(1)');
var rightWindow = document.querySelector('main > section')
var signUpWindow = document.querySelector('form:nth-of-type(2)')
var button = document.querySelector('section > input');
var toggleAnimation = function() {
    leftWindow.classList.toggle('animation-left');
    rightWindow.classList.toggle('animation-right');
    signUpWindow.classList.toggle('hidden');
    signUpWindow.classList.toggle('animation-show');
}

button.addEventListener('click', toggleAnimation);


// like knop animatie

var thumb = document.querySelector('section img + img');
var likeButton = document.querySelector('section > div > div:nth-of-type(1) > img:nth-of-type(1)');
var likeAnimation = function() {
    thumb.classList.toggle('animation-like');
}

likeButton.addEventListener('click', likeAnimation);
