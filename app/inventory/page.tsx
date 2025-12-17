"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllItems, filterItems } from "@/lib/inventory";
import { InventoryItem } from "@/types/inventory";

function InventoryContent() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(
    searchParams.get("category") || "All"
  );
  const [conditionFilter, setConditionFilter] = useState("All");
  const [availabilityFilter, setAvailabilityFilter] = useState("All");

  const allItems = getAllItems();

  const filteredItems = useMemo(() => {
    return filterItems(allItems, {
      category: categoryFilter,
      condition: conditionFilter,
      availability: availabilityFilter,
      search: searchQuery,
    });
  }, [categoryFilter, conditionFilter, availabilityFilter, searchQuery]);

  return (
    <div className="container-custom py-12">
      <div className="mb-10 animate-fade-in">
        <span className="badge-primary mb-4">Our Collection</span>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Inventory
        </h1>
        <p className="text-xl text-gray-600">
          Browse our curated collection of premium collectibles and electronics
        </p>
      </div>

      {/* Filters */}
      <div className="card p-6 md:p-8 mb-10 animate-slide-up hover:animate-pulse-glow">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          {/* Search */}
          <div className="md:col-span-2 animate-slide-right">
            <label className="block text-sm font-semibold text-gray-700 mb-2 animate-fade-in">
              🔍 Search
            </label>
            <div className="relative group">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, description, or tags..."
                className="input-field pl-10 group-hover:animate-glow"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-primary-600 group-hover:animate-wiggle transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <label className="block text-sm font-semibold text-gray-700 mb-2 animate-fade-in">
              Category
            </label>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="input-field hover:animate-pulse-glow"
            >
              <option value="All">All Categories</option>
              <option value="Collectibles">Collectibles</option>
              <option value="Electronics">Electronics</option>
            </select>
          </div>

          {/* Condition Filter */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <label className="block text-sm font-semibold text-gray-700 mb-2 animate-fade-in">
              Condition
            </label>
            <select
              value={conditionFilter}
              onChange={(e) => setConditionFilter(e.target.value)}
              className="input-field hover:animate-pulse-glow"
            >
              <option value="All">All Conditions</option>
              <option value="New">New</option>
              <option value="Like New">Like New</option>
              <option value="Used">Used</option>
              <option value="Sealed">Sealed</option>
            </select>
          </div>
        </div>

        {/* Availability Filter */}
        <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <label className="block text-sm font-semibold text-gray-700 mb-2 animate-fade-in">
            Availability
          </label>
          <select
            value={availabilityFilter}
            onChange={(e) => setAvailabilityFilter(e.target.value)}
            className="input-field md:w-auto hover:animate-pulse-glow"
          >
            <option value="All">All Items</option>
            <option value="Available">Available</option>
            <option value="Sold">Sold</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-8 flex items-center justify-between animate-fade-in">
        <p className="text-gray-600 font-medium animate-slide-right">
          Showing <span className="text-primary-600 font-bold animate-pulse-glow">{filteredItems.length}</span> of{" "}
          <span className="text-gray-900 font-bold">{allItems.length}</span> items
        </p>
        {(searchQuery || categoryFilter !== "All" || conditionFilter !== "All" || availabilityFilter !== "All") && (
          <button
            onClick={() => {
              setSearchQuery("");
              setCategoryFilter("All");
              setConditionFilter("All");
              setAvailabilityFilter("All");
            }}
            className="text-sm text-primary-600 hover:text-primary-700 font-semibold hover:animate-wiggle transition-all animate-slide-left"
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Inventory Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredItems.map((item, index) => (
            <div key={item.id} className="animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <InventoryCard item={item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-600 text-xl font-medium mb-2">
            No items found matching your filters.
          </p>
          <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setCategoryFilter("All");
              setConditionFilter("All");
              setAvailabilityFilter("All");
            }}
            className="btn-outline"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default function InventoryPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InventoryContent />
    </Suspense>
  );
}

function InventoryCard({ item }: { item: InventoryItem }) {
  return (
    <Link href={`/inventory/${item.id}`} className="card-hover group block h-full relative overflow-hidden">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-600/0 group-hover:from-primary-500/10 group-hover:to-primary-600/5 transition-all duration-500 z-0"></div>
      
      <div className="relative h-72 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 overflow-hidden">
        <Image
          src={`/${item.images[0]}`}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-125 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        
        {item.availability === "Sold" && (
          <div className="absolute top-4 right-4 badge-danger shadow-glow-lg animate-pulse-slow">
            Sold
          </div>
        )}
        {item.availability === "Available" && (
          <div className="absolute top-4 right-4 badge-success shadow-glow-lg">
            ✓ Available
          </div>
        )}
      </div>
      
      <div className="p-6 relative z-10 bg-white">
        <div className="flex items-center justify-between mb-4">
          <span className="badge-primary text-xs">
            {item.category}
          </span>
          <span className="text-xs text-gray-500 font-semibold bg-gray-100 px-3 py-1 rounded-full">{item.condition}</span>
        </div>
        <h3 className="font-bold text-xl mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors text-gray-900 leading-tight">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-6 leading-relaxed">
          {item.description}
        </p>
        <button className="w-full btn-primary text-sm py-3 group/btn">
          <span className="flex items-center justify-center">
            Inquire About This Item
            <svg className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>
      </div>
    </Link>
  );
}
