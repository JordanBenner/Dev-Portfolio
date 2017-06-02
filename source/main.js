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
			strings: ["Love building things.", "Aviation Enthusiast."],
			typeSpeed: 0,
      loop: true,
      showCursor: true,
      cursorChar: "|",
		});
	});

// sidebar//
$('a.nav-trigger').click(function (event) {
  event.preventDefault();
  $('.sidebar').css('right', 0);
});

$('a.nav-close').click(function (event) {
  event.preventDefault();
  $('.sidebar').css('right', '-300px');
});
