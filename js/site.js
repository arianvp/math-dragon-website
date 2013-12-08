/** NAVBAR FIXATIONN **/
$(function() {
  var navbar = $('.navbar'),
      body = $('body'),
      padding = body.css('padding'),
    offset = navbar.offset().top;



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


$(function() {
  var names = ['arian','mark', 'glenn', 'tim', 'ivor', 'bas', 'folkert'];
  names.forEach(function(name){
    $('.about-item.'+name).click(function(e){
      var self = $('.foldout.'+name);
      var hidden = self.hasClass('hidden');
      if (hidden) {
        $('.foldout').addClass('hidden');
        self.removeClass('hidden');
        var height = self.outerHeight();
        self.height(0);
        self.animate({'height': height}, 200);
        $('.lower').animate({'padding-top': height  }, 200);
        $('.arrows .arrow').addClass('hidden');
        $('.arrows .'+name +' .arrow').removeClass('hidden');
      } else {
        $('.lower').animate({'padding-top': 0}, 200);
        $('.foldout').addClass('hidden');
        $('.arrows .'+name +' .arrow').addClass('hidden');
        

        self.addClass('hidden');

      }
    });
  });
});


