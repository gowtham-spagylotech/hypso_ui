"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
const Map = dynamic(() => import("../LeafletMap"), {
  ssr: false,
});

const PopupMap = ({ onClose }) => {
  const [isCardOpen, setCardOpen] = useState(true);

  const handleCloseCard = () => {
    // Close the card by updating the state
    setCardOpen(false);
    onClose();
  };

  return (
    <div className="col-span-12 group">
      <div className="bg-white rounded-2xl col-span-12 px-5">
        <button className="close-btn" onClick={handleCloseCard}>
          <i className="las la-times-circle text-3xl p-5"></i>
        </button>
        <h3 className="text-xl font-medium text-neutral-700 text-center p-5 pt-12">Directions</h3>
        <p className="p-2"><span className="text-l font-medium text-neutral-700 text-center">Name :</span> Bharath Electronics & Appliances</p>
        <p className="p-2 pb-9"><span className="text-l font-medium text-neutral-700 text-center">Address :</span> 338-A, Sathy Main Road, Oppo to Prozone mall, Sivananthapuram, Saravanampatti Post, Coimbatore, Tamil Nadu 641035</p>
        <div className="p-4">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default PopupMap;
