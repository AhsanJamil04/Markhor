import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getItemById } from "@/lib/inventory";
import InquiryForm from "@/components/InquiryForm";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const item = getItemById(id);
  
  if (!item) {
    return {
      title: "Item Not Found",
    };
  }

  return {
    title: `${item.title} | Markhor Inventory`,
    description: item.description,
    keywords: item.tags?.join(", "),
  };
}

export default async function ItemDetailPage({ params }: PageProps) {
  const { id } = await params;
  const item = getItemById(id);

  if (!item) {
    notFound();
  }

  return (
    <div className="container-custom py-12 animate-fade-in">
      <Link
        href="/inventory"
        className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 font-semibold transition-colors group"
      >
        <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Inventory
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Image Gallery */}
        <div className="animate-slide-right">
          <div className="relative h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden mb-4 shadow-soft group animate-float-slow">
            <Image
              src={`/${item.images[0]}`}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-125 transition-transform duration-700"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>
          {item.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {item.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden cursor-pointer hover:ring-2 ring-primary-500 transition-all group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Image
                    src={`/${image}`}
                    alt={`${item.title} - View ${index + 2}`}
                    fill
                    className="object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-500"
                    sizes="(max-width: 1024px) 25vw, 12.5vw"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Item Information */}
        <div className="animate-slide-left" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center flex-wrap gap-3 mb-6">
            <span className="badge-primary animate-pulse-glow">
              {item.category}
            </span>
            <span className="text-sm text-gray-600 font-medium animate-fade-in">{item.condition}</span>
            {item.availability === "Available" && (
              <span className="badge-success animate-pulse-glow">
                ✓ Available
              </span>
            )}
            {item.availability === "Sold" && (
              <span className="badge-danger animate-pulse-glow">
                Sold
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight animate-zoom-in">{item.title}</h1>

          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">{item.description}</p>
          </div>

          {item.specifications && Object.keys(item.specifications).length > 0 && (
            <div className="card p-6 mb-8 animate-scale-up">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 animate-slide-up">Specifications</h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(item.specifications).map(([key, value], index) => (
                  <div 
                    key={key} 
                    className="border-l-4 border-primary-500 pl-4 py-2 bg-primary-50/50 rounded-r-lg hover:bg-primary-100/50 transition-all duration-300 hover:scale-105 animate-slide-right"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <dt className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">{key}</dt>
                    <dd className="text-base font-medium text-gray-900">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {item.tags && item.tags.length > 0 && (
            <div className="mb-8 animate-fade-in">
              <h2 className="text-xl font-bold mb-4 text-gray-900 animate-slide-up">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <span
                    key={tag}
                    className="text-sm bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-primary-100 hover:text-primary-700 hover:scale-110 transition-all duration-300 cursor-default animate-zoom-in hover:animate-wiggle"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="card p-8 border-2 border-primary-100">
            <div className="flex items-center mb-6 pb-6 border-b border-gray-200">
              <div className="bg-primary-100 rounded-full p-3 mr-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold text-gray-900">Price on Request</p>
                <p className="text-sm text-gray-600">Please inquire for more information</p>
              </div>
            </div>
            <InquiryForm itemName={item.title} />
          </div>
        </div>
      </div>
    </div>
  );
}
