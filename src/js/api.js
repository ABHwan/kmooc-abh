const openApi = require('./modules/openApi')
const nodeApi = require('./modules/nodeApi')
const chatApi = require('./modules/chatApi')

const navList = [
	{
		text: 'Open Api',
		event: () => openApi.init()
	},
	{
		text: '도서관리',
		event: () => nodeApi.init()
	},
	{
		text: '동시통역',
		event: () => chatApi.init()
	}
]


init()

function init() {
	createNav()
	openApi.init()
}

function createNav() {
	const ul = document.querySelector('.nav-ul')
	navList.forEach(nav => {
		const li = document.createElement('li')
		li.innerText = nav.text
		li.addEventListener('click', () => nav.event())

		ul.appendChild(li)
	})
}