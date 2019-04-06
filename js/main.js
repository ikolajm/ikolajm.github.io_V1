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

// Check on page reload
$(window).on("load", function() {
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

// Active states (doesn't work with amount of info - too little)
// $(window).scroll(function() {
//     var scrollDistance = $(window).scrollTop();
//     $('section').each(function(i) {
//         if ($(this).position().top - 65 <= scrollDistance) {
//             console.log($(this));
//             $('nav a.active').removeClass('active');
//             $('nav a').eq(i).addClass('active');
//         }
//     });
// }).scroll();

// Image modals

    // Image 1
    // Get the modal
    var modal = document.querySelector('#modal1');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById('baseimg1');
    var modalImg = document.getElementById("img1");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    // Get the <span> element that closes the modal
    var span = document.querySelector(".close1");

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }

    // Image 2
    // Get the modal
    var modal = document.querySelector('#modal2');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById('baseimg2');
    var modalImg = document.getElementById("img2");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    // Get the <span> element that closes the modal
    var span = document.querySelector(".close2");

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }
    // Image 3
    // Get the modal
    var modal = document.querySelector('#modal3');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById('baseimg3');
    var modalImg = document.getElementById("img3");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    // Get the <span> element that closes the modal
    var span = document.querySelector(".close3");

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }
    // Image 4
    // Get the modal
    var modal = document.querySelector('#modal4');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById('baseimg4');
    var modalImg = document.getElementById("img4");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    // Get the <span> element that closes the modal
    var span = document.querySelector(".close4");

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }
    // Image 5
    // Get the modal
    var modal = document.querySelector('#modal5');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById('baseimg5');
    var modalImg = document.getElementById("img5");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }

    // Get the <span> element that closes the modal
    var span = document.querySelector(".close5");

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() { 
        modal.style.display = "none";
    }