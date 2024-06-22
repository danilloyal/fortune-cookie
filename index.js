const closed = document.querySelector('#closed');
const opened = document.querySelector('#opened');
const btnReset = document.querySelector('.reset');

const luckyMessage = {
  title:document.querySelector('.card h1'),
  openedTitle: "Here's your today's fortune:",
  paragraph:document.querySelector('.card p'),
  messages: [
    'A new opportunity will soon present itself, embrace it with confidence.',
'Happiness is just around the corner; keep moving forward with an open heart.',
'A surprise encounter will bring unexpected joy and new beginnings.'
  ]
}
const initialMessage = {
  title:document.querySelector('.card h1').textContent,
  paragraph:document.querySelector('.card p').textContent
}
closed.addEventListener('click', () => {
  closed.classList.add('shake')
  clickAwait()
})
btnReset.addEventListener('click', ()=>{
  reset()
  luckyMessage.title.innerText = initialMessage.title
  luckyMessage.paragraph.innerText = initialMessage.paragraph
})
function clickAwait(){
  setTimeout(function(){
    getMessage()
    open()
    },2000)
}
function open(){
  closed.classList.add('hide')
  opened.classList.remove('hide')
  btnReset.classList.remove('hide')
}
function reset(){
  opened.classList.add('hide')
  btnReset.classList.add('hide')
  closed.classList.remove('hide')
  closed.classList.remove('shake')
  luckyMessage.paragraph.classList.remove('message')
}
function getMessage(){
  const randomNumber = Number(Math.round(Math.random() * 2))
  luckyMessage.paragraph.classList.add('message')
  luckyMessage.paragraph.innerText = luckyMessage.messages[randomNumber];
  luckyMessage.title.innerText = luckyMessage.openedTitle;
}