$(document).ready(function(){
  //Alterar la posicion del fondo de pantalla
  var mouseX, mouseY;
  var ww = $( window ).width();
  var wh = $( window ).height();
  var traX, traY;
  $(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = ((4 * mouseX) / 570) + 40;
    traY = ((4 * mouseY) / 570) + 50;
    $(".title").css({"background-position": traX + "%" + traY + "%"});
  });


  //Interect the links and scroll smothly
  $("a").click(function (e) {
     e.preventDefault()
     scrollTodiv($(this).attr('href'))
  })

  function  scrollTodiv(item) {
    $("html, body").animate({ 
        scrollTop: $(item).offset().top 
      }, 1000);
    window.location.hash = item
  }
  

  var waypoint = new Waypoint({
    element: $('#bio'),
    handler: function() {
      console.log("dsfgsdfg")
      $('#bio').addClass("fadeIn animated")
    },
  offset: 300
  })

});

/**
 * Author: Heather Corey
 * jQuery Simple Parallax Plugin
 *
 */
 
(function($) {
 
    $.fn.parallax = function(options) {
 
        var windowHeight = $(window).height();
        // Establish default settings
        var settings = $.extend({
            speed        : 0.15
        }, options);
        // Iterate over each object in collection
        return this.each( function() {
          // Save a reference to the element
          var $this = $(this);
          // Set up Scroll Handler
          $(document).scroll(function(){
 
                var scrollTop = $(window).scrollTop();
                      var offset = $this.offset().top;
                      var height = $this.outerHeight();
 
        // Check if above or below viewport
      if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
        return;
      }
 
      var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
 
                 // Apply the Y Background Position to Set the Parallax Effect
          $this.css('background-position', 'center ' + yBgPosition + 'px');
                
          });
        });
    }
}(jQuery));

$('.bg-1,.bg-3').parallax({
  speed : 0.15
});

$('.bg-2').parallax({
  speed : 0.25
});