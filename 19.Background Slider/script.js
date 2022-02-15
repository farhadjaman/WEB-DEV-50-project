const body=document.body;
const slides=document.querySelectorAll('.slide');
const leftBtn=document.getElementById('left');
const rightBtn=document.getElementById('right');

let activeslide=0;
setBgToBody();
function setBgToBody(){
  body.style.backgroundImage=slides[activeslide].style.backgroundImage;
}
function setActiveSlide(){
  slides.forEach(slide=>slide.classList.remove('active'))
  slides[activeslide].classList.add('active');
}
rightBtn.addEventListener('click',()=>{
  activeslide=(activeslide+1)%slides.length;
  setBgToBody();
  setActiveSlide();
})
leftBtn.addEventListener('click',()=>{
  if(activeslide===0)activeslide=slides.length-1;
  else activeslide--;
  setBgToBody();
  setActiveSlide();
})
