import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="w-8 h-8">{children}</div>
);

/* ================== Existing Icons (Your Original) ================== */

// export const InstagramIcon: React.FC = () => (
//     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//         <rect x="2" y="2" width="20" height="20" rx="5"></rect>
//         <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
//         <circle cx="17.5" cy="6.5" r="1"></circle>
//     </svg>
// );

export const CoffeePulseIcon: React.FC = () => (
    <svg className="h-12 w-12 text-[#9A8C98]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 10h2.5l1.5-4 2 8 2-4 1.5 4H15" />
        <path d="M19 10h-2" />
        <path d="M22 10h-1" />
        <path d="M12 4v4" />
        <path d="M19 4v2" />
        <path d="M17 14H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z" />
    </svg>
);

export const SearchIcon: React.FC = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

export const PowerIcon: React.FC<{ isOn: boolean }> = ({ isOn }) => (
    <svg className={`w-5 h-5 ${isOn ? 'text-yellow-300' : 'text-gray-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
        <line x1="12" y1="2" x2="12" y2="12"></line>
    </svg>
);

export const CartIcon: React.FC = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
        <circle cx="9" cy="19" r="2"></circle>
        <circle cx="17" cy="19" r="2"></circle>
    </svg>
);

export const PlusIcon: React.FC = () => (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeWidth={2} d="M12 6v12M6 12h12" />
    </svg>
);

export const MinusIcon: React.FC = () => (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeWidth={2} d="M6 12h12" />
    </svg>
);

export const TrashIcon: React.FC = () => (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeWidth={2} d="M5 7h14l-1 12H6L5 7zM10 11v6m4-6v6M9 7V4h6v3" />
    </svg>
);

/* ======= Your Menu Icons (unchanged) ======== */

export const WaffleIcon: React.FC = () => (
    <IconWrapper>
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.9 7.96A5.5 5.5 0 0 0 12 3.5a5.5 5.5 0 0 0-8.9 4.46A5.5 5.5 0 0 0 7.06 20.9 5.5 5.5 0 0 0 12 16.5a5.5 5.5 0 0 0 4.94 4.4A5.5 5.5 0 0 0 20.9 7.96z" />
        </svg>
    </IconWrapper>
);

export const CoffeeBeanIcon: React.FC = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm2 14a4 4 0 1 1-4-4 4 4 0 0 1 4 4Z"/>
    </svg>
);

export const CoffeeCupIcon: React.FC = () => (
    <IconWrapper>
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 5v7a6 6 0 0 0 6 6h2a6 6 0 0 0 6-6V5z" />
            <path d="M20 8h2v5h-2z" />
        </svg>
    </IconWrapper>
);

export const TeaIcon: React.FC = () => (
    <IconWrapper>
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 6H11a1 1 0 0 0 0 2h8v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8A4 4 0 0 1 8 4h8V2H8a6 6 0 0 0-6 6v5a6 6 0 0 0 6 6h4a6 6 0 0 0 6-6V8h3z"/>
        </svg>
    </IconWrapper>
);

export const MojitoIcon: React.FC = () => (
    <IconWrapper>
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.5 3h-15A2.5 2.5 0 0 0 2 5.5v13A2.5 2.5 0 0 0 4.5 21h15a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 19.5 3z" />
        </svg>
    </IconWrapper>
);

export const RamenIcon: React.FC = () => (
    <IconWrapper>
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 10.5V9H2v1.5a4.5 4.5 0 0 0 4 4.45V19h12v-4.05a4.5 4.5 0 0 0 4-4.45z" />
        </svg>
    </IconWrapper>
);

export const CheesecakeIcon: React.FC = () => (
    <IconWrapper>
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.7 6.29l-4-4L3.3 16.71l4 4z" />
        </svg>
    </IconWrapper>
);

export const BrownieIcon: React.FC = () => (
    <IconWrapper>
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5z" />
        </svg>
    </IconWrapper>
);

/* ================== ✅ NEW Social Icons ================== */

// export const WhatsAppIcon: React.FC = () => (
//     <svg className="w-8 h-8 fill-green-500" viewBox="0 0 32 32">
//         <path d="M19.11 17.42c-.27-.14-1.62-.8-1.87-.89-.25-.1-.43-.14-.62.14-.18.27-.71.89-.87 1.07-.16.18-.32.2-.59.07-.27-.14-1.12-.41-2.13-1.31-1-.9-1.66-2.02-1.82-2.29-.16-.27-.02-.41.12-.55l.41-.48c.14-.16.18-.27.27-.45s.05-.34-.02-.48-.62-1.49-.85-2.04c-.22-.53-.45-.46-.62-.46h-.53c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.3s.99 2.67 1.13 2.85c.14.18 1.96 2.98 4.73 4.18 1.97.84 2.93.94 3.34.88.53-.08 1.62-.66 1.85-1.29.23-.64.23-1.19.16-1.29s-.25-.18-.52-.32z"/>
//     </svg>
// );

// export const MapPinIcon: React.FC = () => (
//     <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//         <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
//         <circle cx="12" cy="10" r="3" />
//     </svg>
// );

// export const PhoneIcon: React.FC = () => (
//     <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//         <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.09 5.18 2 2 0 0 1 5 3h3l1 4-2 2a16 16 0 0 0 8 8l2-2 4 1z"/>
//     </svg>
// );





/* -----------------------------------------
   🔥 Icon Wrapper (same size for all icons)
----------------------------------------- */
const IconBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-10 h-10 flex items-center justify-center transition-all duration-300 cursor-pointer">
    {children}
  </div>
);

/* -----------------------------------------
   ✅ Instagram – gradient hover
----------------------------------------- */
// export const InstagramIcon: React.FC = () => (
//   <IconBox>
//     <svg
//       className="w-8 h-8 text-gray-300 transition-all duration-300 hover:text-transparent 
//       hover:scale-110"
//       style={{
//         background:
//           "radial-gradient(circle at 30% 107%, #fdf497 0%,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285AEB 90%)",
//         WebkitBackgroundClip: "text",
//       }}
//       fill="currentColor"
//       viewBox="0 0 24 24"
//     >
//       <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10z" />
//       <circle cx="12" cy="12" r="3.2" />
//       <circle cx="17.2" cy="6.8" r="1.2" />
//     </svg>
//   </IconBox>
// );


export const InstagramIcon: React.FC = () => (
  <div className="group transition cursor-pointer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="
        w-8 h-8 
        text-[#C9ADA7] 
        transition-all duration-300 
        group-hover:text-transparent 
        group-hover:fill-transparent
      "
    >
      <defs>
        <linearGradient id="instaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="50%" stopColor="#fd5949" />
          <stop offset="100%" stopColor="#d6249f" />
        </linearGradient>
      </defs>

      <rect
        width="20"
        height="20"
        x="2"
        y="2"
        rx="5"
        ry="5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="group-hover:stroke-[url(#instaGradient)]"
      />

      <circle
        cx="12"
        cy="12"
        r="3.2"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="group-hover:stroke-[url(#instaGradient)]"
      />

      <circle
        cx="17.3"
        cy="6.7"
        r="1.3"
        fill="currentColor"
        className="group-hover:fill-[url(#instaGradient)]"
      />
    </svg>
  </div>
);


/* -----------------------------------------
   ✅ WhatsApp – green glow hover
----------------------------------------- */
export const WhatsAppIcon: React.FC = () => (
  <IconBox>
    <svg
      className="w-8 h-8 text-gray-300 transition duration-300 hover:text-green-500 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(0,255,0,0.7)]"
      fill="currentColor"
      viewBox="0 0 32 32"
    >
      <path d="M16.04 2C8.82 2 3 7.82 3 15.03c0 2.66.78 5.17 2.14 7.32L3 30l7.93-2.11A13.02 13.02 0 0016.04 28c7.21 0 13.04-5.83 13.04-13.03C29.08 7.82 23.25 2 16.04 2zm7.14 18.63c-.3.84-1.74 1.6-2.4 1.7-.61.1-1.37.14-2.21-.14-.51-.17-1.17-.38-2.01-.74-3.53-1.52-5.82-5.05-6-5.29-.18-.24-1.43-1.9-1.43-3.63 0-1.73.91-2.58 1.24-2.94.33-.36.73-.46.97-.46h.69c.21 0 .51-.08.8.61.3.7 1.02 2.48 1.11 2.67.09.19.15.42.03.67-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.37.38-.16.74.21.36.93 1.5 2 2.44 1.37 1.17 2.53 1.54 2.89 1.7.36.15.57.13.78-.08.21-.21.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.11.99 2.48 1.17.36.18.61.27.69.42.08.15.08.87-.22 1.71z" />
    </svg>
  </IconBox>
);

/* -----------------------------------------
   ✅ Map Pin – red on hover
----------------------------------------- */
export const MapPinIcon: React.FC = () => (
  <IconBox>
    <svg
      className="w-8 h-8 text-gray-300 hover:text-red-500 hover:scale-110 transition-all duration-300"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5z" />
    </svg>
  </IconBox>
);

/* -----------------------------------------
   ✅ Phone – blue hover
----------------------------------------- */
export const PhoneIcon: React.FC = () => (
  <IconBox>
    <svg
      className="w-7 h-7 text-gray-300 hover:text-blue-400 hover:scale-110 transition-all duration-300"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5 3h3l1 4-2 2a16 16 0 0 0 8 8l2-2 4 1z" />
    </svg>
  </IconBox>
);

/* -----------------------------------------
   ✅ Gmail – red hover
----------------------------------------- */
export const GmailIcon: React.FC = () => (
  <IconBox>
    <svg
      className="w-8 h-8 text-gray-300 hover:text-red-500 hover:scale-110 transition-all duration-300"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M22 6.5v11a2.5 2.5 0 0 1-2.5 2.5H4.5A2.5 2.5 0 0 1 2 17.5v-11A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5zm-3.14-.42L12 11.67 5.14 6.08a1.06 1.06 0 0 0-.64-.22c-.69 0-1.25.56-1.25 1.25v10.34a1.25 1.25 0 0 0 1.25 1.25h15a1.25 1.25 0 0 0 1.25-1.25V7.11c0-.69-.56-1.25-1.25-1.25a1.06 1.06 0 0 0-.64.22z" />
    </svg>
  </IconBox>
);

/* -----------------------------------------
   ✅ Facebook
----------------------------------------- */
export const FacebookIcon: React.FC = () => (
  <IconBox>
    <svg
      className="w-8 h-8 text-gray-300 hover:text-blue-600 hover:scale-110 transition-all duration-300"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z" />
    </svg>
  </IconBox>
);

