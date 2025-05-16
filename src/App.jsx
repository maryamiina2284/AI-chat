// // import React from "react";
// // import SideNavbar from "./Components/Sidenavbar";
// // import { Routes, Route } from "react-router-dom";
// // import Saport from "./Components/Saport";

// // function App() {
// //   return (
// //     <div>
// //       <Routes>
// //         <Route path="/Ai" element={<AiChats />} />
// //         <Route path="/saport" element={<Saport />} />
// //       </Routes>
// //     </div>
// //   );
// // }

// // export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import ImageGen from "./pages/ImageGen";
// import SearchEngine from "./pages/SearchEngine";
// import PricingPlans from "./pages/PricingPlans";
// import Sidenavbar from "./Components/Sidenavbar";
// import AiChats from "./Components/AiChats";
// import Support from "./Components/Support";

// function App() {
//   return (
//     <div className="flex">
//       <Sidenavbar />
//       <div className="flex-1 bg-slate-900 text-white p-6 overflow-y-auto h-screen">
//         <Routes>
//           <Route path="/" element={<AiChats />} />
//           <Route path="/ai" element={<AiChats />} />
//           <Route path="/image-generation" element={<ImageGen />} />
//           <Route path="/search-engine" element={<SearchEngine />} />
//           <Route path="/support" element={<Support />} />
//           <Route path="/pricing" element={<PricingPlans />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import ChatbotUI from "./Components/ChatbotUI";
import ChatPage from "./Components/ChatPage";
import SearchPage from "./Components/SearchPage";
import SupportPage from "./Components/SupportPage";
import EmptyPage from "./Components/EmptyPage"; // NEW

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatbotUI />}>
          <Route index element={<EmptyPage />} /> {/* 👈 show nothing initially */}
          <Route path="chat" element={<ChatPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="support" element={<SupportPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
