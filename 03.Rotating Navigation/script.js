const Open=document.querySelector("#open");
const Close=document.querySelector("#close");
const Container=document.querySelector(".container");
Open.addEventListener('click',()=>{
    Container.classList.add("show-nav");
})
Close.addEventListener('click',()=>{
    Container.classList.remove("show-nav");
})