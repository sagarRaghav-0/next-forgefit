"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
    "/vision/1.jpeg",
    "/vision/2.jpeg",
    "/vision/3.jpeg",
    "/vision/4.jpeg",
    "/vision/5.jpeg",
    "/vision/6.jpeg",
    "/vision/7.jpeg",
    "/vision/8.jpeg",
    "/vision/9.jpeg",
    "/vision/10.jpeg",
];

const Page = () => {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Images */}
            {images.map((src, i) => (
                <div
                    key={i}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={src}
                        alt={`Vision ${i + 1}`}
                        fill
                        className="object-contain bg-black"  // add bg-black for cinema effect
                        priority={i === current}
                    />

                </div>
            ))}

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute text-6xl left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full"
            >
                ‹
            </button>
            <button
                onClick={nextSlide}
                className="absolute text-6xl right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full"
            >
                ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-3 h-3 rounded-full ${i === current ? "bg-white" : "bg-gray-500"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Page;
