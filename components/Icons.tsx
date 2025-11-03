import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="w-8 h-8">{children}</div>
);

export const InstagramIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

export const CoffeePulseIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-[#9A8C98]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M3 10h2.5l1.5-4 2 8 2-4 1.5 4H15" />
        <path d="M19 10h-2" />
        <path d="M22 10h-1" />
        <path d="M12 4v4" />
        <path d="M19 4v2" />
        <path d="M17 14H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z" />
    </svg>
);


export const SearchIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

export const PowerIcon: React.FC<{ isOn: boolean }> = ({ isOn }) => (
    <svg className={`w-5 h-5 transition-colors duration-300 ${isOn ? 'text-yellow-300 drop-shadow-[0_0_3px_rgba(252,211,77,0.7)]' : 'text-gray-500'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
        <line x1="12" y1="2" x2="12" y2="12"></line>
    </svg>
);

export const CartIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

export const PlusIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
);

export const MinusIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
    </svg>
);

export const TrashIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);


export const WaffleIcon: React.FC = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.9,7.96A5.5,5.5,0,0,0,12,3.5a5.5,5.5,0,0,0-8.9,4.46A5.5,5.5,0,0,0,7.06,20.9,5.5,5.5,0,0,0,12,16.5,5.5,5.5,0,0,0,16.94,20.9,5.5,5.5,0,0,0,20.9,7.96ZM12,14.5a3.5,3.5,0,0,1-3.46-3H15.46A3.5,3.5,0,0,1,12,14.5Z"/>
        </svg>
    </IconWrapper>
);

export const CoffeeBeanIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.08,9.75a4.23,4.23,0,0,0-4.16,0,1,1,0,0,0-.84,1.8,4.18,4.18,0,0,0,5.84,0,1,1,0,0,0-.84-1.8Z"/>
    </svg>
);

export const CoffeeCupIcon: React.FC = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.5,3H6A2,2,0,0,0,4,5V12a6,6,0,0,0,6,6h2a6,6,0,0,0,6-6V5A2,2,0,0,0,18.5,3Zm-1,9a4,4,0,0,1-4,4H10a4,4,0,0,1-4-4V5h10Z"/><path d="M20,8h2v5h-2Z"/>
        </svg>
    </IconWrapper>
);

export const TeaIcon: React.FC = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21,6H11a1,1,0,0,0,0,2h8v5a4,4,0,0,1-4,4H8a4,4,0,0,1-4-4V8A4,4,0,0,1,8,4h8a1,1,0,0,0,0-2H8A6,6,0,0,0,2,8v5a6,6,0,0,0,6,6h4a6,6,0,0,0,6-6V8h3a1,1,0,0,0,0-2Z"/>
        </svg>
    </IconWrapper>
);

export const MojitoIcon: React.FC = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.5,2H4.5A2.5,2.5,0,0,0,2,4.5v15A2.5,2.5,0,0,0,4.5,22h15A2.5,2.5,0,0,0,22,19.5V4.5A2.5,2.5,0,0,0,19.5,2ZM18,17.5a3.5,3.5,0,1,1-5-3.06V7h2v7.44A3.49,3.49,0,0,1,18,17.5Z"/>
        </svg>
    </IconWrapper>
);

export const RamenIcon: React.FC = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22,10.5V9a1,1,0,0,0-1-1H3A1,1,0,0,0,2,9v1.5a4.5,4.5,0,0,0,4,4.45V19a1,1,0,0,0,1,1h10a1,1,0,0,0,1-1V14.95A4.5,4.5,0,0,0,22,10.5ZM9,13H7V11H9Zm4,0H11V11h2Zm4,0H15V11h2Z"/>
        </svg>
    </IconWrapper>
);

export const CheesecakeIcon: React.FC = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.71,6.29l-4-4a1,1,0,0,0-1.42,0l-14,14a1,1,0,0,0,0,1.42l4,4a1,1,0,0,0,1.42,0l14-14A1,1,0,0,0,21.71,6.29ZM8.29,20.71L4,16.41l12-12,4.29,4.29Z"/>
        </svg>
    </IconWrapper>
);

export const BrownieIcon: React.FC = () => (
    <IconWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20,3H4A2,2,0,0,0,2,5V19a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V5A2,2,0,0,0,20,3ZM11,19H4V12h7Zm9,0H13V12h7ZM20,10H4V5H20Z"/>
        </svg>
    </IconWrapper>
);