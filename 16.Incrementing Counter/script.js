const counters=document.querySelectorAll('.counter');
counters.forEach(counter=>{
  counter.innerText='0';
  const updateCounter=()=>{
    const target=+counter.getAttribute('data-target')
    const init=+counter.innerText;
    const increment=target/200;
    if(init<target)
    {
      counter.innerText=`${Math.ceil(init+increment)}`;
      setTimeout(updateCounter,1);
    }

 }
 updateCounter();
})