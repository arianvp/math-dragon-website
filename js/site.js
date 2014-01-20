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
	$('.navbar-collapse').removeClass('in').addClass('collapse');
  });
  $('.navbar-brand').click(function(e){
      $('a[href*=#top]').click();
    $('.nav > li.active').removeClass('active');
    $('.nav > li').first().addClass('active');
  });
});


$(function() {
  if ($(window).width() > 990) {
    var once = false;
    var names = ['arian','mark', 'glenn', 'tim', 'ivor', 'bas', 'folkert'];
    names.forEach(function(name){
	  var aboutSelf = $('.about-item.'+name);
      aboutSelf.click(function(e){
        var self = $('.foldout.'+name);
        var hidden = self.hasClass('hidden');
        if (hidden) {
		      $('.about-icon').css('border-color', 'black')
		      aboutSelf.children().filter('.about-icon').css('border-color', '#44F')
		      $('.about-item').removeClass('bla');
		      aboutSelf.addClass('bla');
          $('.foldout').addClass('hidden');
          self.removeClass('hidden');
          var height = self.outerHeight();
          if (!once) { self.height(0); once = true;}
          self.animate({'height': height}, 200);
          $('.lower').animate({'padding-top': height  }, 200);
          var lower = $('.lower');
          $('.lower > :not(.'+name+')').css('padding-top', 30);
          $('.lower > .'+name).css('padding-top', 0);
          $('.arrows .arrow').addClass('hidden');
          $('.arrows .'+name +' .arrow').removeClass('hidden');
        } else {
          $('.lower').css('padding-top', 0);
          $('.lower > *').css('padding-top', 0);
          $('.foldout').addClass('hidden');
          $('.arrows .'+name +' .arrow').addClass('hidden');
          self.addClass('hidden');
          once = false;
		      aboutSelf.removeClass('bla');
		      $('.about-icon').css('border-color', 'black')
        }
      });
    });
  }
  $('.nav > li:not(.dropdown) > a, .navbar-brand').click(function(){
    $('.nav > li.dropdown').removeClass('open');
  });
});
