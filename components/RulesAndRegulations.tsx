import React from 'react';

const rules = [
  "Throw Garbage in Dustbin.",
  "Please Maintain Silence & Don't sit unnecessary.",
  "Maximum Time for each Customer is 30 mins.",
  "Outside Food Not Allowed.",
  "Do not Block The entrance.",
  "Don't use Offensive Words for Violation.",
  "Please do not spill the food; you are responsible to swipe it down.",
  "We reserve the right to remove any patron violating rules.",
];

const RulesAndRegulations: React.FC = () => {
  return (
    <div className="bg-[#22223B] p-4 sm:p-6 rounded-lg shadow-xl border border-gray-600 w-full">
      <h2 className="text-2xl sm:text-3xl font-display text-center mb-4 sm:mb-6 text-[#F2E9E4]">Rules & Regulations</h2>
      <ol className="list-decimal list-inside space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-lg leading-relaxed">
        {rules.map((rule, i) => <li key={i}>{rule}</li>)}
      </ol>
    </div>
  );
};
export default RulesAndRegulations;




// import React from 'react';

// const rules = [
//     "Throw Garbage in Dustbin.",
//     "Please Maintain Silence & Don't sit unnecessary.",
//     "Maximum Time for each Customer is 30 mins.",
//     "Outside Food Not Allowed.",
//     "Do not Block The entrance.",
//     "Don't use Offensive Words for Violation.",
//     "Please do not spill the food or you are responsible to swipe it down.",
//     "Do note that we reserve the right to remove any patron from the cafe if they are violating rules and regulations."
// ];

// const RulesAndRegulations: React.FC = () => {
//     return (
//         <div className="bg-[#22223B] p-6 rounded-lg shadow-2xl border-2 border-gray-600">
//             <h2 className="text-3xl font-display text-center mb-6 text-[#F2E9E4]">Rules & Regulations</h2>
//             <ol className="list-decimal list-inside space-y-3 text-gray-300 text-lg">
//                 {rules.map((rule, index) => (
//                     <li key={index}>{rule}</li>
//                 ))}
//             </ol>
//         </div>
//     );
// };

// export default RulesAndRegulations;
