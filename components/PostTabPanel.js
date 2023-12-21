'use client'
import React from 'react';
import VEDButton from "@/components/VEDButtons";



// Use the interface in your component
const PostTabPanel = ({ postData }) => {
    const records = postData.records;

    return (
        <div className='d-flex gap-3'>
            {records && Array.isArray(records) && records.length > 0 ? (
                records.map((recordData) => (
                    <div key={recordData.service_id} className="mb-5 tab-pane fade show active" id="upcoming">
                        <ul className="flex flex-col gap-4">
                            {recordData ? (
                                <li key={recordData.service_id}>
                                    <div className="border border-neutral-40 p-4 p-sm-6 xl:p-8 rounded-2xl">
                                        <div className="flex flex-wrap items-center relative">
                                            <div className="absolute top-0 right-0 mt-2 mr-2">
                                                <span className={`btn-outline text-primary font-semibold shrink-0 ml-2 absolute top-0 right-0`}>
                                                    {recordData.status}
                                                </span>
                                            </div>
                                            <div className="flex flex-row gap-4 flex-wrap w-full lg:w-1/3">
                                                <div className="grid place-content-center w-40 h-40 shadow-lg shrink-0 font-medium rounded-2xl">
                                                    {recordData.images &&
                                                        recordData.images.length > 0 &&
                                                        recordData.images[0].images &&
                                                        recordData.images[0].images.length > 0 ? (
                                                        <img src={recordData.images[0].images[0]} alt={recordData.name} />
                                                    ) : (
                                                        <p>No Image</p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex-grow w-full lg:w-1/3 mt-4 lg:mt-0">
                                                <h5 className="font-medium mb-3">{recordData.name}</h5>
                                                <ul className="flex flex-wrap gap-3 list-divider-half-xs w-full">
                                                    <li className="w-full lg:w-full">
                                                        <div className="flex flex-row text-sm">
                                                            <p className="font-semibold">Description :</p>
                                                            <p className="inline-block clr-neutral-500 lg:ml-2">{recordData.description}</p>
                                                        </div>
                                                    </li>
                                                    <li className="w-full lg:w-full">
                                                        <div className="flex flex-row text-sm">
                                                            <p className="font-semibold">Category ID :</p>
                                                            <p className="inline-block clr-neutral-500 lg:ml-2">{recordData.category_id}</p>
                                                        </div>
                                                    </li>
                                                    <li className="w-full lg:w-full">
                                                        <div className="flex flex-row text-sm">
                                                            <p className="font-semibold">Created Date :</p>
                                                            <p className="inline-block clr-neutral-500 lg:ml-2">{recordData.created_date}</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="border border-dashed my-6"></div>
                                        <VEDButton />
                                    </div>
                                </li>
                            ) : (
                                <p>No data available</p>
                            )}
                        </ul>
                    </div>
                ))
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default PostTabPanel;