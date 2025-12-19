export const metadata = {
  title: "About Us | Markhor Extreme Inc.",
  description: "Learn about Markhor Extreme Inc., a Canada-based business exporting collectibles and electronics to overseas clients.",
};

export default function AboutPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="text-center mb-12">
          <span className="badge-primary mb-4">Our Story</span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">Markhor Extreme Inc.</span>
          </h1>
        </div>

        <div className="prose prose-lg max-w-none">
        <section className="card p-8 mb-8 animate-slide-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="bg-primary-100 rounded-full p-2 mr-4">
              🇨🇦
            </span>
            Canada-Based Export Business
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Markhor Extreme Inc. is a Canada-based business specializing in the export of
            authentic collectibles and electronics to overseas clients. We
            understand the unique needs of international buyers and provide
            reliable, quality-assured products with seamless export processes.
          </p>
        </section>

        <section className="mb-12 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6 hover:border-primary-200 border-2 border-transparent transition-all">
              <div className="text-4xl mb-4">🎴</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Collectibles
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We specialize in authentic Pokémon trading cards, booster packs,
                and collectible items. All collectibles are sourced from
                authorized distributors and verified for authenticity before
                export.
              </p>
            </div>
            <div className="card p-6 hover:border-primary-200 border-2 border-transparent transition-all">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Electronics
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our electronics inventory includes gaming consoles, accessories,
                and premium electronics. We ensure all items are in the
                condition specified and ready for international shipping.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Commitment
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6 text-center">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Authenticity & Inspection
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Every item undergoes thorough inspection to verify authenticity and condition.
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Export Knowledge & Compliance
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Extensive experience in international shipping and export compliance.
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Quality Control
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Visual inspection, condition verification, and authenticity checks.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Overseas Markets
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We serve clients across multiple international markets, providing
            reliable export services for collectibles and electronics. Our
            understanding of different market requirements and regulations
            ensures smooth transactions for our overseas partners.
          </p>
        </section>

        <section className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white animate-scale-in">
          <h2 className="text-3xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-primary-100 text-lg leading-relaxed mb-6">
            Interested in our inventory or have questions about our export
            services? We&apos;d love to hear from you.
          </p>
          <a
            href="/contact"
            className="btn-secondary bg-white text-primary-700 hover:bg-gray-50 inline-block"
          >
            Contact Us
          </a>
        </section>
        </div>
      </div>
    </div>
  );
}
