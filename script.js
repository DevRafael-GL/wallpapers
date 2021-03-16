const openModal = document.querySelectorAll('#open-modal')
const images = document.querySelectorAll('#imgs')
const modal = document.querySelector('.modal-img')
const modalImg = document.querySelector('#img-modal')
const btnClose = document.querySelector('#btn-close')

let srcVal = ''

for(let i =0; i<images.length;i++) {
  openModal[i].addEventListener('click', () => {
    console.log(srcVal = images[i].getAttribute('src'))
    modalImg.setAttribute('src', srcVal);
    modal.classList.add('modal-active')
  })
}

btnClose.addEventListener('click', () => {
  modal.classList.remove('modal-active')
} )
