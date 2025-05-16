import React from "react";
import {
  FaPen,
  FaImage,
  FaCode,
  FaUserFriends,
  FaFileAlt,
  FaChartBar,
  FaLightbulb,
  FaSearch,
  FaLink,
} from "react-icons/fa";

const tools = [
  { label: "Help me write", icon: <FaPen /> },
  { label: "Create images", icon: <FaImage /> },
  { label: "Code", icon: <FaCode />, pro: true },
  { label: "Analyze image", icon: <FaUserFriends />, pro: true },
  { label: "Summarize link", icon: <FaLink />, pro: true },
  { label: "Get advice", icon: <FaUserFriends /> },
  { label: "Process doc", icon: <FaFileAlt />, pro: true },
  { label: "Analyze data", icon: <FaChartBar />, pro: true },
  { label: "Brainstorm", icon: <FaLightbulb /> },
  { label: "Web search", icon: <FaSearch />, pro: true },
];

function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center px-4 py-12">
      {/* Header */}
      <div className="absolute top-4 right-4">
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-medium">
          Login
        </button>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
        How can I help you today?
      </h1>

      {/* Search Input */}
      <div className="w-full max-w-2xl relative">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full bg-gray-800 text-white rounded-full py-3 px-6 pl-12 pr-10 focus:outline-none"
        />
        <FaSearch className="absolute left-4 top-3.5 text-gray-400" />
        <button className="absolute right-3 top-3 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full text-sm">
          →
        </button>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10 max-w-4xl">
        {tools.map((tool, idx) => (
          <div
            key={idx}
            className="bg-gray-800 hover:bg-gray-700 p-5 rounded-xl flex flex-col items-center justify-center text-center transition duration-300 relative"
          >
            <div className="text-2xl mb-2">{tool.icon}</div>
            <p className="text-sm font-medium">{tool.label}</p>
            {tool.pro && (
              <span className="absolute top-2 right-2 text-xs bg-purple-600 px-2 py-0.5 rounded-full">
                Pro
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="mt-16 text-sm text-gray-400 text-center">
        Chatly can make mistakes.{" "}
        <span className="underline cursor-pointer">Check important info.</span>
      </p>
    </div>
  );
}

export default Home;
