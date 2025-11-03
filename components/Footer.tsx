
import React from 'react';
import { InstagramIcon, CoffeePulseIcon } from './Icons';

const Footer: React.FC = () => {
    return (
        <footer className="mt-16 py-8 border-t-2 border-gray-500 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-[#C9ADA7]">
            <div className="flex items-center space-x-3">
                <InstagramIcon />
                <div>
                    <p className="text-sm">mention us @</p>
                    <p className="font-semibold text-lg">wafflenvibe_</p>
                </div>
            </div>
            <div className="flex items-center">
                <CoffeePulseIcon />
            </div>
        </footer>
    );
};

export default Footer;
