//scroll header//
$(window).scroll(function (event) {
  var scrollPos = $(document).scrollTop();

  if (scrollPos === 0) {
    $('.header-compact').addClass('transparent');
  } else {
    $('.header-compact').removeClass('transparent');
  }


  var h = $(window).height();
  var offset1 = $('iframe.frame1').offset();
  if (scrollPos > offset1.top + 400 || scrollPos < offset1.top - h) {
    $('.code-cover.cover1 > div').css('display', 'flex');
  }

  var offset2 = $('iframe.frame2').offset();
  if (scrollPos > offset2.top + 400 || scrollPos < offset2.top - h) {
    $('.code-cover.cover2 > div').css('display', 'flex');
  }
});
// header about me text//
// document.addEventListener("DOMContentLoaded", function(){
// 		Typed.new(".element", {
// 			strings: ["First sentence.", "Second sentence."],
// 			typeSpeed: 0
// 		});
// 	});

  $(function(){
		$(".intro-entry").typed({
			strings: [" I am dynamic and able to wear many hats.", "I have a Deep love building things.", "Pilot, Aviation Enthusiast.", "Avid college football fan."],
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

var frmvalidator  = new Validator("contactform");
frmvalidator.addValidation("name","req","Please provide your name");
frmvalidator.addValidation("email","req","Please provide your email");
frmvalidator.addValidation("email","email",
  "Please enter a valid email address");

//

  var requestAnimationFrame = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      window.oRequestAnimationFrame;

      function onScroll() {
    requestAnimationFrame(parallax);
}

function parallax(){
    var prlx_effect_1= +(window.pageYOffset *.7).toFixed(2); // .55 is a good speed but slow
    var prlx_str_1 = "translate3d(0, "+prlx_effect_1+"px, 0)";
    jQ('.prlx-1').css({
        "transform":prlx_str_1,
        "-ms-transform":prlx_str_1,
        "-webkit-transform":prlx_str_1
    });

    var prlx_effect_2= +(window.pageYOffset * 1 ).toFixed(2); // .33 is a good speed but slow
   var prlx_str_2 = "translate3d(0, "+prlx_effect_2+"px, 0)";
   jQ('.prlx-2').css({
       "transform":prlx_str_2,
       "-ms-transform":prlx_str_2,
       "-webkit-transform":prlx_str_2
   });

   requestAnimationFrame(parallax);

  }
