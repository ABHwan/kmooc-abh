// node api 작성 12주차
const init = () => {
	const contents = document.querySelector('.contents')

	const card = document.createElement('div')
	const cardTitle = document.createElement('div')
	const cardContent = document.createElement('div')
	
	card.classList.add('card')
	cardTitle.classList.add('card-title')
	cardContent.classList.add('card-content')

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
	saveButton.addEventListener('click', createBook)

	titleInput.id = 'title'
	authorInput.id = 'author'
	ol.id = 'list'

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
	
	getBooks()
}

function getBooks() {
	const list = $('#list')
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
	const title = $('#title')
	const author = $('#author')
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

export { init }