import InquiryForm from "@/components/InquiryForm";

export const metadata = {
  title: "Contact Us | Markhor",
  description: "Get in touch with Markhor for inquiries about collectibles and electronics export from Canada.",
};

export default function ContactPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-5xl mx-auto animate-fade-in">
        <div className="text-center mb-12">
          <span className="badge-primary mb-4">Get in Touch</span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We&apos;re here to help with your inquiries
          </p>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="card p-8 animate-slide-up">
          <InquiryForm />
        </div>

        <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <div className="card p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-primary-100 rounded-full p-2 mr-3">
                📍
              </span>
              Business Information
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Location
                </h3>
                <p className="text-gray-700 ml-7">Based in Canada</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Export Focus
                </h3>
                <p className="text-gray-700 ml-7">
                  Specializing in overseas export of collectibles and electronics
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Response Time
                </h3>
                <p className="text-gray-700 ml-7">
                  We typically respond within 24-48 hours via your preferred contact method.
                </p>
              </div>
            </div>
          </div>

          <div className="card p-6 bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-primary-200 rounded-full p-2 mr-3">
                💡
              </span>
              What to Include
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Item(s) of interest</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Your country/location</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Preferred contact method</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Any specific questions or requirements</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
