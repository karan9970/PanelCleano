window.onload = function() {
    setTimeout(function() {
        document.getElementById("whatsapp-popup").style.display = "block";
    }, 3000); // Show popup after 3 seconds
};

function showWhatsApp() {
    document.getElementById("whatsapp-icon").style.display = "block";
    document.getElementById("whatsapp-popup").style.display = "none";
}

function hidePopup() {
    document.getElementById("whatsapp-popup").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".carousel img");
    let currentIndex = 0;

    function nextSlide() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    setInterval(nextSlide, 3000); // Changes every 3 seconds
});
