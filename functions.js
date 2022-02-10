const nav = document.querySelector('.nav__mobile');
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

const galleryCarouselItems = document.querySelector(
	'.gallery__carousel__items'
);
const loadCatPictures = document.querySelector('.load__cat__pictures');

loadCatPictures.addEventListener('click', () => {
	fetch('https://api.thecatapi.com/v1/images/search')
		.then(response => response.json())
		.then(data => {
			let catImgEL = document.createElement('img');
			catImgEL.setAttribute('src', `${data[0].url}`);

			galleryCarouselItems.appendChild(catImgEL);
		})
		.catch(error => console.error(error));
});

const galleryCarouselImages = document.querySelectorAll(
	'.gallery__carousel img'
);

console.log(galleryCarouselImages);

// Buttons
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Counter
const size = galleryCarouselImages[0].clientWidth;

let counter = 1;

console.log(size);

galleryCarouselItems.style.transform = 'translateX(' + -size * counter + 'px)';

nextBtn.addEventListener('click', () => {
	galleryCarouselItems.style.transition = 'transform 0.4s linear';
	counter++;
	galleryCarouselItems.style.transform =
		'translateX(' + -size * counter + 'px)';
});

prevBtn.addEventListener('click', () => {
	galleryCarouselItems.style.transition = 'transform 0.4s linear';
	counter--;
	galleryCarouselItems.style.transform =
		'translateX(' + -size * counter + 'px)';
});
