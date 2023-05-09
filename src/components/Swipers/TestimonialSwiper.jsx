import React, { useState, useEffect } from "react";
import {
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
} from "../../assets";

const data = [
  {
    id: "testimonial-1",
    name: "John Doe",
    rating: "5/5⭐⭐⭐⭐⭐",
    img: person1,
    testimonial:
      "I felt truly heard and understood by the therapists at this company. They helped me work through my anxiety and develop healthy coping mechanisms. I'm so grateful for their support.",
  },
  {
    id: "testimonial-2",
    name: "Keven Doe",
    rating: "3/5⭐⭐⭐",
    img: person2,
    testimonial:
      "I felt truly heard and understood by the therapists at this company. They helped me work through my anxiety and develop healthy coping mechanisms. I'm so grateful for their support.",
  },
  {
    id: "testimonial-3",
    name: "David Doe",
    rating: "4/5⭐⭐⭐⭐",
    img: person3,
    testimonial:
      "I felt truly heard and understood by the therapists at this company. They helped me work through my anxiety and develop healthy coping mechanisms. I'm so grateful for their support.",
  },
  {
    id: "testimonial-4",
    name: "Siri Doe",
    rating: "4/5⭐⭐⭐⭐",
    img: person4,
    testimonial:
      "I felt truly heard and understood by the therapists at this company. They helped me work through my anxiety and develop healthy coping mechanisms. I'm so grateful for their support.",
  },
  {
    id: "testimonial-5",
    name: "Alexa Doe",
    rating: "3/5⭐⭐⭐",
    img: person5,
    testimonial:
      "I felt truly heard and understood by the therapists at this company. They helped me work through my anxiety and develop healthy coping mechanisms. I'm so grateful for their support.",
  },
  {
    id: "testimonial-6",
    name: "Christian Doe",
    rating: "5/5⭐⭐⭐⭐⭐",
    img: person6,
    testimonial:
      "I felt truly heard and understood by the therapists at this company. They helped me work through my anxiety and develop healthy coping mechanisms. I'm so grateful for their support.",
  },
];

const TestimonialSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === data.length - 1 ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, data.length]);

  return (
    <div className="carousel-card overflow-hidden">
      <div
        className="card-container flex transition-transform duration-500"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {data.map((item, index) => (
          <div className="card" key={index}>
            <div className="w-screen md:w-[568px] md:h-[245px] p-5 border mb-32 md:mb-0 rounded-br-full border-gray-300 ">
              <div className="block sm:flex sm:flex-row">
                <div>
                  <img
                    className="w-[123px] h-[152px] rounded-xl"
                    src={item.img}
                  />
                </div>
                <div className=" text-gray-700 ml-5">
                  <h1 className=" text-xl font-bold">{item.name}</h1>
                  <h1 className=" text-xl font-medium ">{item.rating}</h1>
                  <p className=" text-sm font-medium w-[315px] h-[94px] ">
                    {item.testimonial}
                  </p>
                </div>
              </div>
            </div>
            <h2 className="text-xl font-medium">{item.title}</h2>
            <img
              src={item.image}
              alt={item.title}
              className="mt-4 mb-2 rounded-lg"
            />
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSwiper;
