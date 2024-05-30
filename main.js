import './style.scss'
import Splide from '@splidejs/splide';
import '@splidejs/splide/css'

const splide = new Splide( '.splide' );
splide.mount();

const dialog = document.getElementById('gallery');
const imgButtonOne = document.getElementById('gallery-button-1');
const imgButtonTwo = document.getElementById('gallery-button-2');
const imgButtonThree = document.getElementById('gallery-button-3');
const imgButtonFour = document.getElementById('gallery-button-4');
const imgButtonFive = document.getElementById('gallery-button-5');
const closeButton = document.getElementById('close');

imgButtonOne.addEventListener('click', () => {
  dialog.showModal();
  splide.go(0);
})

imgButtonTwo.addEventListener('click', () => {
  dialog.showModal();
  splide.go(1);
})

imgButtonThree.addEventListener('click', () => {
  dialog.showModal();
  splide.go(2);
})

imgButtonFour.addEventListener('click', () => {
  dialog.showModal();
  splide.go(3);
})

imgButtonFive.addEventListener('click', () => {
  dialog.showModal();
  splide.go(4);
})

closeButton.addEventListener('click', () => {
  dialog.close();
})

const videoDialog = document.getElementById('video-modal');
const videoOpen = document.getElementById('video-modal-button');
const videoClose = document.getElementById('video-close');

const stopVideo = () => {
  
}

videoOpen.addEventListener('click', () => {
  videoDialog.showModal();
})

videoClose.addEventListener('click', () => {
  videoDialog.close();
})