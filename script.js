"use strict";

// global variables //
const backToTop = document.getElementById('back-to-top');

window.onscroll = function() {scrollFunction()};

//FUNCTIONS//
function checkMediaQuery() {
    if (window.innerWidth > 991) {
        dropdownCheckbox.checked = false;
    }
}

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
}

// Event Listeners //
window.addEventListener('resize', checkMediaQuery);