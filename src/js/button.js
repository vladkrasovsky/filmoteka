

window.onload = function(){
	//window.scrollTo(x,y)
	var scrolled;
	var timer;

	document.getElementById('top').onclick = function(){
		scrolled = window.pageYOffset;
		window.scrollTo(0,0);
		scrollToTop();
	}
	function scrollToTop(){
		if (scrolled > 0) {
			window.scrollTo(0, scrolled);
			scrolled = scrolled - 50; 
			timer = setTimeout(scrollToTop, 200);
		}
		else {
			clearTimeout(timer);
			window.scrollTo(0,0);
		}
	}
}
export default scrollToTop;


