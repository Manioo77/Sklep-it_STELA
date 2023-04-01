const advertisementClose = document.querySelector('.advertisement__closeBtn')
const advertisement = document.querySelector('.advertisement')
const containerClose = document.querySelector('.container__profile--close')
const container = document.querySelector('.container')
const profile = document.querySelector('.fa-user')
//cookie
const cookieBox = document.querySelector('.cookie__box')
const cookieBtn = document.querySelector('.cookie__box--btn')

const hideSection = deleteSection => {
	deleteSection.style.display = 'none'
}

const showSection = () => {
	if (container.style.display === 'flex') {
		container.style.display = 'none'
	} else {
		container.style.display = 'flex'
	}
}

const showPopup = () => {
	localStorage.setItem('cookie', 'true')

	cookieBox.classList.add('hideCookie')
}

const checklocalstorage = () => {
	const checkLocal = localStorage.getItem('cookie')

	if (checkLocal) {
		cookieBox.classList.add('hideCookie')
	} else {
		cookieBox.classList.remove('hideCookie')
	}
}

checklocalstorage()

cookieBtn.addEventListener('click', showPopup)

advertisementClose.addEventListener('click', e => {
	const aside = e.target.parentElement
	hideSection(aside)
})

containerClose.addEventListener('click', e => {
	const popupProfile = e.target.closest('.container')
	hideSection(popupProfile)
})

profile.addEventListener('click', showSection)
