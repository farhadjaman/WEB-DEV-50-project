const sounds=['applause','victory'];
sounds.forEach(element=>{
    console.log(element);
    const btn=document.createElement('button');
    btn.classList.add('btn');
    btn.innerText=element;
    btn.addEventListener('click',(event)=>{
        stopsongs();
        document.querySelector(`#${element}`).play();
    })
    document.querySelector("#buttons").appendChild(btn);
})
function stopsongs()
{
    sounds.forEach(element=>{
        const song=document.querySelector(`#${element}`);
        song.pause();
        song.currentTime=0;
    })
}