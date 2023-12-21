'use client'
// VEDButton.js
import React from 'react';
import Link from 'next/link';

const VEDButton = () => {
    return (
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 flex flex-row items-end justify-end">
                <Link href="#" className="">
                    <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2">
                        View
                    </span>
                </Link>

                <Link href="#" className="">
                    <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2">
                        Edit
                    </span>
                </Link>

                <Link href="#" className="">
                    <span className="inline-block py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold cursor-pointe ml-2">
                        Delete
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default VEDButton;
