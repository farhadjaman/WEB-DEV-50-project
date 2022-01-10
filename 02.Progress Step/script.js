const progress=document.querySelector("#progress");
const prev=document.querySelector("#prev");
const next=document.querySelector("#next");
const circles=document.querySelectorAll(".circle");

var currentActive=0;

next.addEventListener('click',()=>{
    if(currentActive<circles.length)
    {
        currentActive++;
    }
    update();
})
prev.addEventListener('click',()=>{
    if(currentActive>0)
    {
        currentActive--;
    }
    update();
})
function update(){
    circles.forEach((circle,idx)=>
    {
        // if(currentActive>1)
        // {
        //     circle.classList.remo
        // }
        if(idx<=currentActive)
        {
           circle.classList.add("active");
          progress.style.maxWidth=((currentActive)*33.33)+'%';
          if(currentActive==0)prev.disabled=true;
          else prev.disabled=false;
          if(currentActive==circles.length-1)next.disabled=true;
          else next.disabled=false;
        }
        else
        {
            circle.classList.remove("active");
            progress.style.maxWidth=(currentActive*33.33+'%');
            if(currentActive===0)prev.disabled=true;
            else if(currentActive===circles.length-1)next.disabled=true;
            else next.disabled=false,prev.disabled=false;
        }
    })
    const active=document.querySelectorAll(".active");

}