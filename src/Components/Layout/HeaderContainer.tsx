"use client"
import { useState, useEffect } from 'react';
import { Header } from "./Header";

export const HeaderConteiner = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`sticky top-0 z-50 w-full transition-all duration-500 ease-in-out ${
            isScrolled 
                ? 'bg-[#0B2140] shadow-lg' 
                : 'bg-transparent'
        } lg:${isScrolled ? 'bg-[#0B2140]' : 'bg-transparent'}`}>
            <div 
                className={`w-full max-w-[1236px] mx-auto transition-all duration-300`}
            >
                <Header />
            </div>
        </div>
    );
};