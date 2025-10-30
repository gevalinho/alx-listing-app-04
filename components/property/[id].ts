import { NextApiRequest, NextApiResponse } from "next";

// Reuse same sample data as /api/properties
const properties = [
  {
    id: 1,
    title: "Luxury Beachfront Villa",
    location: "Lagos, Nigeria",
    price: 120000,
    rating: 4.9,
    description:
      "Enjoy a luxurious stay with ocean views, private pool, and all modern amenities.",
    image: "/assets/img/Image_container.png",
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "Abuja, Nigeria",
    price: 85000,
    rating: 4.6,
    description:
      "A stylish apartment in the heart of Abuja with 24/7 security and free Wi-Fi.",
    image: "/assets/img/Image_container2.png",
  },
  {
    id: 3,
    title: "Cozy Cottage",
    location: "Calabar, Nigeria",
    price: 55000,
    rating: 4.4,
    description:
      "A charming cottage surrounded by nature — perfect for weekend getaways.",
    image: "/assets/img/Image_container3.png",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const property = properties.find((p) => p.id === Number(id));

  if (!property) {
    return res.status(404).json({ message: "Property not found" });
  }

  res.status(200).json(property);
}
