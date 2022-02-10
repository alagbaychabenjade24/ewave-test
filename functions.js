const nav = document.querySelector('header nav');
const menu = document.querySelector('.menu');
const lineOne = document.querySelector('.line__one');
const lineTwo = document.querySelector('.line__two');
const lineThree = document.querySelector('.line__three');

menu.addEventListener('click', () => {
	nav.classList.toggle('nav--active');

	lineOne.classList.toggle('line__one--active');
	lineTwo.classList.toggle('line--fade');
	lineThree.classList.toggle('line__two--active');
});

const scrollTop = document.querySelector('.scrollTop');

window.addEventListener('scroll', () => {
	if (window.pageYOffset > 150) {
		scrollTop.classList.add('scrollTop--active');
	} else {
		scrollTop.classList.remove('scrollTop--active');
	}
});
