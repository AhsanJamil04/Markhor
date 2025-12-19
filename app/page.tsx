import Link from "next/link";

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-28 md:py-40 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-slow opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-slow opacity-20" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400 rounded-full blur-3xl animate-float opacity-10"></div>
        </div>

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        ></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center animate-slide-up">
            <div className="inline-block mb-8 animate-scale-in">
              <span className="badge-primary text-sm px-6 py-3 shadow-glow animate-pulse-slow">
                🇨🇦 Canada-Based Export Business
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight text-shadow-lg animate-zoom-in">
              Premium Collectibles &<br />
              <span className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 bg-clip-text text-transparent animate-pulse-slow">
                Electronics Export
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-50 mb-6 max-w-3xl mx-auto font-light leading-relaxed animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Authentic sourcing, rigorous inspection, and quality control for
              international clients worldwide
            </p>
            <p className="text-lg text-primary-200 max-w-2xl mx-auto mb-12 font-medium animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Specializing in Pokémon collectibles and premium gaming electronics
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link href="/inventory" className="btn-primary text-lg px-12 py-5 shadow-glow-lg group">
                <span className="relative z-10 flex items-center">
                  View Inventory
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link href="/contact" className="bg-white/95 backdrop-blur-sm text-primary-700 px-12 py-5 rounded-xl font-bold shadow-elegant hover:shadow-glow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 border-2 border-white/50">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in">
            <span className="badge-primary mb-4">Our Commitment</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="gradient-text">Markhor Extreme Inc.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We ensure authenticity, quality, and seamless export processes for
              our overseas clients with unmatched expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="card p-10 text-center group hover:border-primary-300 border-2 border-transparent transition-all duration-500 relative overflow-hidden animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-100/0 group-hover:from-primary-50/50 group-hover:to-primary-100/30 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-glow-lg group-hover:scale-110 group-hover:rotate-12 group-hover:animate-wiggle transition-all duration-500 animate-float">
                  <svg
                    className="w-12 h-12 text-white group-hover:animate-spin-slow"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-700 transition-colors animate-fade-in">Authentic Sourcing</h3>
                <p className="text-gray-600 leading-relaxed text-base animate-slide-up" style={{ animationDelay: "0.1s" }}>
                  All items are sourced directly from authorized distributors and
                  verified for authenticity before export.
                </p>
              </div>
            </div>
            <div className="card p-10 text-center group hover:border-primary-300 border-2 border-transparent transition-all duration-500 relative overflow-hidden animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-100/0 group-hover:from-primary-50/50 group-hover:to-primary-100/30 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-glow-lg group-hover:scale-110 group-hover:rotate-12 group-hover:animate-wiggle transition-all duration-500 animate-float" style={{ animationDelay: "1s" }}>
                  <svg
                    className="w-12 h-12 text-white group-hover:animate-spin-slow"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-700 transition-colors animate-fade-in">
                  Inspection & Quality Control
                </h3>
                <p className="text-gray-600 leading-relaxed text-base animate-slide-up" style={{ animationDelay: "0.2s" }}>
                  Every item undergoes thorough inspection to ensure it meets our
                  rigorous quality standards.
                </p>
              </div>
            </div>
            <div className="card p-10 text-center group hover:border-primary-300 border-2 border-transparent transition-all duration-500 relative overflow-hidden animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-100/0 group-hover:from-primary-50/50 group-hover:to-primary-100/30 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-glow-lg group-hover:scale-110 group-hover:rotate-12 group-hover:animate-wiggle transition-all duration-500 animate-float" style={{ animationDelay: "2s" }}>
                  <svg
                    className="w-12 h-12 text-white group-hover:animate-spin-slow"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-700 transition-colors animate-fade-in">
                  Export-Focused Operations
                </h3>
                <p className="text-gray-600 leading-relaxed text-base animate-slide-up" style={{ animationDelay: "0.3s" }}>
                  Specialized knowledge in international shipping, customs, and
                  export compliance for seamless transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Entry Points */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="badge-primary mb-4">Explore Our Collection</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Browse by <span className="gradient-text">Category</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our curated selection of premium collectibles and electronics
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <Link
              href="/inventory?category=Collectibles"
              className="card-hover p-12 text-center group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200/20 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-8 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">🎴</div>
                <h3 className="text-3xl font-bold mb-5 text-gray-900 group-hover:text-primary-700 transition-colors">Collectibles</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Authentic Pokémon trading cards, booster packs, and premium collectible
                  items sourced directly from authorized distributors
                </p>
                <span className="inline-flex items-center text-primary-600 font-bold text-lg group-hover:text-primary-700 transition-colors px-6 py-3 rounded-xl bg-primary-50 group-hover:bg-primary-100">
                  View Collectibles
                  <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </Link>
            <Link
              href="/inventory?category=Electronics"
              className="card-hover p-12 text-center group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200/20 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="text-7xl mb-8 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">🎮</div>
                <h3 className="text-3xl font-bold mb-5 text-gray-900 group-hover:text-primary-700 transition-colors">Electronics</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Gaming consoles, premium accessories, and cutting-edge electronics
                  ready for international export
                </p>
                <span className="inline-flex items-center text-primary-600 font-bold text-lg group-hover:text-primary-700 transition-colors px-6 py-3 rounded-xl bg-primary-50 group-hover:bg-primary-100">
                  View Electronics
                  <svg className="w-6 h-6 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
