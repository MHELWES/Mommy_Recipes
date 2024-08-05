import React, { useEffect, useState } from "react";
import RecipeCard from "../Components/RecipeCard";
import Footer from "../Components/Footer";
const APP_ID = "9b662102";
const APP_KEY = "158e5345b68e2d55ee8e44d7adc6d286";

function Main() {
  const [ricepes, setRicepes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (searchQuery) => {
    setLoading(true);
    setRicepes([]);
    try {
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public`
      );
      const data = await res.json();
      setRicepes(data.hits);
      console.log(data.hits)
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchRecipes("chicken");
  }, []);

  const heandleSearchRecipe = (e) => {
    e.preventDefault();
    fetchRecipes(e.target[0].value )
  }
  return (
    <>
      <section className="w-full flex flex-col gap-5">
        <div className="w-full flex flex-col items-center justify-center mb-7">
          <h1 className="text-white text-base sm:text-xl md:text-2xl font-Inter flex flex-col gap-2 text-center">
            Discover Your Next Favorite Dish with Ease—Find
            <span className="text-blue-500 text-sm sm:text-lg md:text-xl">
              Cook, and Savor Delicious Recipes!
            </span>
          </h1>
          
            <form onSubmit={heandleSearchRecipe} className="w-full mt-6 justify-center items-center flex">
            <input
              type="search"
              className="bg-[#2c2c31] w-[45%] sm:w-[55%] rounded-s-full h-12 sm:h-14 px-4 sm:px-10 outline-none  text-white text-sm sm:text-base font-Inter"
              placeholder="Enter keywords ..."
            />
            <button className="bg-blue-600 h-12 sm:h-14 px-4 sm:px-10 rounded-e-full text-white font-Inter text-base sm:text-lg duration-300 ease-in-out hover:bg-[#2c2c31]">
              Search
            </button>
            </form>
        </div>
        <div className="px-[1em] sm:px-[4em] md:px-[6em] w-full">
          <h1 className="text-white font-Inter text-xl sm:text-2xl">Recommended Recipes :</h1>
        </div>
        
        <div className="flex flex-wrap gap-10 w-full px-[3em] h-fit py-1 justify-center items-center">
          {!loading && ricepes.map(({recipe}, index) =>(
            <RecipeCard key={index} recipe={recipe}/>
          ))}
          {loading &&
            [...Array(9)].map((_, index) => (
              <div className="flex w-52 flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                  <div className="flex flex-col gap-4">
                    <div className="skeleton h-4 w-20"></div>
                    <div className="skeleton h-4 w-28"></div>
                  </div>
                </div>
                <div className="skeleton h-32 w-full"></div>
              </div>
            ))}
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Main;
