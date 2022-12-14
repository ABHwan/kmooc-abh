let menu = {}
let menuTitle = []

const init = async () => {
	await $.ajax({
		url:'http://smart.handong.edu/api/service/menu',
		type:'GET',
		dataType: 'json',
		success: function(data){
			menu = data
			menuTitle = Object.keys(data)
			getMenu(menuTitle[0])
		}// end
	});// end ajax
}

function getMenu(key) {
	const item = menu[key]
	const contents = document.querySelector('.contents')

	const card = document.createElement('div')
	const cardTitle = document.createElement('div')
	const cardContent = document.createElement('div')

	card.classList.add('card')

	cardTitle.classList.add('card-title')
	cardTitle.innerText = key

	createTitleButton(cardTitle)

	cardContent.classList.add('card-content')

	const table = document.createElement('table')
	const thead = document.createElement('thead')
	const tbody = document.createElement('tbody')

	createTh(thead, '메뉴')
	createTh(thead, '칼로리')
	createTh(thead, '가격')

	menu[key].forEach(item => {
		const tr = document.createElement('tr')
		createTd(tr, item.menu_kor ? item.menu_kor : '-')
		createTd(tr, item.kcal ? item.kcal : '-')
		createTd(tr, item.price ? `${item.price}원` : '0원')
		tbody.appendChild(tr)
	})
	table.appendChild(thead)
	table.appendChild(tbody)

	cardContent.appendChild(table)

	card.appendChild(cardTitle)
	card.appendChild(cardContent)

	contents.innerHTML = ''
	contents.appendChild(card)
}

function createTh(thead, text) {
	const th = document.createElement('th')
	th.innerText = text
	thead.appendChild(th)
}

function createTd(tr, text) {
	const td = document.createElement('td')
	td.innerText = text
	tr.appendChild(td)
}

function createTitleButton(cardTitle) {
	menuTitle.forEach(title => {
		const button = document.createElement('button')
		button.innerText = title
		button.addEventListener('click', () => {
			getMenu(title)
		})

		cardTitle.appendChild(button)
	})
}

export { init };