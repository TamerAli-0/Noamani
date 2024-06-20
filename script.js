// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Downscroll
        header.classList.add('hidden');
    } else {
        // Upscroll
        header.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});


    document.addEventListener("DOMContentLoaded", function() {
        var dropdown = document.querySelector(".dropdown");
        var dropdownContent = dropdown.querySelector(".dropdown-content");

        dropdown.addEventListener("mouseenter", function() {
            dropdownContent.style.display = "block";
            setTimeout(function() {
                dropdownContent.style.opacity = "1";
                dropdownContent.style.transform = "translateX(-50%) translateY(0)";
            }, 10); // Small delay to ensure display change is rendered
        });

        dropdown.addEventListener("mouseleave", function() {
            setTimeout(function() {
                if (!dropdownContent.matches(':hover')) {
                    dropdownContent.style.opacity = "0";
                    dropdownContent.style.transform = "translateX(-50%) translateY(-10px)";
                    setTimeout(function() {
                        dropdownContent.style.display = "none";
                    }, 300); // Match the transition duration
                }
            }, 300); // Slight delay to allow hover over dropdown
        });

        dropdownContent.addEventListener("mouseleave", function() {
            setTimeout(function() {
                if (!dropdown.matches(':hover')) {
                    dropdownContent.style.opacity = "0";
                    dropdownContent.style.transform = "translateX(-50%) translateY(-10px)";
                    setTimeout(function() {
                        dropdownContent.style.display = "none";
                    }, 300); // Match the transition duration
                }
            }, 300); // Slight delay to allow hover over dropdown
        });
    });





