import Link from "next/link";

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    location: string;
    price: number;
    rating?: number;
    image?: string;
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/property/${property.id}`}>
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-white">
      <img
        src={property.image || "/images/default.jpg"}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{property.title}</h2>
        <p className="text-gray-500 text-sm">{property.location}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-indigo-600 font-bold">${property.price}/night</span>
          {property.rating && (
            <span className="text-yellow-500">⭐ {property.rating}</span>
          )}
        </div>
      </div>
    </div>
    </Link>
  );
}
