import React, { useState } from "react";
import { FaHeartPulse } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { LuSoup } from "react-icons/lu";

function RecipeCard({ recipe }) {
    const [isFavorite, setIsFavorite] = useState(localStorage.getItem('favorites')?.includes(recipe.label))

    const addRecipeToFavorite = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || []
        const isRecipeAlreadyInFavorites = favorites.some((fav) => fav.label === recipe.label)

        if (isRecipeAlreadyInFavorites) {
            favorites = favorites.filter((fav) => fav.label !== recipe.label)
            setIsFavorite(false)
        } else {
            favorites.push(recipe)
            setIsFavorite(true)
        }

        localStorage.setItem('favorites', JSON.stringify(favorites))
    }
  return (
    <>
      <div className="w-full sm:w-[45%] lg:w-[28%] p-3 bg-neutral-800 shadow rounded-lg cursor-pointer ease-in-out duration-300 ">
        <div className="relative">
          <a 
          href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`}
          target="_blank"
          >
          <div className="skeleton absolute inset-0"/>
          <img
            src={recipe.image}
            className="w-full h-[11em] object-cover rounded-lg opacity-0 transition-opacity duration-300 ease-in-out"
            onLoad={(e) => {
              e.currentTarget.style.opacity = 1;
              e.currentTarget.previousElementSibling.style.display = 'none';
            }}
          />
          <div className="bg-white p-1 absolute top-1 right-2 rounded-full cursor-pointer" 
            onClick={(e) => {
                e.preventDefault()
                addRecipeToFavorite()
            }}
          >
            {!isFavorite &&<FaHeart className="ease-in-out duration-300 hover:text-red-600 hover:fill-red-600" />}
            {isFavorite && <FaHeart className="ease-in-out duration-300 text-red-600 fill-red-600" />}
          </div>
          </a>
          <div className="bg-white p-1 absolute bottom-1 left-2 rounded-full cursor-pointer flex items-center gap-3">
            <LuSoup /> 
            <span className="text-[0.8em] font-bold font-mono">
                {recipe.yield}
                {" "}
                Servings
            </span>
          </div>
        </div>
        <div className="text-white font-Inter mt-2">
          <h1 className="text-[1em] ">{recipe.label}</h1>
          <span className="text-gray-400 font-Inter text-[0.9em] capitalize">{recipe.cuisineType} Cuisine</span>
        </div>
        <div className="flex gap-3 mt-1">
            <div className="flex items-center gap-2 text-[0.9em] text-black font-medium rounded-sm font-Inter bg-[#84cc16] p-1">
                <FaHeartPulse/>
                <span>{recipe.healthLabels.slice(0,1)}</span>
            </div>
            <div className="flex items-center gap-2 text-[0.9em] text-black font-medium rounded-sm font-Inter bg-[#84cc16] p-1">
                <FaHeartPulse/>
                <span>{recipe.healthLabels.slice(5,6)}</span>
            </div>
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
