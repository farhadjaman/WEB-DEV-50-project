const smallCups=document.querySelectorAll('.cup-small');
const liters=document.querySelector('#liters');
const percentage=document.querySelector('#percentage');
const remained=document.querySelector('#remained');

//updateBigCup();

smallCups.forEach((cup,idx) =>{
     cup.addEventListener('click',()=>highlightCups(idx));
})
function highlightCups(idx){
  if(idx==smallCups.length-1 && smallCups[idx].classList.contains('full') || smallCups[idx].classList.contains('full') && !smallCups[idx+1].classList.contains('full')){
    idx--;
  }
  smallCups.forEach((cup,idx2)=>{
    if(idx2<=idx)
    {
      cup.classList.add('full');
    }
    else
    {
      cup.classList.remove('full');
    }
    updateBigCup();
  })
}
function updateBigCup(){
  const fullCups=document.querySelectorAll(".cup-small.full").length;
  if(!fullCups){
    percentage.style.visibility='hidden';
    percentage.style.height=0;
  }
  else
  {
    percentage.style.visibility='visible';
    percentage.style.height=`${(fullCups/smallCups.length)*330}px`;
    percentage.innerText=`${12.5*fullCups}%`;
  }
  if(fullCups==smallCups.length)
  {
    remained.style.visibility='hidden';
    remained.style.height=0;
  }
  else
  {
    remained.style.visibility='visible';
  }



}