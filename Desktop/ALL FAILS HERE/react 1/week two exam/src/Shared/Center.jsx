import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SyncIcon from '@mui/icons-material/Sync';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


import img from "../assets/flight.png.png"
import img1 from "../assets/flight2.png.png"
import img2 from "../assets/support2.png.png"

import img3 from "../assets/2dfbc8981a287f60104998e0535df0c19a7bea5a.png"
import img5 from "../assets/img-travel.png.png"
import img4 from "../assets/1195b41f1a8f76b1f0664daf6e50bce5d93eaebc.png"

const Center = () => {
  const flights = [
    { id: 1, image: img },
    { id: 2, image: img },
    { id: 3, image: img },
    { id: 4, image: img },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-sans bg-gray-50/50">

      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-950 mb-2">Flight Offer Deals</h2>
        <p className="text-sm text-gray-400">Competitive fares for your route-specific searches.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {flights.map((flight) => (
          <div key={flight.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col sm:flex-row">
            <div className="relative w-full sm:w-2/5 h-48 sm:h-auto min-h-[200px]">
              <img src={flight.image} alt="Destination" className="w-full h-full object-cover" />
              <button className="absolute top-4 left-4 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md backdrop-blur-sm transition-all">
                <FavoriteBorderIcon fontSize="small" />
              </button>
            </div>
            <div className="w-full sm:w-3/5 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center text-xs text-gray-400 gap-1 mb-2">
                  <span>🕒 09 Jun 2024</span>
                  <span className="mx-1">—</span>
                  <span>🕒 16 Jun 2024</span>
                </div>
                <div className="flex items-center justify-between gap-2 my-2">
                  <h3 className="text-lg font-bold text-gray-950">Denmark</h3>
                  <div className="text-gray-700 bg-gray-50 p-1 rounded-full border border-gray-100 flex items-center justify-center">
                    <SyncIcon className="text-xs" fontSize="small" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-950">New York</h3>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 border-l border-gray-100 pl-1 my-3 relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-100 hidden sm:block"></div>
                <div>
                  <p className="text-[11px] text-gray-400">Business</p>
                  <p className="text-lg font-extrabold text-gray-950">$288.15</p>
                </div>
                <div className="sm:pl-3">
                  <p className="text-[11px] text-gray-400">Business</p>
                  <p className="text-lg font-extrabold text-gray-950">$288.15</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-gray-400 font-medium">18 Seats left</span>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-2 px-5 rounded-xl text-xs transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="flex justify-center gap-3 mt-10 mb-16">
        <button className="p-2.5 rounded-full bg-gray-200/70 hover:bg-gray-200 text-gray-700 transition-colors">
          <ArrowBackIcon fontSize="small" />
        </button>
        <button className="p-2.5 rounded-full bg-gray-200/70 hover:bg-gray-200 text-gray-700 transition-colors">
          <ArrowForwardIcon fontSize="small" />
        </button>
      </div>

      <div className="lg:flex gap-10 ">
    <div className="lg:col-span-3 flex flex-col gap-0 bg-[#a5b4fc] p-5 rounded-3xl h-[400px] min-h-[400px]">
  
  <div>
    <h4 className="text-xl font-bold text-gray-950 mb-2">
      24/7 Support
    </h4>
    <p className="text-xs text-gray-800 leading-relaxed">
      We are here to help, before,<br />
      during, and even after your trip.
    </p>
  </div>

  <div className="mt-auto flex flex-col gap-3">
    <img
      src={img1}
      alt="Support 1"
      className="w-full h-32 object-cover rounded-2xl shadow-sm"
    />
    <img
      src={img2}
      alt="Support 2"
      className="w-full h-32 object-cover rounded-2xl shadow-sm"
    />
  </div>
</div>

        <div className="lg:col-span-5 flex flex-col gap-6 h-full justify-between">
          <div className="bg-[#bbf7d0] p-6 rounded-3xl flex flex-col justify-between h-1/2 min-h-[190px] relative overflow-hidden">
            <div>
              <h4 className="text-xl font-bold text-gray-950 mb-1">Best Price</h4>
              <p className="text-xs text-gray-700 max-w-[70%]">Price match within 48 hours of order <br />confirmation</p><br />
              <button className="bg-[#FEFA17] hover:bg-[#eab308] text-gray-950 font-bold py-2.5 px-5 rounded-xl text-xs w-max flex items-center gap-1 shadow-sm">
                View More <ArrowForwardIosIcon style={{ fontSize: 10 }} />
              </button>
            </div>
            <img className="absolute right-4 top-6 text-5xl" src={img4} alt="" />
          </div>

          <div className="bg-[#bae6fd] p-6 rounded-3xl flex flex-col justify-between h-1/2 min-h-[190px] relative overflow-hidden">
            <div>
              <p className="text-[11px] text-gray-500 font-medium md:mb-20 mt-5 ">Save your time!</p>
              <h4 className="text-lg font-bold text-gray-950 leading-snug max-w-[80%]">Explore, Book, Soar: Your Journey Awaits!</h4>
              <button className="bg-[#FEFA17] hover:bg-[#eab308] text-gray-950 font-bold py-2.5 px-5 rounded-xl text-xs w-max flex items-center gap-1 mt-4 shadow-sm">
                View More <ArrowForwardIosIcon style={{ fontSize: 10 }} />
              </button>
            </div>
            <img className="absolute right-4 bottom-4 text-5xl" src={img3} alt="" />
          </div>
        </div>

        <div className="lg:col-span-4 relative flex justify-center items-end min-h-[400px]">
          <div className="absolute inset-x-0 bottom-0 h-[80%]  rounded-3xl -z-10"></div>
          <div className="relative z-10 p-6 text-center w-full flex flex-col items-center">
            <img src={img5} alt="Travelers" className="w-full max-w-[350px] object-contain mb-4 rounded-b-none " />
            <div className="bg-[#FEFA17] text-gray-950 font-black px-6 py-3 rounded-2xl shadow-md text-center inline-block cursor-pointer hover:scale-105 transition-transform">
              <p className="text-[10px] uppercase tracking-wider font-bold text-gray-700">Save up to</p>
              <p className="text-2xl">$899</p>
              <p className="text-[10px] font-bold">BOOK NOW</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Center;
