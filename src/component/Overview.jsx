import React from "react";

export default function Overview() {
  const over = [
    {
      id: 1,
      percent: "94%",
      caption: "Listing approval rate",
      rate: "+2% vs last month",
    },
    {
      id: 2,
      percent: "62 days",
      caption: "Avg days to sell",
      rate: "+0.8 days faster",
    },
    {
      id: 3,
      percent: "31%",
      caption: "Finance plan adoption",
      rate: "+6% vs last month",
    },
    {
      id: 4,
      percent: "94%",
      caption: "Listing approval rate",
      rate: "+2% vs last month",
    },
    {
      id: 5,
      percent: "94%",
      caption: "Listing approval rate",
      rate: "+2% vs last month",
    },
  ];

  return (
    <div className="w-[95%] lg:w-full mx-auto">
      {/* Heading */}
      <h1 className="text-xl md:text-2xl font-semibold mb-4">
        Platform Overview
      </h1>

      {/* Card */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {over.map((view) => (
          <div
            key={view.id}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 px-4 py-4 border-b border-gray-200 last:border-b-0 "
          >
            {/* Caption */}
            <div className="w-full">
              <p className="text-gray-500 text-sm md:text-base">
                {view.caption}
              </p>
            </div>

            {/* Percentage & Rate */}
            <div className="flex flex-col sm:items-end">
              <p className="font-bold text-lg">{view.percent}</p>
              <p className="text-sm font-medium text-green-600">
                {view.rate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}