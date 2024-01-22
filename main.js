const open = document.querySelector('.open');
const close = document.querySelector('.close');
const containerLinks = document.querySelector('.container-links');

open.addEventListener('click', () => {
	close.style.display = 'block';
	open.style.display = 'none';
  containerLinks.classList.add('active');
});


close.addEventListener('click', () => {
	close.style.display = 'none';
	open.style.display = 'block';
  containerLinks.classList.remove('active');
});
