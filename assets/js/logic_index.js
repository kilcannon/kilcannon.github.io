$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active')
    })

    //creates a reset function for the bird gif
    var resetAnimation = function resetAnimation() {
      var raven = document.getElementById("raven");
      raven.src = raven.src;
    };

    // click listener for the bird gif
    var reset = document.getElementById("raven");
    reset.addEventListener("click", resetAnimation);

});