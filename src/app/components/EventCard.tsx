"use client"

import { useState } from "react";

interface EventProps {
  title: string;
  date?: string;
  description: string;
  image: string;
  details: string;
  location: string;
  locate: string;
  overview?: string;
  gallery?: string[];
}

const EventCard = ({
  title,
  date,
  description,
  image,
  details,
  location,
  locate,
  overview = "",
}: EventProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="flex text-white rounded-xl bg-card text-card-foreground shadow flex-col space-y-1.5 p-6 max-w-sm border border-white">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="mt-4 text-lg font-bold">{title}</h3>
      <p className="text-sm text-[#adadeb] mt-2">{description}</p>
      <button
        onClick={() => setIsPopupOpen(true)}
        className="flex mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 ml-auto"
      >
        Details
      </button>

      {isPopupOpen && (
        <div className="popup-overlay fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="popup-content bg-white text-black p-6 rounded-xl max-w-3xl overflow-auto max-h-[90vh]">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="close-button float-right text-red-500 text-xl"
            >
              ×
            </button>
            <div className="popup-header mb-4">
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="mt-2">{details}</p>
            </div>
            <img src={image} alt={title} className="w-full h-80 object-cover rounded-lg mt-4" />
            <div className="popup-body mt-4">
              {overview.split('\n').map((line, index) => (
                <p key={index} className="mb-1">{line}</p>
              ))}
              <hr className="my-4" />
              <p className="text-4xl lg:text-5xl max-w-4xl">{location}</p>
              <a
                href={locate}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Locate
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCard;