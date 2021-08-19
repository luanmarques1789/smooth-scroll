/** Script logic
 * 1. Identify the menu click;
 * 2.
 * 3.
 * 4.
 */

const navItems = document.querySelectorAll('nav a[href^="#"]');
console.log(navItems);

navItems.forEach((item) => {
	item.addEventListener('click', scrollToId);
});

/**
 * Scroll to id (identifier) on click
 */
function scrollToId(event) {
	// Disable browser's default behavior
	event.preventDefault();

	console.log(event);
	const element = event.target;
	const dest = getTopByHref(element);

	scrolling(dest);
}

function getTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(`section${id}`).offsetTop;
}

function scrolling(destine) {
	// get element height automatically
	const navHeight = document.querySelector('nav ul').offsetHeight;
	console.log('altura', navHeight);

	// window.scroll({
	// 	top: destine - navHeight,
	// 	behavior: 'smooth',
	// });

	smoothScrollTo(0, destine - navHeight);
}

function smoothScrollTo(endX, endY, duration) {
	const startX = window.scrollX || window.pageXOffset;
	const startY = window.scrollY || window.pageYOffset;
	const distanceX = endX - startX;
	const distanceY = endY - startY;
	const startTime = new Date().getTime();

	duration = typeof duration !== 'undefined' ? duration : 400;

	// Easing function
	const easeInOutQuart = (time, from, distance, duration) => {
		if ((time /= duration / 2) < 1)
			return (distance / 2) * time * time * time * time + from;
		return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
	};

	const timer = setInterval(() => {
		const time = new Date().getTime() - startTime;
		const newX = easeInOutQuart(time, startX, distanceX, duration);
		const newY = easeInOutQuart(time, startY, distanceY, duration);
		if (time >= duration) {
			clearInterval(timer);
		}
		window.scroll(newX, newY);
	}, 1000 / 60); // 60 fps
}
