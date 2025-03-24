import React, { useState } from "react";

const EventCard = ({ title, date, description, image, details, location, locate, overview = "", gallery = [] }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="flex text-white rounded-xl bg-card text-card-foreground shadow flex-col space-y-1.5 p-6 max-w-sm border border-white">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="mt-4 text-lg font-bold">{title}</h3>
      <p className="text-sm text-[#adadeb] mt-2">{description}</p>
      <button onClick={handlePopupOpen} className="flex mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 ml-auto">
        Details
      </button>
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button onClick={handlePopupClose} className="close-button">X</button>
            <div className="popup-header">
              <div className="popup-title">
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="popup-details">{details}</p>
              </div>
            </div>
            <img src={image} alt={title} className="w-full h-80 object-cover rounded-lg mt-4" />
            <div className="popup-body">
              <div className="overview-card">
                {overview.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
              <hr className="popup-divider" />
              <p className="text-4xl lg:text-5xl max-w-4xl">{location}</p>
              <a href={locate} target="_blank" rel="noopener noreferrer" className="location-button">
                Locate
              </a>
              <hr className="popup-divider" />
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCard;