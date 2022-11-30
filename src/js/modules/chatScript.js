let curIndex = 0
let language = 'ko'

setInterval(async () => {
  await $.ajax(`/chat/receive?from=${curIndex}`)
  .done((data) => {
    for (const message of data.messages) {
      $('#messages').append(
        `${message.sender}: ${language == 'ko' ? message.ko : message.en}`
      )
      $('#messages').append('<br />')
    }
    curIndex = data.total
  })
}, 1000)

$('#sendButton').click(async () => {
  const message = {
    ko: '',
    en: '',
    sender: $('#senderId').val()
  }

  if (language == 'ko') message.ko = $('#chatInput').val()
  else message.en = $('#chatInput').val()

  console.log(message)

  await $.ajax({
    url: '/chat/send',
    method: 'POST',
    data: JSON.stringify(message),
    dataType: 'json',
    contentType: 'application/json'
  }).done(() => {
    console.log('POST done')
    $('#chatInput').val()
  })
})

$('#selectBox').change(() => {
  language = $('#selectBox').val()
  console.log(language)
  $('#messages').html('')
  curIndex = 0
})