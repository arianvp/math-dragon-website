/** NAVBAR FIXATIONN **/
$(function() {
  var navbar = $('.navbar'),
      body = $('body'),
      padding = body.css('padding'),
    offset = navbar.offset().top;


  $(window).scroll(function() {
    if (!navbar.hasClass('navbar-fixed-top') && $(window).scrollTop() > navbar.offset().top) {
      navbar.addClass('navbar-fixed-top');
      body.css('padding-top', 50);
    } else if (navbar.hasClass('navbar-fixed-top') && $(window).scrollTop() < offset) {
      navbar.removeClass('navbar-fixed-top');
      body.css('padding-top', padding);
    }
  });
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
      || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 500);
        return false;
      }
    }
  });

  $('.nav > li > a').click(function(e){
    var parent = $(e.target).parent();

    if(!parent.hasClass('active')) {
      $('.nav > li.active').removeClass('active');
      parent.addClass('active');
    }
  });
  $('.navbar-brand').click(function(e){

    if ($(window).width() <= 768) {
      $('a[href*=#top]').click();
    }
    $('.nav > li.active').removeClass('active');
    $('.nav > li').first().addClass('active');
  });
});

/** SMOOTH SCROLLING NAV **/
$(function() {

});