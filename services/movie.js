 const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: API_KEY,
    }
  };

  export const getTopRated=async()=>{

  
    const res=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
       .then(response => response.json())
       .catch(err => console.error(err))
       
      return res["results"]
     
   }
   export const getMovie=async(movieId)=>{
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
    .then(response => response.json())
    .catch(err => console.error(err));
   return res
  }
  export const getPopularFilms=async()=>{
    const res=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .catch(err => console.error(err));
    return res["results"]
  }
  export const getCategories=async()=>{
    const res=await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    .then(response => response.json())
    .catch(err => console.error(err));
    return res["genres"]
  }
  export const getSingleGenre=async(genreId)=>{
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`, options)
    .then(response => response.json())
    .catch(err => console.error(err));
   return res["results"]
  }
  
  
