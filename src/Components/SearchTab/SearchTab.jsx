import { useState } from "react";

export default function SearchTab() {
  const tabs = [
    { id: 1, title: "Search for Blogs", content: "Content for Tab 1" },
    { id: 2, title: "Find an University", content: "Content for Tab 2" },
    { id: 3, title: "Pind a Scholarship", content: "Content for Tab 3" },
    { id: 4, title: "Events", content: "Content for Tab 3" },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  return (
    <div className="text-black">
      <div className="flex bg-[#EEEDEB]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${
              activeTab.id === tab.id
                ? "bg-white "
                : ""
            } py-2 px-4 text-lg focus:outline-none`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-gray-700">{activeTab.content}</p>
        {activeTab.id === 1 && (
          <input
            type="text"
            placeholder={activeTab.inputLabel}
            className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        )}
        {activeTab.id === 2 && (
          <input
            type="text"
            placeholder={activeTab.inputLabel}
            className="mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        )}
        {activeTab.id === 3 && (
          <div>
            <p>helo</p>
          </div>
        )}
        {activeTab.id === 4 && (
          <div>
            <p>helo</p>
          </div>
        )}
      </div>
    </div>
  );
}
