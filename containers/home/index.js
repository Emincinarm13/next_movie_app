
import React from 'react';

import { FeaturedMovie } from '@/components/featured-movie';
import Categories from '@/components/categories';
import { MoviesSection } from '@/components/movies-section';

export default function Homecontainer({toprated=[],popular=[], selectedCategory,categories=[] }) {
  return (
    <div>
      
      <FeaturedMovie movie={toprated?.[0]}></FeaturedMovie>

      <Categories categories={categories.slice(0, 5)}></Categories>

      {selectedCategory.movies.length > 0 && (
        <MoviesSection
        title={
          categories.find((genre) => genre.id == selectedCategory.id)?.name
        }
        movies={selectedCategory.movies} />
      )}

      <MoviesSection title="Top Rated Film" movies={toprated.slice(1, 7)} />
     
      
      <MoviesSection title="Popular Films" movies={popular.slice(7, 13)} />
    </div>
  );
}