// Import necessary dependencies
import React from "react";

interface BtnCreateProps {
    onClick?: () => void;
  }
  
const BtnUpdate: React.FC<BtnCreateProps> = ({ onClick }) => {
    return (
      <div className="create-btn">
        <button
          onClick={onClick} // This will call the provided onClick function
          className="link inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold"
        >
          Update
        </button>
      </div>
    );
  };
  
  export default BtnUpdate;
  
