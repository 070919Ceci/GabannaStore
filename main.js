// DOMdocument object model

// Abre e fecha menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// Quando clicar em um item do menu, esconder o menu

const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Mudar o header da pagina quando der scroll */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

// Depoimentos
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: 'swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// scroollReveal: mostrar elementos quando der scroll na página //

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 900,
  reset: true
})

scrollReveal.reveal(
  `
#home .text, #home .image, #sobre .image, #sobre .text, #servicos header, 
#servicos .card, #depoimentos header, #depoimentos , #contato .container, .brand, 
.social
`,
  { interval: 100 }
)

// botão de voltar ao topo

const voltarAoTopoBotao = document.querySelector('.voltar-ao-topo')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    voltarAoTopoBotao.classList.add('show')
  } else {
    voltarAoTopoBotao.classList.remove('show')
  }
})
