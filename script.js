const openModal = document.querySelectorAll('#open-modal')
const images = document.querySelectorAll('#imgs')
const modal = document.querySelector('.modal-img')
const modalImg = document.querySelector('#img-modal')
const btnClose = document.querySelector('#btn-close')
const linkModal = document.querySelectorAll('#link-modal')
const download = document.querySelector('#download')

let srcVal = ''
let hrefVal = ''

for(let i =0; i<images.length;i++) {
  openModal[i].addEventListener('click', () => {

    console.log(hrefVal = linkModal[i].getAttribute('href'))
    download.setAttribute('href', hrefVal);

    console.log(srcVal = images[i].getAttribute('src'))
    modalImg.setAttribute('src', srcVal);

    modal.classList.add('modal-active')
  })
}

btnClose.addEventListener('click', () => {
  modal.classList.remove('modal-active')
} )
