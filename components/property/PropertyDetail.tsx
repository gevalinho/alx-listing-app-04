interface PropertyDetailProps {
  property: {
    id: number;
    title: string;
    location: string;
    price: number;
    rating?: number;
    description?: string;
    image?: string;
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="border rounded-lg overflow-hidden shadow-lg">
        <img
          src={property.image || "/assets/img/image2.png"}
          alt={property.title}
          className="w-full h-80 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
          <p className="text-gray-600 mb-2">{property.location}</p>
          <div className="flex items-center gap-3 mb-4">
            {property.rating && (
              <span className="text-yellow-500">⭐ {property.rating}</span>
            )}
            <span className="text-indigo-600 font-semibold">
              ${property.price}/night
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {property.description ||
              "No additional description available for this property."}
          </p>
        </div>
      </div>
    </div>
  );
}
