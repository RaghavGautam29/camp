import React from 'react';

const testimonials = [
  {
    role: "Tripti, mom of 8-year-old Aarav",
    message: "My son looked forward to it every single day! He's never been this excited about anything that doesn't involve a screen",
  },
  {
    role: "Rohit, father of 6-year-old Anaya",
    message: "The activities were so creative and fun.",
  },
  {
    role: "Chirag, father of 9-year-old Mahima",
    message: "A safe, joyful space where kids can just be kids — and create! We absolutely loved it.",
  },
  {
    role: "Rajiv, father of 9-year-old Raghav",
    message: "She came home messy, smiley, and full of stories. That’s how I knew this camp was something special.",
  },
  {
    role: "Meenal, mom of 7-year-old Meher",
    message: "She made new friends, learned new crafts, and was genuinely happy.",
  },
  {
    role: "Anjali, mom of 10-year-old Kabir",
    message: "He returned with a new skill and a big smile every day!",
  },
  {
    role: "Suresh, father of 7-year-old Ria",
    message: "The perfect blend of fun and learning. Can't wait to enroll again.",
  },
  {
    role: "Priya, mom of 8-year-old Ishaan",
    message: "It was refreshing to see him excited about hands-on activities again.",
  },
];

const Testimonials = () => {
  return (
    <>
    <div id='testimonials' className="overflow-hidden w-full bg-gray-100 py-10 pt-6">
        <h1 className='grid justify-center text-3xl bg-gray-100 font-quicksand'>
        Testimonials
     </h1>
      <div className="flex animate-marquee mt-8 gap-6 min-w-max">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[250px] sm:w-[300px] bg-white rounded-2xl shadow-lg p-4 sm:p-6 text-gray-800"
          >
            <p className="italic mb-3 text-sm sm:text-base">
              "{testimonial.message}"
            </p>
            <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Testimonials;
