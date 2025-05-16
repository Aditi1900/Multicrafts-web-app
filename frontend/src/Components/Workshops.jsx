
// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [showPopups, setShowPopups] = useState(false);

//   useEffect(() => {
//     // Trigger the animation when the component mounts
//     setShowPopups(true);
//   }, []);

//   return (
//     <div className=" items-center justify-center min-h-screen bg-lightestyellow">
//       <div className=" w-full h-full flex flex-wrap items-center py-20 px-20 justify-center gap-4">
//         {showPopups && [1, 2, 3, 4].map((_, index) => (
//           <div
//             key={index}
//             className=" md:h-56 h-44 bg-white w-full opacity-50 p-4 rounded-lg shadow-lg flex items-center justify-center"
//             style={{
//               animation: `easeIn 2s ${index * 0.3}s ease-out forwards`,
//             }}
//           >
//             <div className="absolute inset-0 flex items-center justify-center">
//               <span>Message {index + 1}</span>
//             </div>
//             <div className="drawer absolute right-0 top-0 h-full w-48 bg-blue-500 text-white p-4 flex items-center justify-center transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
//               More Info
//             </div>
//           </div>
//         ))}
//       </div>

//       <style>
//         {`
//           @keyframes easeIn {
//             from {
//               opacity: 0;
//               transform: translateY(600px); /* Larger distance */
//             }
//             to {
//               opacity: 0.9;
//               transform: translateY(0);
//             }
//               /* Custom background blur */
//           .bg-blur-gradient {
//             background: rgba(0, 0, 0, 0.4); /* Semi-transparent dark layer */
//             backdrop-filter: blur(10px); /* Apply blur effect */
//           }

//           /* Custom drawer styles */
//           .drawer {
//             background: rgba(0, 0, 0, 0.6); /* Semi-transparent dark background for drawer */
//             backdrop-filter: blur(5px); /* Optional: adds a blur effect to the drawer */
//           }

//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default App;



// App.js
import React, { useState, useEffect } from 'react';

const App = () => {
  const [showPopups, setShowPopups] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component mounts
    setShowPopups(true);
  }, []);

  const content = [
    {
      heading: "Heading for Message 1",
      paragraph: "Content for Message 1. This is a short description or detail related to the message.",
    },
    {
      heading: "Heading for Message 2",
      paragraph: "Details for Message 2. Additional information or description goes here.",
    },
    {
      heading: "Heading for Message 3",
      paragraph: "Information about Message 3. This section provides more insights into the message.",
    },
    {
      heading: "Heading for Message 4",
      paragraph: "Insights for Message 4. Here is a brief overview or summary of the message.",
    },
  ];

  return (
    <div className=" items-center justify-center min-h-screen bg-lightestyellow">
     
      <div className="relative z-10 w-full h-full flex flex-wrap items-center justify-center p-20 gap-4">
        {showPopups && content.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-40 bg-white bg-opacity-80 p-4 rounded-lg shadow-lg items-center justify-center overflow-hidden group"
            style={{
              animation: `easeIn 2s ${index * 0.3}s ease-out forwards`,
            }}
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{item.heading}</h2>
              <p className="text-sm">{item.paragraph}</p>
            </div>

            <div className="drawer absolute right-0 top-0 h-full w-40 bg-red-500 text-white p-4 flex items-center justify-center transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
              Register Now
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes easeIn {
            from {
              opacity: 0;
              transform: translateY(600px); /* Larger distance */
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Custom background blur */
          .bg-blur-gradient {
            background: rgba(0, 0, 0, 0.4); /* Semi-transparent dark layer */
            backdrop-filter: blur(10px); /* Apply blur effect */
          }

        `}
      </style>
    </div>
  );
};

export default App;


  
      

    

