import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import HeroSection from "../public/assets/img/HeroSection.png";
import PropertyCard from "@/components/property/PropertyCard";

export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  rating?: number;
  image?: string;
}

export default function Home() {
  const filters = ["Top Villa", "Self Checkin", "Free WiFi", "Luxury", "Pet Friendly"];

  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // ✅ Fetch from local mock API
        const response = await axios.get<Property[]>("/api/properties");
        setProperties(response.data);
      } catch (err) {
        console.error("Error fetching properties:", err);
        setError("Failed to load properties");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <p className="text-center mt-10 text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-[400px] bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: `url(${HeroSection.src})` }}
      >
        <h1 className="text-4xl font-bold mb-2 text-center">Find your favorite place here!</h1>
        <p className="text-lg text-center">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filters */}
      <section className="flex flex-wrap gap-3 justify-center py-6">
        {filters.map((filter, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-gray-200 rounded-full cursor-pointer hover:bg-indigo-600 hover:text-white transition"
          >
            {filter}
          </span>
        ))}
      </section>

      {/* Property Listings */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </section>
    </div>
  );
}
