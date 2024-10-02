'use client';

import { SideBarProps } from "@/app/interfaces";
import Link from "next/link";
import React, { useMemo } from "react";

const SideBar: React.FC<SideBarProps> = ({ articles }) => {
    // Memoize the popular topics calculation to avoid unnecessary recomputations
    const popularTopicsArray = useMemo(() => {
        const counts = articles?.flatMap(a => a.tags).reduce<{ [key: string]: number }>((acc, tag) => {
            acc[tag] = (acc[tag] || 0) + 1;
            return acc;
        }, {});

        // Convert the counts object into an array of [tag, count] entries
        return counts ? Object.entries(counts) : [];
    }, [articles]);

    return (
        <div className="w-full lg:w-1/3 px-3">
            {/* Render popular topics */}
            <div className="mb-4">
                <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2">Popular Topics</h5>
                <ul>
                    {popularTopicsArray.map(([tag, total], index) => (
                        <li key={index} className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                            <Link href="#" className="flex items-center text-gray-600 cursor-pointer">
                                <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                                {tag}
                                <span className="text-gray-500 ml-auto">{total} articles</span>
                                <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            
            {/* Other components */}
            <div className="border border-dotted"></div>
            <div className="p-1 mt-4 mb-4">
                <h5 className="font-bold text-lg uppercase text-gray-700 mb-2">Subscribe</h5>
                <p className="text-gray-600">
                    Subscribe to our newsletter. We deliver the best health-related articles to your inbox.
                </p>
                <input placeholder="your email address" className="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border" />
                <button className="px-4 py-2 bg-indigo-600 text-gray-200 rounded-b w-full capitalize tracking-wide">
                    Subscribe
                </button>
            </div>
            <div className="border border-dotted"></div>
        </div>
    );
};

export default SideBar;
