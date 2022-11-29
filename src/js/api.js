let menu = {}
let menuTitle = []
const navList = [
	{
		text: 'Open Api',
		event: () => openApi()
	},
	{
		text: 'Node',
		event: () => node()
	}
]

init()

function init() {
	createNav()
	openApi()
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

async function openApi() {
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




// node api 작성 12주차
let title = $('#title')
let author = $('#author')
let save = $('#save')
let list = $('#list')

function node() {
	// alert('준비 중')
	const contents = document.querySelector('.contents')

	const card = document.createElement('div')
	const cardTitle = document.createElement('div')
	const cardContent = document.createElement('div')
	
	card.classList.add('card')

	cardTitle.classList.add('card-title')
	cardTitle.innerText = '도서관리'

	const titleWrap = document.createElement('div')
	const authorWrap = document.createElement('div')
	titleWrap.innerText = '제목: '
	authorWrap.innerText = '저자: '

	const titleInput = document.createElement('input')
	const authorInput = document.createElement('input')
	const saveButton = document.createElement('button')
	const ol = document.createElement('ol')

	saveButton.id = 'save'
	saveButton.innerText = '저장'
	titleInput.id = 'title'
	authorInput.id = 'author'
	ol.id = 'list'

	this.title = titleInput
	this.author = authorInput
	this.save = saveButton
	this.list = ol

	titleWrap.appendChild(titleInput)
	authorWrap.appendChild(authorInput)
	cardContent.appendChild(titleWrap)
	cardContent.appendChild(authorWrap)
	cardContent.appendChild(saveButton)
	cardContent.appendChild(ol)

	card.appendChild(cardTitle)
	card.appendChild(cardContent)

	contents.innerHTML = ''
	contents.appendChild(card)

	saveButton.click(createBook)
	getBooks()
}




function getBooks() {
  $.getJSON('/books')
  .done((books) => {
    list.empty()
    for (const book of books) {
      const li = $('<li />')
      li.data('book', book)
      li.text(`${book.title}(${book.author})`)
      li.click((e) => {
        const book = $(e.target).data('book')
        deleteBook(book.id)
      })

      list.append(li)
    }
  })
}

function createBook() {
  $.ajax('/books', {
    type: 'POST',
    data: JSON.stringify({
      title: title.val(),
      author: author.val()
    }),
    contentType: 'application/json; charset=utf-8'
  })
  .done(() => {
    getBooks()
    title.val(null)
    author.val(null)
  })
}

function deleteBook(id) {
  $.ajax(`/books/${id}`, {
    type: 'DELETE'
  })
  .done(getBooks)
}

