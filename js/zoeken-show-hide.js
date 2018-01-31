// Toggle displaying search section

var displaySearch = document.querySelector('div.search');
var button = document.querySelector('header ul:nth-of-type(1) li > a');
var open = function() {
    displaySearch.classList.toggle('active');
    window.scrollTo(0, 0);
}

button.addEventListener('click', open);



// Toggle filter options menu

var expandFilter = document.querySelector('form.filter');
var inputField = document.querySelector('form fieldset:nth-of-type(1)');
var searchButton = document.querySelector('form.filter fieldset + input');
var filterButton = document.querySelector('form.filter > a');
var showKeyword = document.querySelector('form.filter fieldset:nth-of-type(1) legend:nth-of-type(2)');
var showGenres = document.querySelector('form.filter fieldset:nth-of-type(2) > legend');
var showCheckboxes = document.querySelector('form.filter > fieldset:nth-of-type(2)');
var showLevel = document.querySelector('form.filter fieldset:nth-of-type(3)');
var openFilterOptions = function() {
    expandFilter.classList.toggle('filterClosed');
    inputField.classList.toggle('inputBefore');
    searchButton.classList.toggle('searchBefore');
    filterButton.classList.toggle('filterBefore');
    showKeyword.classList.toggle('keywordBefore');
    showGenres.classList.toggle('genresBefore');
    showCheckboxes.classList.toggle('checkboxesBefore');
    showLevel.classList.toggle('levelBefore');
}

filterButton.addEventListener('click', openFilterOptions);




// filter micro-interactie

var recommendedSection = document.querySelector('main > div');
var searchResults = document.querySelector('main > section');
var articlesToHide = document.querySelector('main > section > main > article:nth-of-type(1)');
var articlesToHideTwo = document.querySelector('main > section > main > article:nth-of-type(3)');
var articlesToHideThree = document.querySelector('main > section > main > article:nth-of-type(4)');
var articleToShow = document.querySelector('main > section > main > article:nth-of-type(2)');
var searchFilterButton = document.querySelector('form.filter > input');
var titleBefore = document.querySelector('main > section > h1');
var titleAfter = document.querySelector('main > section > h1:nth-of-type(2)');
var filterSearchResults = function() {
    recommendedSection.classList.toggle('medereizigers-animatie');
    searchResults.classList.toggle('zoekresultaten-omhoog');
    articlesToHide.classList.toggle('artikelen-verbergen-animatie');
    articlesToHideTwo.classList.toggle('artikelen-verbergen-animatie');
    articlesToHideThree.classList.toggle('artikelen-verbergen-animatie');
    articleToShow.classList.toggle('artikel-naar-links');
    displaySearch.classList.toggle('active');
    titleBefore.classList.toggle('searchTitleHidden');
    titleAfter.classList.toggle('searchTitleHidden');
}

searchFilterButton.addEventListener('click', filterSearchResults);
