import React from 'react'
import Footer from '../Components/Footer'
import RecipeCard from '../Components/RecipeCard';

function Favorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  return (
    <>
        <section className='w-full px-[3em] py-5 flex flex-col gap-6'>
            <div>
                <h1 className='text-white font-Inter text-2xl'>
                  Your Favorite Ricepes :
                </h1>
            </div>
              {favorites.length === 0 && (
                <div className='w-full h-[50vh] flex justify-center items-center'>
                    <h1 className='text-6xl font-Inter font-medium text-zinc-700'>Nothing to see here ....</h1>
                </div>
              )}
            <div className="flex flex-wrap gap-10 w-full h-fit py-1 justify-start items-center">
              {favorites.map((recipe) => (
                <RecipeCard key={recipe.label} recipe={recipe}/>
              ))}
            </div>
        </section>
    </>
  )
}

export default Favorites