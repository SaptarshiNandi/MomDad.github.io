$('section').fireworks({ 
  sound: true, // sound effect
  opacity: 0.9, 
  width: '100%', 
  height: '100%' 
});


const nav = document.querySelector('.link')

const time = 5000;
let counter = 0;

setInterval(() => {
  if (counter < 1) {
    // console.log("Start")
    nav.style.visibility = 'visible';
    nav.style.transition = '.3s'
    counter++;
  }
}, time);


const instructions = document.querySelector('.instruction');
const btn = document.querySelector('.navigate');

btn.addEventListener('click', ()=>{
  instructions.classList.toggle('instruction-change');
})

Barba.Pjax.start();
