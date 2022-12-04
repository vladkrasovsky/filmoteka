

const button = document.querySelector('#top')
console.log(button)

window.onload = function () {
	//window.scrollTo(x,y)
	var scrolled;
	var timer;
	
	document.getElementById('top').onclick = function () {
		scrolled = window.pageYOffset;
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
		function scrollToTop() {
			if (scrolled > 0) {
				window.scrollTo(0, scrolled);
				scrolled = scrolled - 50;
				timer = setTimeout(scrollToTop, 200);
				button.classList.remove('.visually-hidden')
			}
			else {
				clearTimeout(timer);
				window.scrollTo(0, 0);
				return false;
			}
		}
	}

}