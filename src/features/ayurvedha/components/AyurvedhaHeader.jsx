import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function AyurvedhaHeader() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (_event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <header className="max-w-[1400px] mx-auto px-3 sm:px-4 pt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-[#481299] mb-2">
        Connect with Expert Ayurveda
      </h1>
      <p className="text-sm md:text-base text-[#0C4292] mb-6">
        Choose a category and see top featured Doctors
      </p>

      {/* Category tabs using Material UI */}
      <div className="rounded-full bg-[#F4F2FF] shadow-sm inline-flex px-1 py-0.5">
        <Tabs
          value={activeTab}
          onChange={handleChange}
          variant="scrollable"
          TabIndicatorProps={{ style: { display: "none" } }}
          sx={{
            minHeight: 0,
            "& .MuiTabs-flexContainer": {
              gap: 4,
            },
            "& .MuiTab-root": {
              minHeight: 0,
              minWidth: "auto",
              textTransform: "none",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              padding: "6px 20px",
              borderRadius: "9999px",
              color: "#0C4292",
            },
            "& .Mui-selected": {
              backgroundColor: "#ffffff",
              color: "#481299",
              boxShadow: "0 6px 18px rgba(15,23,42,0.12)",
              fontWeight: 600,
            },
          }}
        >
          <Tab label="Specialists" />
          <Tab label="Generalists" />
          <Tab label="Therapists" />
        </Tabs>
      </div>
    </header>
  );
}

export default AyurvedhaHeader;


