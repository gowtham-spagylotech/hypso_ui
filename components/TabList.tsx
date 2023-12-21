'use client'
import { Tab } from "@headlessui/react";


function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}

const TabList = ({ }) => {
    return (
        <Tab.List className="col-span-12 border rounded-2xl mb-4 px-4 lg:mb-6 flex flex-wrap justify-between">
            <Tab
                className={({ selected }) =>
                    classNames(
                        "focus:outline-none flex gap-2 items-center font-medium py-4 px-3",
                        selected ? "text-primary border-primary border-b" : ""
                    )
                }
            >
                <span className="inline-block"> All </span>
            </Tab>
            <Tab
                className={({ selected }) =>
                    classNames(
                        "focus:outline-none flex gap-2 items-center font-medium py-4 px-3",
                        selected ? "text-primary border-primary border-b" : ""
                    )
                }
            >
                <span className="inline-block"> Pending </span>
            </Tab>
            <Tab
                className={({ selected }) =>
                    classNames(
                        "focus:outline-none flex gap-2 items-center font-medium py-4 px-3",
                        selected ? "text-primary border-primary border-b" : ""
                    )
                }
            >
                <span className="inline-block"> Approved </span>
            </Tab>
            <Tab
                className={({ selected }) =>
                    classNames(
                        "focus:outline-none flex gap-2 items-center font-medium py-4 px-3",
                        selected ? "text-primary border-primary border-b" : ""
                    )
                }
            >
                <span className="inline-block"> Rejected </span>
            </Tab>
            <Tab
                className={({ selected }) =>
                    classNames(
                        "focus:outline-none flex gap-2 items-center font-medium py-4 px-3",
                        selected ? "text-primary border-primary border-b" : ""
                    )
                }
            >
                <span className="inline-block"> Delete requests/ Deleted </span>
            </Tab>
        </Tab.List>
    );
};

export default TabList;