
const api_path='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cce185d5b5b1e43134a021d748cdeb86&page=1';
const img_path='https://image.tmdb.org/t/p/w1280/'
const search_path='https://api.themoviedb.org/3/search/movie?api_key=cce185d5b5b1e43134a021d748cdeb86&query=';
const main=document.getElementById('main');
const form=document.getElementById('form');
const search=document.getElementById('search');
getMovies(api_path);

async function getMovies(url)
{
  const res=await axios.get(url);
  let results= res.data.results;
  showMovies(results);
 
}
async function showMovies(results) {
  main.innerHTML = '';
  console.log(results[0]);
  results.forEach(e => {
     const card=document.createElement('div');
     card.classList.add('movie');
    card.innerHTML = `
    <img src="${img_path+e.backdrop_path}" alt="${e.title}">
    <div class="movie-info">
       <h3>${e.title}</h3>
       <span class="${getClass(e.vote_average)}">${e.vote_average}</span>
    </div>

    <div class="overview">
    <h3>Overview</h3>
    ${e.overview}
    </div>`
    main.appendChild(card);
  });
  function getClass(vote){
    if(vote<=5) return 'red';
    else if(vote>5 && vote<8) return 'orange';
    return 'green';
  }
}
form.addEventListener('submit',(e)=>{
   e.preventDefault();
  const searchTerm=search.value;
  if(searchTerm!=undefined && searchTerm!='')
 {
   getMovies(search_path+searchTerm);
   search.value='';
 }
 else{
   console.log("not fun");
   window.location.reload();
 }
})
  