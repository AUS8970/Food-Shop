import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TopFoods = () => {
  const [foods, setFoods] =useState([]);

  const data = [
    {
      "id": "1",
      "name": "Margherita Pizza",
      "image": "https://example.com/images/margherita-pizza.jpg",
      "category": "Italian",
      "quantity": 15,
      "price": 12.99,
      "origin": "Italy",
      "description": "A classic Italian pizza topped with fresh mozzarella, tomatoes, and basil leaves.",
      "purchaseCount": 25
    },
    {
      "id": "2",
      "name": "Butter Chicken",
      "image": "https://example.com/images/butter-chicken.jpg",
      "category": "Indian",
      "quantity": 10,
      "price": 14.99,
      "origin": "India",
      "description": "A creamy tomato-based curry with tender pieces of chicken cooked in butter and spices.",
      "purchaseCount": 18
    },
    {
      "id": "3",
      "name": "Sushi Platter",
      "image": "https://example.com/images/sushi-platter.jpg",
      "category": "Japanese",
      "quantity": 20,
      "price": 24.99,
      "origin": "Japan",
      "description": "An assortment of fresh sushi rolls, including salmon, tuna, and vegetarian options.",
      "purchaseCount": 30
    },
    {
      "id": "4",
      "name": "Tacos",
      "image": "https://example.com/images/tacos.jpg",
      "category": "Mexican",
      "quantity": 25,
      "price": 9.99,
      "origin": "Mexico",
      "description": "Soft tortillas filled with spicy beef, fresh lettuce, tomatoes, and cheese.",
      "purchaseCount": 22
    },
    {
      "id": "5",
      "name": "Cheeseburger",
      "image": "https://example.com/images/cheeseburger.jpg",
      "category": "American",
      "quantity": 30,
      "price": 11.99,
      "origin": "USA",
      "description": "A juicy beef patty topped with melted cheese, lettuce, and tomatoes in a soft bun.",
      "purchaseCount": 27
    },
    {
      "id": "6",
      "name": "Pad Thai",
      "image": "https://example.com/images/pad-thai.jpg",
      "category": "Thai",
      "quantity": 12,
      "price": 13.99,
      "origin": "Thailand",
      "description": "Stir-fried rice noodles with shrimp, tofu, peanuts, and a tangy tamarind sauce.",
      "purchaseCount": 15
    },
  ];

  useEffect(() => {
    fetch(`${import.meta.env.VITE_Server_Host_Link}/foods`)
    .then(res => res.json())
    .then(data => setFoods(data.slice(0, 8)))
  }, []);

  // TODO 1: dynamic single food link
  // TODO 3: dynamic data by server
  // TODO 2: card show about purchase count

  return (
    <div className="container mx-auto px-10 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center py-8 mt-3"> Top Foods </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        {foods.map((food, idx) => (
          <div key={idx} className="relative group">
            <Link
              to={`/singaleFood/${food._id}`} className=''>
              <figure className="w-72 h-64">
                <img className='rounded-3xl w-full h-full' src={food.image} alt={food.name} />
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
      <div className="flex items-center justify-center my-10">
        <Link to={'/allFoods'} className='btn border-yellow-700 bg-white hover:bg-yellow-700 bg-transparent text-yellow-700 hover:text-white'> Go to All Food Page </Link>
      </div>
    </div>
  );
};

export default TopFoods;