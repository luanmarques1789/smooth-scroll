const bar = document.createElement('div');

// bar style
bar.style.height = '0.4rem';
bar.style.width = '0';
bar.style.backgroundColor = '#2e93ee';
bar.style.transitionDuration = '0.17s';
bar.style.position = 'fixed';
bar.style.zIndex = 1;

// Add bar before body tag
document.body.insertAdjacentElement('afterbegin', bar);

// Capturing scroll movement
document.addEventListener('scroll', updateBar2);

function updateBar() {
	const main = document.querySelector('main').scrollTop;
	const footer = document.querySelector('footer').scrollTop;
	const content = main - footer;
	const currentPosition = window.pageYOffset;

	console.log('current', currentPosition);
	console.log('main', content);
	const calc = (currentPosition * 100) / content;
	console.log(calc);
	bar.style.width = `${calc}%`;
}

function updateBar2() {
	let docElem = document.documentElement,
		docBody = document.body,
		scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
		scrollBottom =
			(docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
		scrollPercent = (scrollTop / scrollBottom) * 100 + '%';

	bar.style.width = scrollPercent;
}
