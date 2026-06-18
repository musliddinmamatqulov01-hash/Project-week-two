import React from 'react';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import HeadsetIcon from '@mui/icons-material/Headset';
import ArticleIcon from '@mui/icons-material/Article';
import StarsIcon from '@mui/icons-material/Stars';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import img from "../assets/img-love.png.png";
import img1 from "../assets/Link → popular6.png.png";
import img2 from "../assets/Link → popular7.png.png";
import img3 from "../assets/Background+Shadow.png"

const About = () => {
  const destinations = [
    { id: 1, name: "Venice", tours: "356 Tours", activities: "248 Activities", image: img1 },
    { id: 2, name: "Amsterdam", tours: "356 Tours", activities: "248 Activities", image: img2 },
    { id: 3, name: "Budapest", tours: "356 Tours", activities: "248 Activities", image: img1 },
    { id: 4, name: "Lisbon", tours: "356 Tours", activities: "248 Activities", image: img2 },
    { id: 5, name: "London", tours: "356 Tours", activities: "248 Activities", image: img1 },
    { id: 6, name: "Ottawa", tours: "356 Tours", activities: "248 Activities", image: img2 },
    { id: 7, name: "Paris", tours: "356 Tours", activities: "248 Activities", image: img1 }
  ];

  return (
    <>
      <div className="w-full bg-[#FFF5F1] py-16 px-6 md:px-12 lg:px-24 font-sans relative overflow-hidden">
        <div className="flex justify-around items-center flex-col lg:flex-row gap-12">
          <div>
            <img src={img} alt="Customers" className="w-100 h-130 object-cover" />
          </div>

          <div className="lg:col-span-7 flex flex-col gap-5">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-950 mb-3">You will love us</h2>
            <p className="text-sm text-gray-500 font-medium mb-12">Because more than 268 other customers have loved us too</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0 border border-gray-100">
                  <VerifiedUserIcon className="text-yellow-500" fontSize="small" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold text-gray-950 text-[20px]">Security Assurance</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">Demonstrates commitment to user <br />
                    data security through encryption and <br />
                    secure payment practices</p>
                  <button className="text-[11px] font-bold text-gray-950 flex items-center gap-1 mt-1 hover:underline">
                    Learn More <ArrowForwardIcon style={{ fontSize: 12 }} />
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm  border border-gray-100">
                  <img className='w-100' src={img3} alt="" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold text-gray-950 text-[20px]">Customer Support</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">Demonstrates commitment to user <br />data security through encryption and <br />
                    secure payment practices</p>
                  <button className="text-[11px] font-bold text-gray-950 flex items-center gap-1 mt-1 hover:underline">
                    Learn More <ArrowForwardIcon style={{ fontSize: 12 }} />
                  </button>
                </div>
              </div>


              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0 border border-gray-100">
                  <ArticleIcon className="text-orange-400" fontSize="small" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold text-gray-950 text-[20px] ">Transparent Policies</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">Demonstrates commitment to user <br />data security through encryption and <br />
                    secure payment practices</p>
                  <button className="text-[11px] font-bold text-gray-950 flex items-center gap-1 mt-1 hover:underline">
                    Learn More <ArrowForwardIcon style={{ fontSize: 12 }} />
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0 border border-gray-100">
                  <StarsIcon className="text-cyan-400" fontSize="small" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold text-gray-950 text-[20px] ">Reputable Affiliations</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">Demonstrates commitment to user <br />data security through encryption and <br />
                    secure payment practices</p>
                  <button className="text-[11px] font-bold text-gray-950 flex items-center gap-1 mt-1 hover:underline">
                    Learn More <ArrowForwardIcon style={{ fontSize: 12 }} />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-16 px-6 md:px-12 lg:px-24 font-sans">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-gray-950 mb-2">Popular Destinations</h2>
            <p className="text-sm text-gray-400">Favorite destinations based on customer reviews</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Categories', 'Duration', 'Review / Rating', 'Price range'].map((filter, index) => (
              <button key={index} className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold py-2 px-4 rounded-full transition-colors">
                {filter} <KeyboardArrowDownIcon style={{ fontSize: 16 }} />
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {destinations.map((dest) => (
              <div key={dest.id} className="bg-white rounded-3xl p-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-full h-36 rounded-2xl overflow-hidden mb-3">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center justify-between px-1">
                  <div>
                    <h3 className="font-bold text-gray-950 text-base">{dest.name}</h3>
                    <p className="text-[11px] text-gray-400 mt-0.5">{dest.tours}, {dest.activities}</p>
                  </div>
                  <button className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors">
                    <ArrowForwardIcon style={{ fontSize: 14 }} />
                  </button>
                </div>
              </div>
            ))}


            <div className="bg-[#FFFF00] rounded-3xl p-6 flex flex-col justify-between h-full min-h-50">
              <h3 className="text-xl font-extrabold text-gray-950 leading-snug">
                Crafting Your <br /> Perfect Travel <br /> Experience
              </h3>
              <button className="w-full bg-black hover:bg-gray-900 text-white font-bold py-3 px-4 rounded-full flex items-center justify-between text-xs transition-colors">
                <span>Browse All destinations</span>
                <div className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center">
                  <ArrowForwardIcon style={{ fontSize: 12 }} />
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;
 