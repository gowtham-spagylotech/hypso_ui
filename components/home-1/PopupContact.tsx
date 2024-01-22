"use client";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import React, { useState, useEffect } from "react";

interface ServiceDetails {
  service_id: number;
  name: string;
  description: string;
  created_date: string

}

const PopupContact: React.FC<{ onClose: () => void; serviceId: string }> = ({
  onClose,
  serviceId,
}) => {
  const [serviceDetails, setServiceDetails] = useState<ServiceDetails | null>(
    null
  );
  const [activeStep, setActiveStep] = useState("whatsappNumber");
  const [isCardOpen, setCardOpen] = useState(true);

  const handleCloseCard = () => {
    // Close the card by updating the state
    setActiveStep("whatsappNumber");
    // Notify the parent component (Page) to close the popup
    onClose();
  };

  const handleGenerateOTP = () => {
    // Switch to the OTP step when "Generate OTP" is clicked
    setActiveStep("otp");
  };

  useEffect(() => {
    // console.log("Fetching service details for ID:", serviceId);

    const fetchServiceDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:5001/modules/services/get-service/${serviceId}`,
          {
            method: 'POST',  // Change this to 'POST' or any other method if needed
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer YOUR_ACCESS_TOKEN',  // Add any required headers
            },
            body: JSON.stringify({ key: 'value' }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch service details.");
        }
        const serviceDetails = await response.json();
        // console.log("API Response:", serviceDetails); // Log the response
        setServiceDetails(serviceDetails.record);
      } catch (error) {
        console.error("Error fetching service details:", error);
      }
    };

    fetchServiceDetails();
  }, []);


  return (
    <div className="col-span-12 group">
      <div className="bg-white rounded-2xl col-span-12 group">
        <button className="close-btn" onClick={handleCloseCard}>
          <i className="las la-times-circle text-3xl p-5"></i>
        </button>
        <div className="grid grid-cols-12 rounded-2xl p-4">
          <div className="col-span-12">
            {serviceDetails && (
              <>
                <h2 className="text-xl font-medium text-neutral-700 pl-4">
                  {/* {`Service ID: ${serviceDetails.service_id}`} */}
                </h2>
                <div className="flex px-1 gap-3 pt-4 pb-3">
                  <h4 className="font-medium text-neutral-700 pl-4">
                    Address :
                  </h4>
                  <p className="w-350">{serviceDetails.description}</p>
                </div>
                <div className="flex px-1 pt-4 pb-3">
                  <i className="las la-phone text-3xl pr-3 pl-4"></i>
                  <p className="text-xl font-medium text-neutral-700 pl-4">
                    {serviceDetails.name}
                  </p>
                </div>
                <div className="flex px-1 pt-4 pb-3">
                  <i className="las la-calendar text-3xl pr-3 pl-4"></i>
                  <p className="text-xl font-medium text-neutral-700 pl-4">
                    {serviceDetails.created_date}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupContact;