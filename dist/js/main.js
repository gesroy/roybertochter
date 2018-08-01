console.log('hello world')

const headline = document.querySelector('.toggle-headline')
const content = document.querySelector('.toggle-content')

const toggleContent = event => {
  content.classList.toggle('content-folded')
}

headline.addEventListener('click', toggleContent)
