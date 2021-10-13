( btn => {

	if(btn) {

		btn.addEventListener('click', () => document.body.classList.toggle('menu-show'));

		Array.from(document.querySelectorAll('.menu__link'), link =>
			link.addEventListener('click', () =>
				document.body.classList.remove('menu-show')));

	}

})(document.querySelector('.btn-menu-toggle'));


// page up

( btn => {

	if(btn) {

		btn.addEventListener('click', () => document.body.scrollIntoView({behavior: "smooth"}));

	}

})(document.querySelector('.footer__up'));