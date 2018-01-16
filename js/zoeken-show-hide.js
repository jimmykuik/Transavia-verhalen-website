// Toggle displaying search section

var displaySearch = document.querySelector('section.search');
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
var showKeyword = document.querySelector('form.filter fieldset:nth-of-type(1) legend');
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
