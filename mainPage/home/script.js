let currentIndex = 0;

function moveCarousel(direction) {
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;

    // Calculate the next index based on the direction
    currentIndex = (currentIndex + direction + totalImages) % totalImages;

    // Move the carousel images to show one image at a time
    const offset = -currentIndex * 100; // One image at a time
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}
