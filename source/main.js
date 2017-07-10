//scroll header//
$(window).scroll(function (event) {
  var scrollPos = $(document).scrollTop();

  if (scrollPos === 0) {
    $('.header-compact').addClass('transparent');
  } else {
    $('.header-compact').removeClass('transparent');
  }
});
  // type cursor
  $(function(){
		$(".intro-entry").typed({
			strings: ["When I am not coding I love to build computers and benchmark computer hardware",
      "An avid Star Citizen player", "Pilot, Aviation Enthusiast.", "College football fan."],
			typeSpeed: 0,
      loop: true,
      showCursor: true,
      cursorChar: "|",
		});
	});

function close_sidebar () {
  $('.sidebar').css('right', '-300px');
  setTimeout(function () {
    $('.sidebar-outer').css('display', 'none');
    $('body').css('overflow', 'auto');
  }, 500);
}

// sidebar//
$('a.nav-trigger').click(function (event) {
  event.preventDefault();
  $('body').css('overflow', 'hidden');
  $('.sidebar-outer').css('display', 'block');
  setTimeout(function () {
    $('.sidebar').css('right', 0);
  });
});

$('a.nav-close').click(function (event) {
  event.preventDefault();
  close_sidebar();
});
// experience selector
function show_slide (event, slide) {
  event.preventDefault();
  $('.slides .slide').css('display', 'none');
  var p = $('.slide-nav ' + slide).position();
  console.log(p);
  $('.slide-nav .moving').css('left', p.left + 'px');
  setTimeout(function () {
    $('.slides '+ slide).css('display', 'block');
  });
}

function show_code (event, cover) {
  event.preventDefault();
  $('.code-cover.' + cover + '> div').css('display', 'none');
}

//email form//

// var frmvalidator  = new Validator("contactform");
// frmvalidator.addValidation("name","req","Please provide your name");
// frmvalidator.addValidation("email","req","Please provide your email");
// frmvalidator.addValidation("email","email",
//   "Please enter a valid email address");
