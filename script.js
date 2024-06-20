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

document.addEventListener('DOMContentLoaded', function () {
    var shopLink = document.querySelector('.dropdown > a');
    var dropdownContent = document.querySelector('.dropdown-content');

    // Function to show dropdown
    function showDropdown() {
        dropdownContent.style.display = 'block';
    }

    // Function to hide dropdown
    function hideDropdown() {
        dropdownContent.style.display = 'none';
    }

    // Show dropdown when clicking on "Shop"
    shopLink.addEventListener('click', function (event) {
        event.preventDefault();
        if (dropdownContent.style.display === 'block') {
            hideDropdown();
        } else {
            showDropdown();
        }
    });

    // Hide dropdown when mouse leaves the dropdown area
    dropdownContent.addEventListener('mouseleave', function () {
        hideDropdown();
    });

    // Stop propagation of click event to prevent immediate hiding when clicking within dropdown
    dropdownContent.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    // Hide dropdown when clicking anywhere outside the dropdown
    document.addEventListener('click', function (event) {
        if (!dropdownContent.contains(event.target) && !shopLink.contains(event.target)) {
            hideDropdown();
        }
    });
});



