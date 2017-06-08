//scroll header//
$(window).scroll(function (event) {
  var scrollPos = $(document).scrollTop();

  if (scrollPos === 0) {
    $('.header-compact').addClass('transparent');
  } else {
    $('.header-compact').removeClass('transparent');
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
			strings: ["I have a Deep love building things.", "Pilot, Aviation Enthusiast.", "Avid college football fan."],
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

function show_code (event) {
  event.preventDefault();
  $('.code-cover').css('display', 'none');
}
