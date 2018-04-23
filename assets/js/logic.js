$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active')
    })

  // creates ninja that will randomly move around screen on click
  function gifNinjaAppear() {
    var gifNinja = $('<img>')
    gifNinja.attr('src', "assets/images/ninja_idle1.gif")
    gifNinja.addClass("movement")
    gifNinja.width(100).height(100)

    gifNinja.css({
      left: Math.floor(Math.random() * (800)),
      top: Math.floor(Math.random() * (700))
    })

    gifNinja.fadeIn(1000)
    $('.page-content').append(gifNinja)
    $('.movement').on('click', function() {
      $('.movement').fadeOut(1000)

      setTimeout(function() {
        gifNinjaAppear() }, 2000)
    })
  }

  setTimeout(function() {
    gifNinjaAppear() }, 2000)

    //creates a reset function for the bird gif
    var resetAnimation = function resetAnimation() {
      var raven = document.getElementById("raven");
      raven.src = raven.src;
    };

    // click listener for the bird gif
    var reset = document.getElementById("raven");
    reset.addEventListener("click", resetAnimation);

});