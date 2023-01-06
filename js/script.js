$(function(){
	var winH = $(window).innerHeight();
	var scrollTop = $(window).scrollTop();
	var stopValue = 600;

	if(scrollTop >= stopValue) {
		$("#intro .inner").css({ position: 'absolute', top: 720 })   
		$("#intro .overlay").css({transform: 'scale(16)', opacity: 0 }).hide();
		$("#intro .scroll").css({ opacity: 0 });
	}

	$(window).scroll(function(){
		scrollTop = $(window).scrollTop();
        
		var secH = $('#intro').innerHeight();
		var secT = $('#intro').offset().top;
        
		var overlayScale = 1+(scrollTop/60);
		var innerOpacity = 1/500*scrollTop;
		var overlayOpacity = 1-(1/500*scrollTop);

		if(scrollTop<stopValue) {
            $("#intro .inner").css({ position: 'fixed', top: 0, opacity:innerOpacity });
            $("#intro .overlay").css({transform: 'scale('+ overlayScale +')', opacity:overlayOpacity }).show();
            $("#intro .scroll").css({ opacity:overlayOpacity });
		} else if(scrollTop >= stopValue) {
            $("#intro .inner").css({ position: 'absolute', top: 720 })   
            $("#intro .overlay").css({transform: 'scale(16)', opacity: 0 }).hide();
            $("#intro .scroll").css({ opacity: 0 });
		}
	});
});