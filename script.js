"use strict";

// global variables //
const backToTop = document.getElementById('back-to-top');

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
}

window.onscroll = function() {scrollFunction()};