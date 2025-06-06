import React from "react";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      review: "Great service! My AC was fixed in no time.",
    },
    {
      id: 2,
      name: "Jane Smith",
      review: "Highly recommend their repair services.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <p className="text-gray-600 italic">"{testimonial.review}"</p>
              <p className="mt-4 font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
