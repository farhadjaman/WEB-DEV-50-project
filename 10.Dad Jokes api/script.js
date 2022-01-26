async function generateJoke(){
    const config={
        headers:{
            'Accept':'application/json'
        },
    }
   const response=await fetch(' https://icanhazdadjoke.com/',config);
   const data=await response.json();
   joke.innerHTML=data.joke;


}
const joke=document.querySelector(".joke");
const jokeBtn=document.querySelector('.joke-btn');
generateJoke();
jokeBtn.addEventListener('click',generateJoke);