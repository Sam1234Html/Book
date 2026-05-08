import React from 'react';
import { MessageCircle, MapPin, Video, Calendar, ShieldCheck } from 'lucide-react';

export default function LandingPage() {
  const malls = ["Spur Mall", "Juja City Mall", "TRM", "Village Market", "Garden City"];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center bg-white/50 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-2xl font-black text-sage-500 tracking-tight">jibonge.</h1>
        <button className="bg-sage-900 text-white px-5 py-2 rounded-full text-sm font-bold">Login</button>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow px-6 pt-10 pb-20 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-900 px-4 py-2 rounded-full text-xs font-bold mb-6">
          <ShieldCheck size={14} /> KIOKO NJERI | CERTIFIED THERAPIST
        </div>
        
        <h2 className="text-5xl font-extrabold leading-[1.1] mb-6">
          Talking helps, <br/> <span className="text-sage-500">healing starts here.</span>
        </h2>
        
        {/* Cartoon placeholder icon */}
        <div className="bg-sage-200/50 w-40 h-40 rounded-full mx-auto mb-8 flex items-center justify-center animate-pulse">
           <MessageCircle size={60} className="text-sage-500" />
        </div>

        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
          Book a private 1-on-1 session at your favorite mall or join a secure online session from anywhere.
        </p>

        {/* Mall Selection UI */}
        <div className="bg-white p-8 rounded-[40px] shadow-xl shadow-sage-200/50 text-left border border-sage-100">
          <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
            <Calendar className="text-sage-500" /> Start Booking
          </h3>
          
          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Choose Location</label>
          <div className="grid grid-cols-1 gap-3 mt-3 mb-6">
            <button className="flex items-center gap-3 p-4 rounded-2xl bg-sage-50 border-2 border-sage-500 text-sage-900 font-bold">
              <Video size={20} /> Online (Google Meet)
            </button>
            <div className="relative">
              <select className="w-full appearance-none p-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-sage-200 font-medium">
                <option>Choose Nearest Mall...</option>
                {malls.map(m => <option key={m}>{m}</option>)}
              </select>
              <MapPin size={18} className="absolute right-4 top-4 text-gray-400" />
            </div>
          </div>

          <button className="w-full bg-sage-500 hover:bg-sage-600 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-lg shadow-sage-500/30">
            Pay with M-Pesa
          </button>
          <p className="text-center text-[10px] text-gray-400 mt-4 uppercase">Direct Pool: 0794771937</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-8 text-center text-gray-400 text-sm">
        &copy; 2026 Jibonge Therapy. All rights reserved.
      </footer>
    </div>
  );
        }
