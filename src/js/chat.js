
const request = require('request')
const express = require('express')
const router = express.Router()

// nodejs 동시통역 채팅 프로그램 시작
const messages = []

router.post('/send', (req, res) => {
  const message = {
    sender: req.body.sender,
    ko: req.body.ko,
    en: req.body.en
  }
  console.log(message)

  const options = {
    url: 'https://openapi.naver.com/v1/papago/n2mt',
    form: {
      source: message.ko.length == 0 ? "en" : "ko",
      target: message.ko.length == 0 ? "ko" : "en",
      text: message.ko.length == 0 ? message.en : message.ko
    },
    headers: {
      "X-Naver-Client-Id": "AWYaG6ui7CdTg4mxrumL",
      "X-Naver-Client-Secret": "elzj5CThva",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    }
  }

  request.post(options, (error, response) => {
    console.log(response.body)
    const result = JSON.parse(response.body).message.result
    message.ko = message.ko.length == 0 ? result.translatedText : message.ko
    message.en = message.en.length == 0 ? result.translatedText : message.en
    console.log(message)
    messages.push(message)
    res.status(200).send({ message: "Success"})
  })
})

router.get('/receive', (req, res) => {
  const result = { 
    total: messages.length, 
    messages: []
  }
  if (messages.length > req.query.from) {
    result.messages = messages.slice(req.query.from)
  }
  res.status(200).send(result)
})
// nodejs 동시통역 채팅 프로그램 종료

module.exports = router