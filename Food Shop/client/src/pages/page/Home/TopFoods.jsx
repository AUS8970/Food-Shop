import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { ShoppingCart, Pizza, Sandwich, Coffee, Star } from "lucide-react";

const TopFoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_Server_Host_Link}/foods`)
      .then(res => res.json())
      .then(data => setFoods(data.slice(0, 8)));
  }, []);

  return (
    <div className="container mx-auto px-10 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center py-8 mt-3"> 🍽️ My Top Foods </h2>

      {/* Marquee Section */}
      <Marquee speed={50} pauseOnHover={true} gradient={true} gradientWidth={100} className='flex gap-5'>
        <div className="flex gap-5">
          {foods.map((food, idx) => (
            <div key={idx} className="relative group w-72 h-64">
              <Link to={`/singaleFood/${food._id}`} className=''>
                <figure className="w-72 h-64">
                  <img className='rounded-3xl w-full h-full object-cover' src={food.image} alt={food.name} />
                </figure>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col gap-5 items-center w-72 h-64 justify-center text-white transition duration-300 rounded-3xl">
                  <h2 className="text-center text-2xl font-semibold"> {food.name} </h2>
                  <div className="card-actions justify-center">
                    <Link to={`/singaleFood/${food._id}`} className="btn bg-yellow-700 hover:bg-yellow-600 text-white border-none"> Details </Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Marquee>

      {/* Go to All Food Page Button */}
      <div className="flex items-center justify-center my-10">
        <Link to={'/allFoods'} className='btn border-yellow-700 bg-white hover:bg-yellow-700 bg-transparent text-yellow-700 hover:text-white'>
          🍛 Go to All Food Page
        </Link>
      </div>
    </div>
  );
};

export default TopFoods;