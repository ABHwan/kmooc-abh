const chatHtml = require('../../components/chat.html')

const init = () => {
  const contents = document.querySelector('.contents')
  contents.innerHTML = chatHtml.default
  const chatJs = document.createElement('script')
  chatJs.type = 'text/javascript'
  chatJs.src = './chat.bundle.js'
  contents.append(chatJs)
}

export { init }