const advertisementClose = document.querySelector('.advertisement__closeBtn')
const advertisement = document.querySelector('.advertisement')
const containerClose = document.querySelector('.container__profile--close')

const shopCartClose = document.querySelector('.shopContainer__cart--close')
const shopContainer = document.querySelector('.shopContainer')
const shopContainerCart = document.querySelector('.shopContainer__cart')
const purchase = document.querySelector('.fa-cart-shopping')

const container = document.querySelector('.container')
const profile = document.querySelector('.fa-user')
const searchBtn = document.querySelector('.fa-magnifying-glass')
const search = document.querySelector('.nav__input--search')
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

const showShopCart = () => {
	shopContainer.classList.toggle('shopContainer--show')
	shopContainerCart.classList.toggle('shopContainer__cart--show')
}

const showSearchInput = () => {
	search.classList.toggle('showInputSearch')
}

const showPopup = () => {
	document.cookie = 'cookie=true'
	cookieBox.classList.add('hideCookie')
}

const checkIsCookie = () => {
	if (document.cookie === 'cookie=true') {
		cookieBox.classList.add('hideCookie')
	} else {
		cookieBox.classList.remove('hideCookie')
	}
}

checkIsCookie()

searchBtn.addEventListener('click', showSearchInput)

cookieBtn.addEventListener('click', showPopup)

purchase.addEventListener('click', showShopCart)

shopCartClose.addEventListener('click', () => {
	shopContainer.classList.toggle('shopContainer--show')
	shopContainerCart.classList.toggle('shopContainer__cart--show')
})

containerClose.addEventListener('click', e => {
	const popupProfile = e.target.closest('.container')
	hideSection(popupProfile)
})

profile.addEventListener('click', showSection)

// advertisementClose.addEventListener('click', e => {
// 	const aside = e.target.parentElement
// 	hideSection(aside)
// })
