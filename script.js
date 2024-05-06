$(document).ready(function() {
  var currentIndex = 0;
  var itemWidth = $('.slide').outerWidth();
  var totalSlides = $('.slide').length;
  var slideInterval = 9000; // Set the interval between slides in milliseconds (e.g., 3000 ms = 3 seconds)
  var slideTimer;

  function updateSlider() {
    var newPosition = -currentIndex * itemWidth;
    $('.slider').css('transform', 'translateX(' + newPosition + 'px)');
  }

  function nextSlide() {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  }

  function startAutoSlider() {
    slideTimer = setInterval(function() {
      nextSlide();
    }, slideInterval);
  }

  function stopAutoSlider() {
    clearInterval(slideTimer);
  }

  $('#next').on('click', function() {
    nextSlide();
    stopAutoSlider();
    setTimeout(startAutoSlider, 9000); // Resume automatic slider after 5 seconds (adjust as needed)
  });

  $('#prev').on('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalSlides - 1;
    }
    updateSlider();
    stopAutoSlider();
    setTimeout(startAutoSlider, 9000); // Resume automatic slider after 5 seconds (adjust as needed)
  });

  // Start automatic slider when the document is ready
  startAutoSlider();
});
