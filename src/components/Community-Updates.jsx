import React from "react";
import image from "../assets/image-20.png";
import image2 from "../assets/image-19.png";
import image3 from "../assets/image-18.png";

const cards = [
  {
    title: "Creating Streamlined Safeguarding Processes with OneRen",
    image: image,
  },
  {
    title:
      "What are your safeguarding responsibilities and how can you manage them?",
    image: image2,
  },
  {
    title: "Revamping the Membership Model with Triathlon Australia",
    image: image3,
  },
];

function CommunityUpdates() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            Caring is the new marketing
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            The Nexcent blog is the best place to read about the latest membership
            insights, trends and more. See who's joining the community, read
            about how our community are increasing their membership income and
            lots more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-24">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div
                className="
                  absolute -bottom-12 left-1/2 -translate-x-1/2
                  w-[85%] bg-white rounded-xl p-6 text-center
                  shadow-lg transition-all duration-500
                  group-hover:-bottom-16 group-hover:shadow-2xl
                "
              >
                <h3 className="text-[rgba(113,113,113,1)] font-semibold text-lg leading-snug mb-4">
                  {card.title}
                </h3>

                <button
                  className="
                    text-green-600 font-medium
                    flex items-center justify-center gap-2 mx-auto
                    transition-all duration-300
                    group-hover:gap-3
                  "
                >
                  Readmore <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommunityUpdates;