import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Homeowner, Delhi",
    review:
      "The AC repair service was fantastic! The technician arrived on time, fixed the issue quickly, and explained everything clearly. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Business Owner, Mumbai",
    review:
      "Our office AC was not cooling properly, and the team came in and fixed it within hours. Professional and efficient service!",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 3,
    name: "Amit Singh",
    role: "Hotel Manager, Jaipur",
    review:
      "Regular maintenance by this team has kept our hotel's AC systems running smoothly. Great service and friendly staff!",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 4,
    name: "Anjali Gupta",
    role: "Homeowner, Bangalore",
    review:
      "I was impressed with their professionalism and expertise. They fixed my AC in no time, and it's working perfectly now.",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    id: 5,
    name: "Vikram Mehta",
    role: "Shop Owner, Chennai",
    review:
      "The team is very reliable and knowledgeable. They provided excellent service at a reasonable price.Thank you!",
    avatar: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    id: 6,
    name: "Sneha Reddy",
    role: "Homeowner, Hyderabad",
    review:
      "I called them for AC maintenance, and they did a thorough job. My AC is running like new again. Thank you!",
    avatar: "https://randomuser.me/api/portraits/women/16.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <div className=" bg-gray-700 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          What Our Customers Say
        </h2>

        {/* Testimonials Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 3000, // Auto-slide every 3 seconds
            disableOnInteraction: false, // Continue autoplay even when user interacts
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-gradient-to-br from-blue-900 to-black rounded-xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300 relative h-full">
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-20 w-20 rounded-full border-4 border-blue-500"
                  />
                </div>

                {/* Review */}
                <p className="text-gray-300 text-sm text-center mb-6">
                  "{testimonial.review}"
                </p>

                {/* Name and Role */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-blue-400">{testimonial.role}</p>
                </div>

                {/* Futuristic Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-10 blur-lg -z-10"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialsSection;
