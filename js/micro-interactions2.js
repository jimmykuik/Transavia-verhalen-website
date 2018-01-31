// like knop animatie

var thumb = document.querySelector('section img + img');
var text = document.querySelector('h3');
var likeAnimation = function() {
    thumb.classList.toggle('animation-like');
    text.classList.toggle('animation-scale');
}

thumb.addEventListener('click', likeAnimation);
