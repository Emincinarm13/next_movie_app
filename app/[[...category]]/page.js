import React from "react";
import Homecontainer from "@/containers/home";
import Movies from "@/mocks/movies.json";
import { getTopRated,getCategories,getPopularFilms,getSingleGenre } from "@/services/movie";

async function Home({ params }) {
  let selectedCategory;

  const topratedpromise= getTopRated();
const popularpromise= getPopularFilms();
const categoriespromise=getCategories();

const[toprated,popular,categories] =await Promise.all([
  topratedpromise,
  popularpromise,
  categoriespromise
])

  if (params.category?.length>0) {
    const results=await getSingleGenre(params.category[0]);
    selectedCategory=results;
    console.log(selectedCategory);
    };
  

  return (
    <Homecontainer
    categories={categories}
    toprated={toprated}
    popular={popular}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(0,7):[],
      }}

      
    />
  );
    }

export default Home;
