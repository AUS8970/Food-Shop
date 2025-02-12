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
      <h2 className="text-3xl font-bold text-center py-8 mt-3"> My Top Foods </h2>

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
           Go to All Food Page
        </Link>
      </div>

      
    </div>
  );
};

export default TopFoods;


// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { ShoppingCart, Pizza, Sandwich, Coffee, Star } from "lucide-react";
// const Index = () => {
//   return (
//     {/* Hero Section */}
//       <h1 className="text-xl text-gray-600">Start building your amazing project here!</p>
//         <div className="absolute inset-0 bg-cover bg-center"
//           style={{ 
//             backgroundImage: 'url("/photo-1618160702438-9b02ab6515c9")',
//             filter: 'brightness(0.7)'
//           }}
//         />
//         <div className="relative h-full flex items-center justify-center">
//           <div className="text-center text-white p-8">
//             <h1 className="text-5xl font-bold mb-4">স্বাদের সেরা ঠিকানা</h1>
//             <p className="text-xl mb-8">সুস্বাদু খাবার এখন আপনার দ্বারপ্রান্তে</p>
//             <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
//               <ShoppingCart className="mr-2" />
//               অর্ডার করুন
//             </Button>
//           </div>
//         </div>
//       </div>
//       </div>
//       {/* Popular Categories */}
//       <div className="max-w-7xl mx-auto py-16 px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">জনপ্রিয় ক্যাটাগরি</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <Card className="hover:shadow-lg transition-shadow">
//             <CardContent className="p-6 text-center">
//               <Pizza className="w-16 h-16 mx-auto mb-4 text-orange-500" />
//               <h3 className="text-xl font-semibold mb-2">পিজা</h3>
//               <p className="text-gray-600">ইতালিয়ান স্টাইলে তৈরি পিজা</p>
//             </CardContent>
//           </Card>
//           <Card className="hover:shadow-lg transition-shadow">
//             <CardContent className="p-6 text-center">
//               <Sandwich className="w-16 h-16 mx-auto mb-4 text-orange-500" />
//               <h3 className="text-xl font-semibold mb-2">স্যান্ডউইচ</h3>
//               <p className="text-gray-600">তাজা ও সুস্বাদু সকল স্যান্ডউইচ</p>
//             </CardContent>
//           </Card>
//           <Card className="hover:shadow-lg transition-shadow">
//             <CardContent className="p-6 text-center">
//               <Coffee className="w-16 h-16 mx-auto mb-4 text-orange-500" />
//               <h3 className="text-xl font-semibold mb-2">পানীয়</h3>
//               <p className="text-gray-600">গরম ও ঠান্ডা পানীয়</p>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//       {/* Special Offers */}
//       <div className="bg-orange-50 py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold text-center mb-12">স্পেশাল অফার</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <Card className="flex overflow-hidden">
//               <div className="w-1/3">
//                 <img 
//                   src="/photo-1506744038136-46273834b3fb" 
//                   alt="Special offer" 
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//               <CardContent className="w-2/3 p-6">
//                 <div className="flex items-center mb-2">
//                   <Star className="text-yellow-400 w-5 h-5" />
//                   <Star className="text-yellow-400 w-5 h-5" />
//                   <Star className="text-yellow-400 w-5 h-5" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">কমবো অফার</h3>
//                 <p className="text-gray-600 mb-4">২ পিস চিকেন + ফ্রেঞ্চ ফ্রাই + কোক</p>
//                 <Button>অর্ডার করুন</Button>
//               </CardContent>
//             </Card>
//             <Card className="flex overflow-hidden">
//               <div className="w-1/3">
//                 <img 
//                   src="/photo-1466721591366-2d5fba72006d" 
//                   alt="Special menu" 
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//               <CardContent className="w-2/3 p-6">
//                 <div className="flex items-center mb-2">
//                   <Star className="text-yellow-400 w-5 h-5" />
//                   <Star className="text-yellow-400 w-5 h-5" />
//                   <Star className="text-yellow-400 w-5 h-5" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">ফ্যামিলি প্যাক</h3>
//                 <p className="text-gray-600 mb-4">৪ পিস চিকেন + ২ বার্গার + ড্রিংকস</p>
//                 <Button>অর্ডার করুন</Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//       {/* Contact Section */}
//     </div>
//     </div>
//   );
//   );
// };
// };