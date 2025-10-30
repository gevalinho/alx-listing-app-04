import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const properties = [
    {
      id: 1,
      title: "Luxury Beachfront Villa",
      location: "Lagos, Nigeria",
      price: 120000,
      rating: 4.9,
      image: "/assets/img/Image_container.png",
    },
    {
      id: 2,
      title: "Modern Apartment",
      location: "Abuja, Nigeria",
      price: 85000,
      rating: 4.6,
      image: "/assets/img/Image_container2.png",
    },
    {
      id: 3,
      title: "Cozy Cottage",
      location: "Calabar, Nigeria",
      price: 55000,
      rating: 4.4,
      image: "/assets/img/Image_container3.png",
    },
  ];

  res.status(200).json(properties);
}
