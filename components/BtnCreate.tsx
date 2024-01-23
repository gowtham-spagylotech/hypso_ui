// BtnCreate.tsx

import React from "react";

interface BtnCreateProps {
  onClick?: () => void;
}

const BtnCreate: React.FC<BtnCreateProps> = ({ onClick }) => {
  return (
    <div className="create-btn">
      <button
        onClick={onClick} // This will call the provided onClick function
        className="link inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold"
      >
        Create
      </button>
    </div>
  );
};

export default BtnCreate;
