// Import necessary dependencies
import React from "react";
import Link from "next/link";

// Define BtnCreate as a functional component
const BtnUpdate: React.FC = () => {
    return (
        <div className="create-btn">
            <Link
                href="#"
                className="link inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold"
            >
                Update
            </Link>
        </div>
    );
};

export default BtnUpdate;
