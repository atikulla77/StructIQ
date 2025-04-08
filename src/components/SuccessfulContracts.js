"use client";

import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { MdOutlineDescription } from "react-icons/md";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { useState, useEffect } from "react";

const SuccessfulContracts = () =>
{
    const contracts = [
        {
            client: {
                name: "John Doe",
                picture: "/images/d-1.png",
                review: "4.4",
                bio: "Founder of MathTech",
            },
            talent: {
                name: "Sarah Smith",
                picture: "/images/d-2.png",
                review: "4.00",
                bio: "Math Teacher",
            },
            title: "Looking for Math Teacher",
            paymentType: "fixed price",
            description: "We are looking for a teacher to provide one-on-one algebra and geometry tutoring, 60-minute sessions, twice weekly.",
            jobDetail: {
                startDate: "2025-03-01",
                endDate: "2025-04-20",
                status: "Completed",
                budget: "800",
            },
        },
        {
            client: {
                name: "Emily Johnson",
                picture: "/images/d-3.png",
                review: "4.4",
                bio: "Founder of MathTech",
            },
            talent: {
                name: "Mike Brown",
                picture: "/images/d-2.png",
                review: "4.9",
                bio: "Math Teacher",
            },
            title: "Looking for Math Teacher",
            paymentType: "fixed price",
            description: "We are looking for a teacher to provide one-on-one algebra and geometry tutoring, 60-minute sessions, twice weekly.",
            jobDetail: {
                startDate: "2025-03-01",
                endDate: "2025-04-20",
                status: "Completed",
                budget: "800",
            },
        },
        {
            client: {
                name: "Alex Carter",
                picture: "/images/d-2.png",
                review: "5",
                bio: "Founder of MathTech",
            },
            talent: {
                name: "Lisa White",
                picture: "/images/d-3.png",
                review: "4.5",
                bio: "Math Teacher",
            },
            title: "Looking for Math Teacher",
            paymentType: "fixed price",
            description: "We are looking for a teacher to provide one-on-one algebra and geometry tutoring, 60-minute sessions, twice weekly.",
            jobDetail: {
                startDate: "2025-03-01",
                endDate: "2025-04-20",
                status: "Completed",
                budget: "800",
            },
        },
    ];

    const [ visibleContracts, setVisibleContracts ] = useState([]);

    useEffect(() =>
    {
        const updateVisibleContracts = () =>
        {
            if (window.innerWidth < 640)
            {
                // Mobile: Show 1 card
                setVisibleContracts(contracts.slice(0, 1));
            } else if (window.innerWidth >= 640 && window.innerWidth < 1024)
            {
                // Small devices: Show 2 cards
                setVisibleContracts(contracts.slice(0, 2));
            } else
            {
                // Large devices: Show all 3 cards
                setVisibleContracts(contracts);
            }
        };

        // Run on mount
        updateVisibleContracts();

        // Add resize listener
        window.addEventListener("resize", updateVisibleContracts);

        // Cleanup listener on unmount
        return () => window.removeEventListener("resize", updateVisibleContracts);
    }, []);

    return (
        <div className="py-12 px-4">
            <div>
                <div className="mb-10 flex justify-center gap-2">
                    <div className="w-3 h-3 mt-4 bg-[#CBEC5E]"></div>
                    <h2 className="text-2xl sm:text-3xl uppercase font-bold md:text-4xl">
                        SUCCESSFUL <span className="relative">CONTRACTS <span className="absolute left-0 bottom-[-3px] w-full h-1 bg-[#CBEC5E] rounded-full"></span></span>
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleContracts.map((contract, index) => (
                        <div key={index} className="relative">
                            {/* Background Layer with ClipPath */}
                            <div
                                className="absolute inset-0 rounded-4xl bg-white"
                                style={{
                                    clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 54% 0, 49% 1%, 38% 14%, 3% 14%, 0 18%)",
                                }}
                            ></div>

                            {/* Content Layer */}
                            <div className="relative z-10 p-6 flex flex-col space-y-4">
                                <div className="flex justify-between gap-5">
                                    <h1 className="font-bold text-2xl">CONTRACT</h1>
                                    <div>
                                        <h1 className="font-bold text-[16px]">{contract.title}</h1>
                                        <p><span className="font-bold">Payment Type:</span> {contract.paymentType}</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 justify-between">
                                    {/* Client Section */}
                                    <div className="w-full bg-gray-100 p-3 rounded-3xl">
                                        <div className="flex gap-4 justify-between">
                                            <Image
                                                src={contract.client.picture}
                                                alt={contract.client.name}
                                                width={40}
                                                height={40}
                                                className="rounded-full w-[47px] h-[47px] object-cover"
                                            />
                                            <div>
                                                <p className="bg-gray-300 px-4 py-1 rounded-full">Client</p>
                                                <p className="flex gap-1"><FaStar className="mt-1 text-amber-300" /> {contract.client.review}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold">{contract.client.name}</h3>
                                            <p className="text-sm text-gray-600">{contract.client.bio}</p>
                                        </div>
                                    </div>

                                    {/* Talent Section */}
                                    <div className="w-full bg-gray-100 p-3 rounded-3xl">
                                        <div className="flex gap-4 justify-between">
                                            <Image
                                                src={contract.talent.picture}
                                                alt={contract.talent.name}
                                                width={40}
                                                height={40}
                                                className="rounded-full w-[47px] h-[47px] object-cover"
                                            />
                                            <div>
                                                <p className="bg-[#CBEC5E] px-4 py-1 rounded-full">Talent</p>
                                                <p className="flex gap-1"><FaStar className="mt-1 text-amber-300" /> {contract.talent.review}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold">{contract.talent.name}</h3>
                                            <p className="text-sm text-gray-600">{contract.talent.bio}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Contract Details */}
                                <div className="space-y-2">
                                    <div>
                                        <h1 className="flex font-bold"><MdOutlineDescription className="mt-1 mr-0.5" />Description</h1>
                                        <p>{contract.description}</p>
                                    </div>
                                    <div>
                                        <h1 className="flex font-bold"><RiShoppingBag4Fill className="mt-1 mr-0.5" />Job Details</h1>
                                        <div className="grid grid-cols-2">
                                            <p className="text-sm">
                                                <span className="font-semibold">Start Date:</span> {contract.jobDetail.startDate}
                                            </p>
                                            <p className="text-sm">
                                                <span className="font-semibold">Budget:</span> {contract.jobDetail.budget}
                                            </p>
                                            <p className="text-sm">
                                                <span className="font-semibold">End Date:</span> {contract.jobDetail.endDate}
                                            </p>
                                            <p className="text-sm">
                                                <span className="font-semibold">Status:</span>{" "}
                                                <span
                                                    className={`${ contract.jobDetail.status === "Completed" ? "text-green-600" : "text-yellow-600" } font-semibold`}
                                                >
                                                    {contract.jobDetail.status}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-center bg-black rounded-2xl text-white py-1 px-3">
                                        Fixed-priced contract is under the protection of the payment system.
                                    </h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Slider Controls */}
                <div className="mt-6 flex justify-center space-x-4">
                    <button className="bg-white rounded-full p-2 md:p-3 shadow-md hover:bg-gray-100">
                        <FaArrowLeft className="text-black text-lg md:text-xl" />
                    </button>
                    <button className="bg-white rounded-full p-2 md:p-3 shadow-md hover:bg-gray-100">
                        <FaArrowRight className="text-black text-lg md:text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessfulContracts;