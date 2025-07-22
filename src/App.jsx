
import React, { useState, useEffect } from 'react';

export default function CozyCorner() {
  const [note, setNote] = useState("You are my favorite person in the wholeeeee world 💌");
  const [petFrame, setPetFrame] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [currentDeal, setCurrentDeal] = useState(0);
  const [paintColor, setPaintColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(3);
  const [paintTool, setPaintTool] = useState('brush'); // brush, eraser, fill

  const restaurantDeals = [
    {
      restaurant: "Market Square Bar & Grill",
      deal: "$1 Draft Beers & $2 Wells",
      time: "Mon-Fri 4-7pm",
      address: "100 Milam St, Houston, TX 77002",
      menuLink: "https://www.marketsquarebar.com/menu",
      emoji: "🍻",
      color: "from-green-400 to-lime-500"
    },
    {
      restaurant: "Prohibition Supperclub",
      deal: "$5 Wells, $6 House Cocktails",
      time: "Mon-Fri 4-6:30pm",
      address: "1008 Prairie St, Houston, TX 77002",
      menuLink: "https://prohibitionhouston.com/menu/",
      emoji: "🍸",
      color: "from-blue-400 to-cyan-500"
    },
    {
      restaurant: "8th Wonder Brewery",
      deal: "$3 Pints + Free Chips & Salsa",
      time: "Tue-Thu 4-6pm",
      address: "2202 Dallas St, Houston, TX 77003",
      menuLink: "https://www.8thwonder.com/taproom-menu",
      emoji: "🍺",
      color: "from-orange-400 to-red-500"
    },
    {
      restaurant: "Howl at the Moon",
      deal: "$1.50 Wells, $2 Beers, $3 Shots",
      time: "Mon-Fri 4-7pm",
      address: "612 Hadley St, Houston, TX 77002",
      menuLink: "https://www.howlatthemoon.com/locations/houston/",
      emoji: "🌙",
      color: "from-purple-400 to-indigo-500"
    },
    {
      restaurant: "Lucky's Pub",
      deal: "$3 Wells, $4 Draft Beer, $2 Tacos",
      time: "Mon-Fri 3-6pm",
      address: "801 St Emanuel St, Houston, TX 77003",
      menuLink: "https://www.luckyspubhouston.com/menu",
      emoji: "🍀",
      color: "from-green-500 to-emerald-600"
    },
    {
      restaurant: "Truck Yard",
      deal: "$3 Wells, $4 Draft Beer, $5 Frozen Margaritas & Cocktails",
      time: "Mon-Fri 3-6pm",
      address: "2814 White Oak Dr, Houston, TX 77007",
      menuLink: "https://www.truckyardhouston.com/menu",
      emoji: "🛻",
      color: "from-orange-500 to-red-600"
    }
  ];

  // Cycle through 6-frame animation for Stinky
  useEffect(() => {
    const interval = setInterval(() => {
      setPetFrame((prev) => (prev + 1) % 6);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Rotate restaurant deals every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDeal((prev) => (prev + 1) % restaurantDeals.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Track mouse movement for sparkly cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-hot-pink via-barbie-pink to-princess-purple text-gray-800 font-comic p-4 relative overflow-hidden"
         style={{
           background: 'linear-gradient(45deg, #FF1493, #FF69B4, #FFB3DE, #DA70D6, #FF1493)',
           backgroundSize: '400% 400%',
           animation: 'gradientShift 8s ease infinite'
         }}>
      {/* Animated background elements - FULL GLAM MODE */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Original sparkles */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-300 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-pink-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-5 h-5 bg-purple-300 rounded-full animate-bounce"></div>
        
        {/* NEW: Paris Hilton level sparkles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-gradient-to-br from-hot-pink to-fuchsia-500 transform rotate-45 animate-spin"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-gradient-to-br from-barbie-pink to-pink-600 rounded-full animate-bounce" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-gradient-to-br from-princess-purple to-fuchsia-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-gradient-to-br from-glitter-pink to-pink-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-gradient-to-br from-hot-pink to-pink-600 transform rotate-45 animate-spin"></div>
        <div className="absolute top-3/4 right-1/6 w-2 h-2 bg-gradient-to-br from-barbie-pink to-fuchsia-500 rounded-full animate-bounce"></div>
        <div className="absolute top-16 left-1/2 w-4 h-2 bg-gradient-to-r from-princess-purple to-pink-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-16 right-1/2 w-3 h-3 bg-gradient-to-br from-hot-pink to-fuchsia-600 rounded-full animate-spin"></div>
        
        {/* Floating heart cascade */}
        <div className="absolute top-8 left-8 w-3 h-3 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-12 left-12 w-3 h-3 bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-16 left-16 w-3 h-3 bg-gradient-to-br from-pink-300 to-pink-500 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        
        {/* Right side sparkle cascade */}
        <div className="absolute top-8 right-8 w-2 h-2 bg-gradient-to-br from-yellow-300 to-yellow-500 transform rotate-45 animate-ping" style={{animationDelay: '0.2s'}}></div>
        <div className="absolute top-24 right-12 w-2 h-2 bg-gradient-to-br from-pink-400 to-pink-600 transform rotate-45 animate-ping" style={{animationDelay: '0.7s'}}></div>
        <div className="absolute top-40 right-8 w-2 h-2 bg-gradient-to-br from-fuchsia-300 to-fuchsia-500 transform rotate-45 animate-ping" style={{animationDelay: '1.2s'}}></div>
      </div>

      <header className="text-center mb-6 relative z-10">
        <div className="relative inline-block">
          {/* Glitter background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-500 rounded-3xl blur-lg opacity-75 animate-pulse"></div>
          <div className="absolute -inset-2">
            <div className="absolute top-0 left-0 w-3 h-3 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full animate-spin"></div>
            <div className="absolute top-2 right-4 w-2 h-2 bg-gradient-to-br from-pink-300 to-fuchsia-500 transform rotate-45 animate-bounce"></div>
            <div className="absolute bottom-1 left-8 w-1 h-1 bg-white rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-gradient-to-br from-purple-400 to-fuchsia-500 rounded-full animate-spin"></div>
            <div className="absolute top-4 left-1/2 w-2 h-2 bg-gradient-to-br from-pink-200 to-pink-400 transform rotate-45 animate-ping"></div>
          </div>
          
          {/* Custom Bratz Font Title */}
          <div className="relative mb-3 px-8 py-4 transform hover:scale-105 transition-all duration-300">
            <img 
              src="MorgiesWorldTitle.png" 
              alt="MORGAN'S WORLD" 
              className="h-16 md:h-20 mx-auto drop-shadow-2xl filter brightness-110"
              style={{
                filter: 'drop-shadow(3px 3px 0px #FF1493) drop-shadow(6px 6px 0px #DA70D6) drop-shadow(0px 0px 20px rgba(255, 20, 147, 0.8))',
                maxWidth: '100%',
                height: 'auto'
              }}
              onError={(e) => {
                console.log('Failed to load MorgiesWorldTitle.png, falling back to text');
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `
                  <h1 className="relative text-5xl md:text-6xl font-black mb-3 px-8 py-4 text-white transform hover:scale-105 transition-all duration-300"
                      style={{
                        fontFamily: 'Impact, "Arial Black", sans-serif',
                        textShadow: '3px 3px 0px #FF1493, 6px 6px 0px #DA70D6, 0px 0px 20px rgba(255, 20, 147, 0.8)',
                        letterSpacing: '0.1em'
                      }}>
                    MORGAN'S WORLD
                  </h1>
                `;
              }}
            />
          </div>
          
          {/* Floating sparkles around title */}
          <div className="absolute -top-4 left-0 w-3 h-3 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full animate-bounce"></div>
          <div className="absolute -top-2 right-0 w-4 h-2 bg-gradient-to-r from-fuchsia-400 to-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-2 left-4 w-2 h-2 bg-gradient-to-br from-pink-300 to-pink-500 transform rotate-45 animate-spin"></div>
          <div className="absolute -bottom-4 right-8 w-3 h-3 bg-gradient-to-br from-hot-pink to-fuchsia-500 rounded-full animate-bounce" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
        </div>
        
        <div className="relative mt-4">
          <p className="text-xl md:text-2xl font-bold text-white drop-shadow-lg mb-3"
             style={{
               textShadow: '2px 2px 0px #FF1493, 0px 0px 10px rgba(255, 255, 255, 0.8)',
               fontFamily: 'Impact, "Arial Black", "Franklin Gothic Bold", "Trebuchet MS", Helvetica, Arial, sans-serif',
               letterSpacing: '0.05em',
               fontWeight: '900'
             }}>
            Gamer Gurl xD • Law Office Princess • #1 Girlfriend
          </p>
          
          {/* Subtitle sparkle effects */}
          <div className="flex justify-center items-center mt-2 space-x-2">
            <span className="text-pink-300 animate-spin text-lg">💫</span>
            <span className="text-sm font-bold text-white bg-gradient-to-r from-pink-500 to-fuchsia-500 px-4 py-2 rounded-full shadow-lg animate-pulse">
            ...NOW LOADING "Morgan.exe" 
            </span>
            <span className="text-pink-300 animate-spin text-lg">✨</span>
          </div>
        </div>
      </header>

      {/* Happy Hour Deals Ribbon - Sparkly Top Banner */}
      <div className="relative mb-6 bg-gradient-to-r from-hot-pink via-barbie-pink to-princess-purple p-4 rounded-3xl shadow-2xl border-4 border-white overflow-hidden z-10">
        {/* Sparkly background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1 left-4 w-2 h-2 bg-white rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-3 left-12 w-1 h-1 bg-yellow-200 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1 right-8 w-2 h-2 bg-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1 left-8 w-1 h-1 bg-pink-200 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-2 right-4 w-2 h-2 bg-white rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute top-2 left-1/2 w-1 h-1 bg-fuchsia-200 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
        </div>
        
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl animate-bounce">🍸</div>
            <h2 className="text-white font-bold text-lg md:text-xl drop-shadow-lg" style={{textShadow: '2px 2px 0px #FF1493, 0px 0px 10px rgba(255, 255, 255, 0.8)'}}>
              💕 Happy Hour Deals 💕
            </h2>
          </div>
          
          <div className="flex items-center gap-2">
            {restaurantDeals.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all transform hover:scale-125 ${
                  index === currentDeal ? 'bg-white shadow-lg animate-pulse' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
                onClick={() => setCurrentDeal(index)}
                title={`View ${restaurantDeals[index].restaurant}`}
              ></button>
            ))}
          </div>
        </div>
        
        <div className="mt-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-3 border border-white border-opacity-30">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-white text-base md:text-lg drop-shadow-md">{restaurantDeals[currentDeal].restaurant}</h3>
            <div className="text-xs bg-white bg-opacity-30 px-2 py-1 rounded-full text-white font-medium">
              {currentDeal + 1}/{restaurantDeals.length}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-white">
            <div className="bg-white bg-opacity-20 rounded-lg p-2">
              <div className="text-xs opacity-80">Deal</div>
              <div className="font-semibold text-sm">{restaurantDeals[currentDeal].deal}</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-2">
              <div className="text-xs opacity-80">Time</div>
              <div className="font-semibold text-sm">{restaurantDeals[currentDeal].time}</div>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-2">
              <div className="text-xs opacity-80">Location</div>
              <div className="font-semibold text-xs">📍 {restaurantDeals[currentDeal].address}</div>
            </div>
          </div>
          
          {restaurantDeals[currentDeal].menuLink && (
            <div className="mt-2">
              <a 
                href={restaurantDeals[currentDeal].menuLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-hot-pink px-3 py-1 rounded-full font-bold text-xs hover:bg-pink-50 transition-all transform hover:scale-105 shadow-md"
              >
                📋 View Menu ✨
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {/* Interactive Paint Program - MS Paint Style */}
        <div className="bg-white p-4 rounded-2xl shadow-lg border-4 border-white sparkle">
          <h2 className="text-xl font-bold mb-2">🎨 Morgan's Pallette</h2>
          <div className="bg-gray-100 p-2 rounded-lg border-2 border-gray-300">
            
            {/* Advanced Paint Toolbar */}
            <div className="space-y-2 mb-3">
              {/* Tools Row */}
              <div className="flex gap-2 p-2 bg-gray-200 rounded border">
                <button 
                  className={`px-3 py-2 text-xs font-bold rounded transition-all ${paintTool === 'brush' ? 'bg-blue-500 text-white shadow-md' : 'bg-white hover:bg-gray-50'}`}
                  onClick={() => setPaintTool('brush')}
                  title="Brush Tool"
                >
                  🖌️ Brush
                </button>
                <button 
                  className={`px-3 py-2 text-xs font-bold rounded transition-all ${paintTool === 'eraser' ? 'bg-blue-500 text-white shadow-md' : 'bg-white hover:bg-gray-50'}`}
                  onClick={() => setPaintTool('eraser')}
                  title="Eraser Tool"
                >
                  🧽 Eraser
                </button>
                <button 
                  className="px-3 py-2 bg-white border border-gray-400 rounded text-xs font-bold hover:bg-gray-50"
                  onClick={(e) => {
                    const canvas = e.target.closest('.bg-gray-100').querySelector('canvas');
                    const ctx = canvas.getContext('2d');
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                  }}
                  title="Clear Canvas"
                >
                  🗑️ Clear
                </button>
              </div>
              
              {/* Brush Size Slider */}
              <div className="flex items-center gap-2 p-2 bg-gray-200 rounded border">
                <span className="text-xs font-bold">Brush Size:</span>
                <input 
                  type="range" 
                  min="1" 
                  max="20" 
                  value={brushSize} 
                  onChange={(e) => setBrushSize(parseInt(e.target.value))}
                  className="flex-1"
                />
                <span className="text-xs font-bold w-8">{brushSize}px</span>
                <div 
                  className="w-6 h-6 bg-gray-800 rounded-full border"
                  style={{
                    width: `${Math.min(brushSize * 2, 24)}px`,
                    height: `${Math.min(brushSize * 2, 24)}px`,
                    backgroundColor: paintTool === 'eraser' ? '#f3f4f6' : paintColor
                  }}
                ></div>
              </div>
              
              {/* Color Palette - Compact */}
              <div className="p-2 bg-gray-200 rounded border">
                <div className="text-xs font-bold mb-1">Colors:</div>
                <div className="grid grid-cols-12 gap-0.5 mb-2">
                  {/* Primary Colors */}
                  {[
                    '#000000', '#404040', '#808080', '#C0C0C0', '#FFFFFF', '#FF0000', '#800000', '#FFFF00',
                    '#808000', '#00FF00', '#008000', '#00FFFF', '#008080', '#0000FF', '#000080', '#FF00FF',
                    '#800080', '#FFA500', '#A52A2A', '#FFC0CB', '#FF1493', '#DA70D6', '#9370DB', '#4169E1',
                    '#32CD32', '#00CED1', '#FFD700', '#FF69B4', '#87CEEB', '#98FB98', '#F0E68C', '#DDA0DD'
                  ].map((color, index) => (
                    <button
                      key={index}
                      className={`w-4 h-4 rounded border hover:scale-110 transition-transform ${
                        paintColor === color ? 'border-gray-800 shadow-md border-2' : 'border-gray-400'
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setPaintColor(color)}
                      title={`Color: ${color}`}
                    ></button>
                  ))}
                </div>
                
                {/* Custom Color Picker - Compact */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold">Custom:</span>
                  <input
                    type="color"
                    value={paintColor}
                    onChange={(e) => setPaintColor(e.target.value)}
                    className="w-6 h-4 rounded border border-gray-400 cursor-pointer"
                    title="Pick custom color"
                  />
                  <span className="text-xs text-gray-600 font-mono">{paintColor}</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Canvas */}
            <canvas
              width="615"
              height="350"
              className="bg-white border-2 border-gray-800 pixel-art"
              style={{ 
                cursor: paintTool === 'eraser' ? 'crosshair' : 'crosshair',
                imageRendering: 'pixelated'
              }}
              data-color={paintColor}
              data-size={brushSize}
              data-tool={paintTool}
              data-drawing="false"
              onMouseDown={(e) => {
                e.target.dataset.drawing = 'true';
                const rect = e.target.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const ctx = e.target.getContext('2d');
                const size = parseInt(e.target.dataset.size);
                const tool = e.target.dataset.tool;
                const color = e.target.dataset.color;
                
                if (tool === 'eraser') {
                  ctx.globalCompositeOperation = 'destination-out';
                  ctx.lineWidth = size;
                } else {
                  ctx.globalCompositeOperation = 'source-over';
                  ctx.strokeStyle = color;
                  ctx.lineWidth = size;
                }
                
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                ctx.beginPath();
                ctx.moveTo(x, y);
                
                // Draw dot for single clicks
                ctx.arc(x, y, size/2, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.moveTo(x, y);
              }}
              onMouseMove={(e) => {
                if (e.target.dataset.drawing === 'true') {
                  const rect = e.target.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const ctx = e.target.getContext('2d');
                  
                  ctx.lineTo(x, y);
                  ctx.stroke();
                }
              }}
              onMouseUp={(e) => {
                e.target.dataset.drawing = 'false';
                const ctx = e.target.getContext('2d');
                ctx.beginPath();
              }}
              onMouseLeave={(e) => {
                e.target.dataset.drawing = 'false';
                const ctx = e.target.getContext('2d');
                ctx.beginPath();
              }}
            ></canvas>
            
            <div className="mt-2 text-xs text-gray-600 text-center">
               Wow, such beautiful art! 
            </div>
          </div>
        </div>
    
        {/* Retro Game Emulator - MOVED UP! */}
        <div className="bg-white p-4 rounded-2xl shadow-lg border-4 border-white sparkle">
          <h2 className="text-xl font-bold mb-2">� Morgie's Gameboy</h2>
          <div className="bg-gradient-to-b from-gray-300 to-gray-400 p-6 rounded-2xl border-4 border-gray-500 shadow-lg">
            {/* Game Boy Screen */}
            <div className="bg-gradient-to-b from-gray-600 to-gray-700 p-4 rounded-lg mb-6 shadow-inner">
              <div className="bg-yellow-200 p-3 rounded border-2 border-gray-800 relative">
                <div className="absolute -top-1 left-3 text-sm font-bold text-gray-700">GAME BOY</div>
                <div className="bg-gray-900 p-2 rounded mt-3">
                  <iframe
                    id="gameboy-screen"
                    src="https://tetris.com/play-tetris"
                    width="100%"
                    height="350"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen
                    className="rounded bg-green-400"
                    style={{filter: 'sepia(1) hue-rotate(70deg) saturate(3) contrast(1.2)'}}
                    onError={() => {
                      document.getElementById('gameboy-screen').innerHTML = '<div class="w-full h-full bg-green-400 flex items-center justify-center text-green-900 font-bold text-center p-4"><div><div class="text-2xl mb-2">🎮</div><div class="text-sm">Tetris Loading...</div><div class="text-xs mt-2">Classic Game Boy Style!</div></div></div>';
                    }}
                  ></iframe>
                </div>
              </div>
            </div>
            
            {/* Game Boy Controls */}
            <div className="flex justify-between items-center mb-4">
              {/* D-Pad Area */}
              <div className="relative">
                <div className="text-sm font-bold text-gray-700 mb-2 text-center">SELECT</div>
                <div className="flex gap-2">
                  <button 
                    className="px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm rounded border border-gray-400 transition-colors shadow"
                    onClick={(e) => {
                      const iframe = e.target.closest('.bg-gradient-to-b').querySelector('#gameboy-screen');
                      iframe.src = 'https://tetris.com/play-tetris';
                    }}
                    title="Play Tetris"
                  >
                    🧩
                  </button>
                  <button 
                    className="px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm rounded border border-gray-400 transition-colors shadow"
                    onClick={(e) => {
                      const iframe = e.target.closest('.bg-gradient-to-b').querySelector('#gameboy-screen');
                      iframe.src = 'https://funhtml5games.com/?play=pacman';
                    }}
                    title="Play Pac-Man"
                  >
                    👻
                  </button>
                
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="relative">
                <div className="text-sm font-bold text-gray-700 mb-2 text-center">GAMES</div>
                <div className="flex gap-2">
                  <button 
                    className="px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm rounded border border-gray-400 transition-colors shadow"
                    onClick={(e) => {
                      const iframe = e.target.closest('.bg-gradient-to-b').querySelector('#gameboy-screen');
                      iframe.src = 'https://solitaires-online.com/snake/#id=45rn4be6u8,no-article,no-nav,no-ads,no-feedback,dark-mode';
                    }}
                    title="Play Snake"
                  >
                    🐍
                  </button>
                  <button 
                    className="px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white text-sm rounded border border-gray-400 transition-colors shadow"
                    onClick={(e) => {
                      const iframe = e.target.closest('.bg-gradient-to-b').querySelector('#gameboy-screen');
                      iframe.src = 'https://www.retrogames.cc/arcade-games/galaga-namco-rev-b.html';
                    }}
                    title="Play Galaga"
                  >
                    �
                  </button>
                </div>
              </div>
            </div>
            
            {/* Game Boy Branding */}
            <div className="text-center">
              <div className="text-sm font-bold text-gray-600 mb-1">Nintendo</div>
              <div className="text-sm text-gray-500 font-mono">
                ✨ Click buttons to switch games! Use keyboard to play ✨
              </div>
            </div>
          </div>
        </div>

        {/* Retro TV Frame - 90s/00s Cartoons */}
        <div className="bg-white p-4 rounded-2xl shadow-lg border-4 border-white sparkle">
          <h2 className="text-xl font-bold mb-2">📺 The Nostalgia Channel</h2>
          
          {/* Vintage TV Frame */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-3xl border-8 border-gray-700 shadow-2xl relative">
            {/* TV Brand Label */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gray-600 px-3 py-1 rounded-full">
              <span className="text-white font-bold text-xs">SONY TRINITRON</span>
            </div>
            
            {/* TV Screen */}
            <div className="bg-black p-4 rounded-2xl border-4 border-gray-600 shadow-inner relative overflow-hidden">
              {/* Screen Glare Effect */}
              <div className="absolute top-2 left-2 w-8 h-8 bg-white opacity-20 rounded-full blur-md"></div>
              <div className="absolute top-4 right-4 w-4 h-4 bg-white opacity-10 rounded-full blur-sm"></div>
              
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/videoseries?list=PL2cbZsqw4DUR2XUPvUMEQyjD89zUtRUwh"
                title="90s & 00s Vintage Cartoons"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
                style={{
                  filter: 'contrast(1.1) saturate(1.2)',
                  border: '2px solid #333'
                }}
              ></iframe>
            </div>
            
            {/* TV Controls */}
            <div className="flex justify-between items-center mt-4 px-2">
              {/* Volume/Channel Knobs */}
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-gray-500 flex items-center justify-center shadow-inner">
                  <div className="w-1 h-4 bg-white rounded"></div>
                </div>
                <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-gray-500 flex items-center justify-center shadow-inner">
                  <div className="w-1 h-4 bg-white rounded transform rotate-45"></div>
                </div>
              </div>
              
              {/* Power Button */}
              <div className="w-6 h-6 bg-red-600 rounded-full border-2 border-red-500 shadow-lg"></div>
            </div>
            
            {/* TV Base */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl border-2 border-gray-600"></div>
          </div>
        </div>

        {/* Reddit Preview - r/webkinz */}
        <div className="bg-white p-4 rounded-2xl shadow-lg border-4 border-white sparkle">
          <h2 className="text-xl font-bold mb-2">� Webkinz World</h2>
          
          <div className="space-y-4">
            {/* Webkinz Bubble */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-4 rounded-xl text-center border-2 border-pink-200">
              <div className="mb-3">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl animate-bounce">
                  🐾
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">Virtual Pet Paradise</h3>
                <p className="text-sm text-gray-600">Your nostalgic pet community awaits! </p>
              </div>
              <div className="space-y-3">
                <a 
                  href="https://www.reddit.com/r/webkinz" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full p-3 rounded-lg text-white font-bold bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 transition-all transform hover:scale-105 shadow-md"
                >
                  🌟 Visit r/webkinz 🌟
                </a>
                <div className="text-xs text-gray-500">
                  Join thousands of Webkinz lovers sharing memories & tips!
                </div>
              </div>
            </div>

            {/* Mabinogi Bubble */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl text-center border-2 border-blue-200">
              <div className="mb-3">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl animate-bounce">
                  ⚔️
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">Fantasy MMORPG World</h3>
                <p className="text-sm text-gray-600">Your magical adventure community! </p>
              </div>
              <div className="space-y-3">
                <a 
                  href="https://www.reddit.com/r/mabinogi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block w-full p-3 rounded-lg text-white font-bold bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-md"
                >
                  ⚔️ Visit r/mabinogi ⚔️
                </a>
                <div className="text-xs text-gray-500">
                  Join fellow adventurers in Erinn's magical realm!
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Full-Width Spotify Section */}
      <div className="mt-6 bg-white p-6 rounded-2xl shadow-lg border-4 border-white sparkle relative z-10">
        <h2 className="text-2xl font-bold mb-4 text-center">🎵 Morgie's Music 🎵</h2>
        <iframe
          src="https://open.spotify.com/embed/playlist/1JlWdvMm4RavOJbBzvomVX?utm_source=generator"
          width="100%"
          height="500"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-xl"
        ></iframe>
        <div className="mt-3 text-sm text-gray-500 text-center">
          I can update this to play ur liked songs hehe
        </div>
      </div>

      {/* Blingy Purple Cursor Trail */}
      <div 
        className="blocky-cursor"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      ></div>

      {/* Stinky's Animation Showcase */}
      <div className="fixed bottom-4 right-4 w-48 h-32 z-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl border-4 border-pink-300 shadow-xl p-4 hover:scale-105 transition-all duration-300">
        {/* Title */}
        <div className="text-sm font-bold text-center text-pink-600 mb-3">
          <span> Stinky ❤️s u! </span>
        </div>
        
        {/* Stinky Animation Display */}
        <div className="flex items-center justify-center h-16">
          <img
            src={`stinky/Stinky${petFrame}.png`}
            alt="Stinky the Cat"
            className="w-16 h-16 object-contain pixel-art drop-shadow-md"
            onError={(e) => {
              console.log(`Failed to load: Stinky${petFrame}.png`);
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = `<div class="text-4xl animate-bounce">🐱</div>`;
            }}
            onLoad={() => console.log(`Successfully loaded: Stinky${petFrame}.png`)}
            title="Stinky the Cat - Morgan's beautiful animation!"
          />
        </div>
        
        {/* Simple Description */}
        <div className="text-center text-xs text-pink-600 mt-2">
          <span className="font-medium">Morgan's custom animation! 🎨</span>
        </div>
      </div>

      {/* Floating hearts - EXTRA GLAM */}
      <div className="fixed bottom-10 left-10 w-5 h-5 bg-gradient-to-br from-hot-pink to-pink-600 rounded-full animate-bounce-slow drop-shadow-lg"></div>
      <div className="fixed top-1/2 right-10 w-3 h-3 bg-gradient-to-br from-yellow-300 to-yellow-500 transform rotate-45 animate-pulse drop-shadow-lg"></div>
      <div className="fixed bottom-20 right-16 w-4 h-4 bg-gradient-to-br from-barbie-pink to-fuchsia-500 transform rotate-45 animate-spin drop-shadow-lg"></div>
      <div className="fixed bottom-32 left-16 w-3 h-3 bg-gradient-to-br from-princess-purple to-fuchsia-600 rounded-full animate-bounce drop-shadow-lg" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
      <div className="fixed top-20 left-1/2 w-2 h-2 bg-gradient-to-br from-glitter-pink to-pink-500 rounded-full animate-ping drop-shadow-lg"></div>
      
      {/* Add global sparkle animation CSS + Custom 2000s Blocky Cursor */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .sparkle-text {
          animation: sparkleGlow 2s ease-in-out infinite alternate;
        }
        
        @keyframes sparkleGlow {
          0% { 
            text-shadow: 0 0 5px #ff69b4, 0 0 10px #ff1493, 0 0 15px #ff69b4, 0 0 20px #ff1493;
          }
          100% { 
            text-shadow: 0 0 10px #ff69b4, 0 0 20px #ff1493, 0 0 30px #ff69b4, 0 0 40px #ff1493;
          }
        }
        
        .blocky-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          pointer-events: none;
          z-index: 10000;
          transform: translate(-2px, -2px);
          transition: transform 0.1s ease;
        }
        
        .blocky-cursor::before {
          content: '💖';
          position: absolute;
          width: 100%;
          height: 100%;
          text-align: center;
          line-height: 20px;
          font-size: 12px;
          color: #FF69B4;
          filter: drop-shadow(0px 0px 4px rgba(255, 105, 180, 0.8));
          animation: sparkleFloat 2s ease-in-out infinite alternate;
        }
        
        @keyframes sparkleFloat {
          0% { 
            transform: scale(0.8) rotate(0deg);
            opacity: 0.6;
          }
          100% { 
            transform: scale(1.2) rotate(360deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
