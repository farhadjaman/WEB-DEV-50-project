const boxes=document.querySelectorAll(".box");
window.addEventListener('scroll',checkboxes)
checkboxes();
function checkboxes(){
    const trigger_bottom=window.innerHeight;//cause our screen height can have maximum 3 boxes in it
    boxes.forEach(box=>{
        const boxTop=box.getBoundingClientRect().top;
        const boxBottom=box.getBoundingClientRect().bottom;
        if(boxTop<650)
        {
           box.classList.add('show') ;
           if(boxBottom<30)
           {
               box.classList.remove('show');
           }
           else
           {
               box.classList.add('show') ;
           }
        }
        else
        {
            box.classList.remove('show');
            
        }
      
    })
}