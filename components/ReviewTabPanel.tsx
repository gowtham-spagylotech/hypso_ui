import { Tab } from "@headlessui/react";
import {
    ChatBubbleLeftRightIcon,
    HandThumbUpIcon,
} from "@heroicons/react/24/outline";
import { ReviewsData } from "@/public/data/myreviews";
import VEDButton from "@/components/VEDButtons";     //view,edit,delete button
import { StarIcon } from "@heroicons/react/20/solid";

const ReviewTabPanel = ({ }) => {
    return (
        <Tab.Panels>
        <Tab.Panel className="tab-pane fade show active" id="upcoming">
            <ul className="flex flex-col gap-4">
                {ReviewsData.map((review) => (
                    <li key={review.id} >
                        <div className="bg-[var(--bg-2)] rounded-2xl p-3 sm:p-4 lg:p-6 mb-8">
                            <div className="flex items-center flex-wrap justify-between gap-4 ">
                                <div className="flex gap-5 items-center">
                                    <div className="w-15 h-15 shrink-0 rounded-full overflow-hidden">
                                        <UserIcon />
                                    </div>
                                    <div className="flex-grow">
                                        <h5 className="mb-1 font-semibold"> {review.author} </h5>
                                        <p className="mb-0 clr-neutral-500">
                                            {" "}
                                            {review.role}{" "}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-sm-end">
                                    <p className="mb-1"> {review.time} </p>
                                    <p className="mb-0"> {review.date} </p>
                                </div>
                            </div>
                            <div className="border border-dashed my-6"></div>

                            <div className="flex gap-1 mb-3">
                                {ReviewsData[0].rating.map((value, index) => (
                                    <StarIcon key={index} className="w-5 h-5 text-[var(--tertiary)]" />
                                ))}
                            </div>

                            <p className="mb-0 clr-neutral-500">
                                {review.comment}
                            </p>

                            <div className="border border-dashed my-6"></div>

                            <div className="flex flex-wrap items-center gap-10 mb-6">
                                <div className="flex items-center gap-2 text-primary">
                                    <HandThumbUpIcon className="w-5 h-5" />
                                    <span className="inline-block"> {review.likes} </span>
                                </div>

                                <div className="flex items-center gap-2 text-primary">
                                    <ChatBubbleLeftRightIcon className="w-5 h-5" />
                                    <span className="inline-block"> Reply </span>
                                </div>
                            </div>

                            <div className="flex gap-5 items-center">
                                <div className="flex-grow">
                                    <input
                                        className="border text-base py-4 px-5 rounded-full focus:outline-none w-full"
                                        type="text"
                                        placeholder="Join the discussion"
                                    />
                                </div>
                            </div>

                            <div className="border border-dashed my-6"></div>

                            <VEDButton />

                        </div>
                    </li> 
                ))}
            </ul>
        </Tab.Panel>
        </Tab.Panels>
    );
}

export default ReviewTabPanel;

const UserIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
        </svg>
    );
};