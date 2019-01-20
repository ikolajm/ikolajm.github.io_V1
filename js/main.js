let header = document.querySelector('header');
let logo = document.querySelector('#logo');
let title = document.querySelector('#title');
let pageLinks = document.querySelectorAll('.navMain a');
let pLMobile = document.querySelectorAll('.navMobile a');
let bars = document.querySelector('.mobileLinkButton i');

// Scrolltop
$(window).scroll(function() {
    if ($(window).scrollTop() > 5) {
        // Change background to black
        header.style.background = 'black';
        // Change Image to white
        logo.style.filter = 'invert(1)';
        // Change font to white
        title.style.color = "white";
        bars.style.color = 'white';
        for (i=0; i < pageLinks.length; i++) {
            pageLinks[i].style.color = 'white';
        }
    } else {
        // Change background to transparent
        header.style.background = 'white';
        // Change image to black
        logo.style.filter = 'invert(0)';
        // Change font to black
        title.style.color = "black";
        bars.style.color = 'black';
        for (i=0; i < pageLinks.length; i++) {
            pageLinks[i].style.color = 'black';
        }
    }
});

// Hamburger Menu
let navMobileContainer = document.querySelector('.navMobile');
let splash = document.querySelector('#splash');
    navMobileContainer.style.maxHeight = '0px';
let toggleNav = () => {
    if (navMobileContainer.style.maxHeight == '0px') {
        navMobileContainer.style.maxHeight = '206px';
    } else {
        navMobileContainer.style.maxHeight = '0px';
    }
}

// Easy scroll
// Check all local links
$(document).on('click', 'a[href^="#"]', function (event) {
    // Prevent default link behavior
    event.preventDefault();

    // Animate the scroll to the links target (ACCOUNT FOR FIXED HEADER)
    $('html, body').animate({
        scrollTop: ($($.attr(this, 'href')).offset().top - 65)
    }, 500);
});

// Active states