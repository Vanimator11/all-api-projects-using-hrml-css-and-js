let header = document.querySelector('h1')
let author = document.querySelector('p')
let button = document.querySelector('button')

function generate(){
  fetch('https://dummyjson.com/quotes/random')
.then(res => res.json())
.then(data=>{
  console.log(data.quote)
  header.innerText=`${data.quote}`
  author.innerText=`${data.author}`
})
}
button.addEventListener('click',generate)