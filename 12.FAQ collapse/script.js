// const faqs=document.querySelectorAll('.faq');
// faqs.forEach(faq=>{
//     console.log(faq.children[2]);
//     faq.childNodes[2].addEventListener('click',()=>{
//           faq.classList.add('active');
//     })
// })
const btns=document.querySelectorAll('.faq_btn');

btns.forEach(btn=> {
    btn.addEventListener('click',()=>{
        btn.parentNode.classList.toggle('active');
    })
});