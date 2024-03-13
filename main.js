let burger = document.querySelector('.helloSpan'),
	sidebar = document.querySelector('.sidebar'),
	cros = document.querySelector('.fa-x')


burger.addEventListener('click', () => {
	sidebar.classList.toggle('active')
	burger.classList.toggle('active')
})
