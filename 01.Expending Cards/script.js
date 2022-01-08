const panels=document.querySelectorAll(".panel");
panels.forEach(function (panel){
    panel.addEventListener('click',()=>{
        removeActiveClasses(panel);
        panel.classList.toggle('active');
    })
})
function removeActiveClasses(panel){
   if(!panel.classList.contains("active"))
     panels.forEach((panel1) =>{

         panel1.classList.remove('active');
     })
}