window.addEventListener('DOMContentLoaded', init)
const counter = document.querySelector('#counter');
const button_increment = document.querySelector('#inc');
const button_decrement = document.querySelector('#dec');
const button_like = document.querySelector('#like');
const button_pause = document.querySelector('#pause');
const submit = document.querySelector('#submit')
const input = document.querySelector('input')
const comment = document.querySelector('div#list')
const ul = document.querySelector('ul.likes')
const allButtons = document.querySelectorAll('button')
let i = 0;
let c = 0;
let li
let setInt



function init = ()=>{
createTimer()
button_increment.addEventListener('click', increment)
button_decrement.addEventListener('click', decrement)
button_like.addEventListener('click', like)
button_pause.addEventListener('click', pause)
submit.addEventListener("click", submitComment)
}


createTimer = () =>
{
  setInt = setInterval(function() {
  c=0;
  i++
  counter.innerText = i
  }, 1000)
}

increment = (e)=>
{
  i++
  counter.innerText = i
}

decrement = (e)=>
{
  i--
  counter.innerText = i
}

like = (e)=>
{
  c++
  if (document.getElementById(`${counter.innerText}`) === null)
  {
    li = document.createElement('li')
    li.id = counter.innerText
    li.innerText = `You like ${c} time the number ${counter.innerText}`
    ul.appendChild(li);
  }else
  {
    li.innerText = `You like ${c} times the number ${counter.innerText}`
  }
}

pause = (e)=>
{
  if (button_pause.innerText === 'pause')
  {
    clearInterval(setInt)
    button_pause.innerText = 'play'
    allButtons.forEach((button)=>
    {
      if (button.id != 'pause')
      {
        button.disabled = true
      }
    })
  }
  else
  {
    createTimer()
    button_pause.innerText = 'pause'
    allButtons.forEach((button)=>
    {
      if (button.id !== 'pause')
      {
        button.disabled = false
      }
    })
  }
}

submitComment = (e)=>{
  e.preventDefault()

  let p = document.createElement('p');
  p.innerText = input.value;
  comment.appendChild(p);
  form = document.querySelector('#comment-form')
  form.reset()
}
