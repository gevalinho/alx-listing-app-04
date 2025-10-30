// import BookingForm from "@/components/booking/BookingForm";
// import OrderSummary from "@/components/booking/OrderSummary";

// export default function BookingPage() {
//   const bookingDetails = {
//     propertyName: "Villa Arrecife Beach House",
//     price: 7500,
//     bookingFee: 65,
//     totalNights: 3,
//     startDate: "24 August 2024",
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <div className="grid grid-cols-2 gap-6">
//         <BookingForm />
//         <OrderSummary bookingDetails={bookingDetails} />
//       </div>
//     </div>
//   );
// }

import axios from "axios";
import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/bookings", formData);
      alert("Booking confirmed!");
    } catch (error) {
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields for booking details */}
      <button type="submit" disabled={loading}>
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}