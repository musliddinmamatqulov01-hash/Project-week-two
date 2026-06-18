import React from "react";
import UMG from "../assets/4e5f2ef02584e1049a1284cd57c544a86f26b2f0.png"
import UMG1 from "../assets/fd8cebe4fe64704d0e64cf27f78e534f90c63340.png"
import jimi from "../assets/5789b1145b8dc939266ae182549bf03ac69168a4.png"
const articles = [
  {
    id: 1,
    tag: "Cultural",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=600&q=80",
    date: "18 Sep 2024",
    time: "6 mins",
    comments: "38 comments",
    title: "Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey",
    author: "Jimmy Dave",
    avatar: jimi
  },
  {
    id: 2,
    tag: "Travel",
    image: UMG,
    date: "18 Sep 2024",
    time: "6 mins",
    comments: "38 comments",
    title: "Top 10 Travel Hacks for Budget-Conscious Adventurers",
    author: "Jimmy Dave",
    avatar: jimi
  },
  {
    id: 3,
    tag: "Discovery",
    image: UMG1,
    date: "18 Sep 2024",
    time: "6 mins",
    comments: "38 comments",
    title: "Discovering Hidden Gems: 10 Off-the-Beaten-Path Travel Tips",
    author: "Jimmy Dave",
    avatar: jimi
  }
];

export  function Footer1() {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
        <div>
          <h2 className="text-[36px] sm:text-[42px] font-bold text-black tracking-tight leading-tight">
            News, Tips & Guides
          </h2>
          <p className="text-[#64748b] text-[15px] mt-2">
            Favorite destinations based on customer reviews
          </p>
        </div>
        <div>
          <button className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-[14px] font-medium hover:bg-neutral-800 transition-colors duration-200">
            <span>View More</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h14" />
            </svg>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((item) => (
          <div key={item.id} className="border border-[#e2e8f0] rounded-[32px] overflow-hidden bg-white shadow-sm flex flex-col h-full">
            <div className="relative h-[260px] w-full overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-white text-black text-[12px] font-semibold px-4 py-1.5 rounded-full shadow-sm">
                {item.tag}
              </span>
              <button className="absolute top-4 right-4 w-9 h-9 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-black hover:bg-white transition-colors duration-200 shadow-sm">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>


            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center flex-wrap gap-x-4 gap-y-1 text-[#64748b] text-[13px] mb-4">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{item.time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>{item.comments}</span>
                </div>
              </div>

              <h3 className="text-[18px] sm:text-[20px] font-bold text-black tracking-tight leading-snug mb-6 flex-grow hover:text-neutral-800 cursor-pointer transition-colors duration-200">
                {item.title}
              </h3>

              <div className="flex items-center justify-between pt-4 border-t border-[#f1f5f9] mt-auto">
                <div className="flex items-center gap-3">
                  <img 
                    src={item.avatar} 
                    alt={item.author} 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-black font-semibold text-[14px]">
                    {item.author}
                  </span>
                </div>
                <button className="bg-[#f1f5f9] text-black text-[13px] font-semibold px-4 py-2 rounded-xl hover:bg-neutral-200 transition-colors duration-200">
                  Keep Reading
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
