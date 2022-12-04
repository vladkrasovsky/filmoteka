
const button = document.querySelector('#top')

window.addEventListener('scroll', function() {
      button.hidden = (pageYOffset < document.documentElement.clientHeight);
    });

window.onload = function () {
	
	let scrolled;
	let timer;
	
	document.getElementById('top').onclick = function () {
		scrolled = window.pageYOffset;
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});

	}

}



