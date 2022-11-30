/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/chatScript.js":
/*!**************************************!*\
  !*** ./src/js/modules/chatScript.js ***!
  \**************************************/
/***/ (() => {

eval("let curIndex = 0\r\nlet language = 'ko'\r\n\r\nsetInterval(async () => {\r\n  await $.ajax(`/chat/receive?from=${curIndex}`)\r\n  .done((data) => {\r\n    for (const message of data.messages) {\r\n      $('#messages').append(\r\n        `${message.sender}: ${language == 'ko' ? message.ko : message.en}`\r\n      )\r\n      $('#messages').append('<br />')\r\n    }\r\n    curIndex = data.total\r\n  })\r\n}, 1000)\r\n\r\n$('#sendButton').click(async () => {\r\n  const message = {\r\n    ko: '',\r\n    en: '',\r\n    sender: $('#senderId').val()\r\n  }\r\n\r\n  if (language == 'ko') message.ko = $('#chatInput').val()\r\n  else message.en = $('#chatInput').val()\r\n\r\n  console.log(message)\r\n\r\n  await $.ajax({\r\n    url: '/chat/send',\r\n    method: 'POST',\r\n    data: JSON.stringify(message),\r\n    dataType: 'json',\r\n    contentType: 'application/json'\r\n  }).done(() => {\r\n    console.log('POST done')\r\n    $('#chatInput').val()\r\n  })\r\n})\r\n\r\n$('#selectBox').change(() => {\r\n  language = $('#selectBox').val()\r\n  console.log(language)\r\n  $('#messages').html('')\r\n  curIndex = 0\r\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbW9kdWxlcy9jaGF0U2NyaXB0LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxlQUFlLElBQUksMkNBQTJDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMTN3ZWVrLy4vc3JjL2pzL21vZHVsZXMvY2hhdFNjcmlwdC5qcz9mOTA1Il0sInNvdXJjZXNDb250ZW50IjpbImxldCBjdXJJbmRleCA9IDBcclxubGV0IGxhbmd1YWdlID0gJ2tvJ1xyXG5cclxuc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xyXG4gIGF3YWl0ICQuYWpheChgL2NoYXQvcmVjZWl2ZT9mcm9tPSR7Y3VySW5kZXh9YClcclxuICAuZG9uZSgoZGF0YSkgPT4ge1xyXG4gICAgZm9yIChjb25zdCBtZXNzYWdlIG9mIGRhdGEubWVzc2FnZXMpIHtcclxuICAgICAgJCgnI21lc3NhZ2VzJykuYXBwZW5kKFxyXG4gICAgICAgIGAke21lc3NhZ2Uuc2VuZGVyfTogJHtsYW5ndWFnZSA9PSAna28nID8gbWVzc2FnZS5rbyA6IG1lc3NhZ2UuZW59YFxyXG4gICAgICApXHJcbiAgICAgICQoJyNtZXNzYWdlcycpLmFwcGVuZCgnPGJyIC8+JylcclxuICAgIH1cclxuICAgIGN1ckluZGV4ID0gZGF0YS50b3RhbFxyXG4gIH0pXHJcbn0sIDEwMDApXHJcblxyXG4kKCcjc2VuZEJ1dHRvbicpLmNsaWNrKGFzeW5jICgpID0+IHtcclxuICBjb25zdCBtZXNzYWdlID0ge1xyXG4gICAga286ICcnLFxyXG4gICAgZW46ICcnLFxyXG4gICAgc2VuZGVyOiAkKCcjc2VuZGVySWQnKS52YWwoKVxyXG4gIH1cclxuXHJcbiAgaWYgKGxhbmd1YWdlID09ICdrbycpIG1lc3NhZ2Uua28gPSAkKCcjY2hhdElucHV0JykudmFsKClcclxuICBlbHNlIG1lc3NhZ2UuZW4gPSAkKCcjY2hhdElucHV0JykudmFsKClcclxuXHJcbiAgY29uc29sZS5sb2cobWVzc2FnZSlcclxuXHJcbiAgYXdhaXQgJC5hamF4KHtcclxuICAgIHVybDogJy9jaGF0L3NlbmQnLFxyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSxcclxuICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgfSkuZG9uZSgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnUE9TVCBkb25lJylcclxuICAgICQoJyNjaGF0SW5wdXQnKS52YWwoKVxyXG4gIH0pXHJcbn0pXHJcblxyXG4kKCcjc2VsZWN0Qm94JykuY2hhbmdlKCgpID0+IHtcclxuICBsYW5ndWFnZSA9ICQoJyNzZWxlY3RCb3gnKS52YWwoKVxyXG4gIGNvbnNvbGUubG9nKGxhbmd1YWdlKVxyXG4gICQoJyNtZXNzYWdlcycpLmh0bWwoJycpXHJcbiAgY3VySW5kZXggPSAwXHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/modules/chatScript.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/modules/chatScript.js"]();
/******/ 	
/******/ })()
;