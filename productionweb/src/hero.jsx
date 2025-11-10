import React from 'react';

export default function HeroSection() {
  return (
    <>
      {/* Load Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" 
        rel="stylesheet" 
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" style={{ fontFamily: 'Inter, sans-serif' }}>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-green-600 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                New Features Available
              </div>

              {/* Heading */}
              <h1 className="text-5xl lg:text-6xl font-poppins leading-tight text-slate-900">
               Production <br/> and support <br/> for your event
              </h1>

             
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
                
               
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}