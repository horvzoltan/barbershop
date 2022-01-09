var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 7000); // Change image every 2 seconds
}

$("#workers").click(function () {
    $('html, body').animate({
        scrollTop: $("#barbers").offset().top
    }, 2000);
});

$("#connection").click(function () {
    $('html, body').animate({
        scrollTop: $("#connect").offset().top
    }, 2000);
});