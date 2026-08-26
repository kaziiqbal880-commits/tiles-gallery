import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className=" my-3 h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl"
            style={{ backgroundImage: "url('/banner.png')" }}>
            {/* Overlay */}
            <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
                <div className="max-w-7xl mx-auto px-6 text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl text-gray-200">
                        Discover Your Perfect Aesthetic
                    </h1>
                    <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
                        Where Beautiful Spaces Begin.
                    </p>

                    <div className="flex gap-4">
                        <Link href="/all-tiles">
                            <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
                                Brows Now
                            </Button>
                        </Link>

                        <Link href="/pricing">
                            <Button variant="outline" className="text-white">
                                View Pricing
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;